import React, { ReactElement, useEffect, useRef, useState } from "react";
import Tree, {
  ItemId,
  moveItemOnTree,
  mutateTree,
  RenderItemParams,
  TreeDestinationPosition,
  TreeSourcePosition,
} from "@atlaskit/tree";
import styled from "styled-components";
import { palette } from "lib/styles/palette";
import { scrollbar } from "lib/styles/utilStyles";
import useFolderListQuery from "domains/@global/sidebar/hooks/useFolderListQuery";
import { useDispatch, useSelector } from "react-redux";
import { folderSelector, setFolders } from "stores/folder";
import { More16Icon, PlusIcon } from "assets/icons";
import useToggle from "domains/@shared/hooks/useToggle";
import useCreateFolder from "domains/@global/sidebar/hooks/useCreateFolder";
import SmallModal from "components/Modal/SmallModal";
import useDeleteFolder from "domains/@global/sidebar/hooks/useDeleteFolder";
import {
  findChildrenLengthById,
  isRootFolder,
} from "lib/utils/atlaskitTreeFinder";
import { moveFolderAPI } from "lib/api/folder";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Path from "routes/Path";
import { useQueryClient } from "react-query";
import { QueryKey } from "lib/queryKey";
import FolderMenu from "../../FolderMenu";
import useInitialFolderExpand from "../../hooks/useInitialFolderExpand";
import SidebarFolderItemIcon from "./SidebarFolderItemIcon";
import SidebarFolderRenameModal from "./SidebarFolderRenameModal";

export interface IFolderMenuPosition {
  top: number;
  left: number;
}

interface Props {
  onFolderClick(): void;
}

function SidebarFolderList({ onFolderClick }: Props) {
  const folders = useSelector(folderSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { pathname } = useLocation();
  const { data } = useFolderListQuery("sidebar");
  const queryClient = useQueryClient();
  const [urlFolderId, setUrlFolderId] = useState(""); // url folderid

  const folderBoxRef = useRef<HTMLDivElement>(null);
  const [draggingFolderId, setDraggingFolderId] = useState<ItemId | null>(null);
  const [isSelectedFolderId, setIsSelectedFolderId] = useState<ItemId>(0);

  // modal state
  const [isFolderMenu, setIsFolderMenu] = useState(false);
  const [isRenameModal, onToggleRenameModal] = useToggle();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isMoveModal, onToggleMoveModal] = useToggle();
  const [isDeleteModal, onToggleDeleteModal] = useToggle();

  const [folderMenuPosition, setFolderMenuPosition] =
    useState<IFolderMenuPosition>({
      top: 0,
      left: 0,
    });

  const { onCreateFolder } = useCreateFolder();
  const { mutateDeleteFolder } = useDeleteFolder(isSelectedFolderId);

  useEffect(() => {
    if (params.folderId) setUrlFolderId(params.folderId);
    // @Note ??? ?????? 1?????? ???????????? ?????? ????????? deps ?????????
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInitialFolderExpand(urlFolderId);

  useEffect(() => {
    if (!data) return;
    dispatch(setFolders(data));
  }, [data, dispatch]);

  const onChangeSelectedFolderId = (id: ItemId) => {
    setIsSelectedFolderId(id);
  };

  const onToggleFolderMenu = (e: React.MouseEvent) => {
    setIsFolderMenu(!isFolderMenu);
    setFolderMenuPosition({
      top: e.currentTarget.getBoundingClientRect().top,
      left: e.currentTarget.getBoundingClientRect().left,
    });
  };

  const onToggleModal = {
    onToggleFolderMenu,
    onToggleRenameModal,
    onToggleMoveModal,
    onToggleDeleteModal,
  };

  // ?????? ??????
  const onExpandFolder = (itemId: ItemId) => {
    dispatch(setFolders(mutateTree(folders, itemId, { isExpanded: true })));
  };

  // ?????? ??????
  const onCollapseFolder = (itemId: ItemId) => {
    dispatch(setFolders(mutateTree(folders, itemId, { isExpanded: false })));
  };

  const onDragStartFolder = (itemId: ItemId) => {
    setDraggingFolderId(itemId);
  };

  // @Note destination: ????????? ??????, source: ?????? ??????
  const onDragEndFolder = async (
    source: TreeSourcePosition,
    destination?: TreeDestinationPosition
  ) => {
    if (!destination) return;
    if (!draggingFolderId) return;

    const newTree = moveItemOnTree(folders, source, destination);

    const prevParentId = source.parentId;
    const prevIndex = source.index;
    const nextParentId = destination.parentId;
    const nextIndex =
      destination.index === undefined
        ? findChildrenLengthById(folders, nextParentId)
        : destination.index;

    const body = {
      moveFolderId: draggingFolderId,
      prevParentId,
      nextParentId,
      prevIndex,
      nextIndex,
    };

    dispatch(setFolders(newTree));
    try {
      await moveFolderAPI(body);
      queryClient.invalidateQueries(QueryKey.CHILD_FOLDER_LIST);
    } catch (e) {
      console.log("?????? ????????? ??????????????????.");
    }
  };

  // ??? ?????? ?????????
  const renderFolderItem = ({
    item,
    onExpand,
    onCollapse,
    provided,
  }: RenderItemParams): ReactElement => {
    return (
      <>
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <FolderItemBlock>
            <FolderLeftBox>
              <SidebarFolderItemIcon
                item={item}
                onCollapse={onCollapse}
                onExpand={onExpand}
              />
              <FolderTitle
                active={pathname === `${Path.DotoriPage}/${item.id}`}
                onClick={() => {
                  navigate(`${Path.DotoriPage}/${item.id}`);
                  onFolderClick();
                }}
              >
                {item.data.name}
              </FolderTitle>
            </FolderLeftBox>

            <FolderRightBox
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => e.stopPropagation()}
            >
              <FolderETCButton onClick={() => onCreateFolder(item.id)}>
                <PlusIcon />
              </FolderETCButton>

              <FolderETCButton
                onClick={(e) => {
                  onToggleFolderMenu(e);
                  onChangeSelectedFolderId(item.id);
                }}
              >
                <More16Icon />
              </FolderETCButton>
            </FolderRightBox>
          </FolderItemBlock>
        </div>
      </>
    );
  };

  return (
    <FolderListWrapper ref={folderBoxRef}>
      <Tree
        tree={folders}
        renderItem={renderFolderItem}
        onExpand={onExpandFolder}
        onCollapse={onCollapseFolder}
        onDragStart={onDragStartFolder}
        onDragEnd={onDragEndFolder}
        offsetPerLevel={16} // ??? ????????? padding ???
        isNestingEnabled
        isDragEnabled
      />

      {isFolderMenu && (
        <FolderMenu
          position={folderMenuPosition}
          onToggleModal={onToggleModal}
        />
      )}

      {isRenameModal && (
        <SidebarFolderRenameModal
          isOpen={isRenameModal}
          onClose={onToggleRenameModal}
          isSelectedFolderId={isSelectedFolderId}
        />
      )}

      {isDeleteModal && (
        <SmallModal
          isModal={isDeleteModal}
          onToggleModal={onToggleDeleteModal}
          title={
            isRootFolder(folders, isSelectedFolderId)
              ? `??? ???????????? ????????????????`
              : `??? ????????? ????????????????`
          }
          content={
            isRootFolder(folders, isSelectedFolderId)
              ? `???????????? ?????? ?????? ????????? <br /> ??????????????? ????????????, 30??? ??? ????????????!`
              : `????????? ?????? ?????? ????????? <br /> ??????????????? ????????????, 30??? ??? ????????????!`
          }
          buttonName="??????"
          onClick={() => mutateDeleteFolder()}
        />
      )}
    </FolderListWrapper>
  );
}

const FolderListWrapper = styled.div`
  height: 390px;
  margin: 0 -16px;
  position: relative;
  overflow: hidden auto;
  overflow-x: auto;
  border-top: 1px solid #e5e5e4;
  border-bottom: 1px solid #e5e5e4;
  ${scrollbar};
`;

const FolderItemBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 48px;
  font-size: 12px;
  padding: 5px 2px;
  border-radius: 4px;
  &:hover {
    background-color: ${palette.hover0};
    font-weight: 500;
  }
`;

const FolderLeftBox = styled.div`
  display: flex;
  align-items: center;
  min-width: 65px;
`;

const FolderTitle = styled.span<{ active: boolean }>`
  cursor: pointer;
  color: ${({ active }) => (active ? palette.primary : palette.black)};
  margin-left: 4px;
  height: 48px;
  line-height: 48px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const FolderRightBox = styled.div`
  display: flex;
  align-items: center;
`;

const FolderETCButton = styled.button`
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SidebarFolderList;
