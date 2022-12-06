import React, { useEffect, useMemo, useState } from "react";
import { ItemId } from "@atlaskit/tree";
import styled from "styled-components";
import useChildFoldersQuery from "../hooks/useChildFoldersQuery";
import ChildFolderSelectNav from "../components/ChildFolderSelectNav";
import { ChildFolderItem } from "types/folder";
import ChildFolderList from "../components/ChildFolderList";
import useChildFoldersMutation from "../hooks/useChildFoldersMutation";
import { useToggle } from "domains/@shared/hooks";
import { SmallModal } from "components";

interface Props {
  folderId: ItemId;
}

export interface ChildFolder extends ChildFolderItem {
  checked: boolean;
}

function ChildFoldersContainer({ folderId }: Props) {
  const [childFolderList, setChildFolderList] = useState<ChildFolder[]>([]);
  const [isDeleteModal, onToggleDeleteModal] = useToggle();
  const [isOpenFolderList, onToggleFolderList] = useToggle(true);
  const { data } = useChildFoldersQuery(folderId);
  const { mutateChildFoldersDelete } = useChildFoldersMutation();

  useEffect(() => {
    if (!data) return;
    setChildFolderList(
      data.map((childFolder) => ({ ...childFolder, checked: false }))
    );
  }, [data]);

  const isAllCheckedChildFolder = useMemo(() => {
    if (!childFolderList.length) return false;
    return childFolderList.every((childFolder) => childFolder.checked);
  }, [childFolderList]);

  const isCheckedChildFolder = useMemo(() => {
    return childFolderList.some((childFolder) => childFolder.checked);
  }, [childFolderList]);

  const onToggleAllChildFolder = () => {
    setChildFolderList(
      childFolderList.map((childFolder) => ({
        ...childFolder,
        checked: !isAllCheckedChildFolder,
      }))
    );
  };

  const onToggleSingleChildFolder = (childFolderId: ItemId) => {
    setChildFolderList(
      childFolderList.map((childFolder) =>
        childFolder.folderId === childFolderId
          ? { ...childFolder, checked: !childFolder.checked }
          : childFolder
      )
    );
  };

  const onDeleteChildFolders = () => {
    const checkedChildFolderIds = childFolderList
      .filter((childFolder) => childFolder.checked)
      .map((childFolder) => childFolder.folderId);
    mutateChildFoldersDelete(checkedChildFolderIds);
  };

  if (!data || data.length === 0) return null;
  return (
    <ChildFoldersBlock>
      <ChildFolderSelectNav
        onToggleAllChildFolder={onToggleAllChildFolder}
        isAllChecked={isAllCheckedChildFolder}
        isCheckedChildFolder={isCheckedChildFolder}
        onToggleDeleteModal={onToggleDeleteModal}
        isOpenFolderList={isOpenFolderList}
        onToggleFolderList={onToggleFolderList}
      />

      <ChildFolderList
        childFolders={childFolderList}
        isCheckedChildFolder={isCheckedChildFolder}
        onToggleSingleChildFolder={onToggleSingleChildFolder}
        isOpenFolderList={isOpenFolderList}
      />

      {isDeleteModal && (
        <SmallModal
          isModal={isDeleteModal}
          onToggleModal={onToggleDeleteModal}
          title="이 폴더를 삭제할까요?"
          content="폴더에 있는 모든 내용이 <br /> 휴지통으로 들어가고, 30일 뒤 사라져요!"
          buttonName="삭제"
          onClick={onDeleteChildFolders}
        />
      )}
    </ChildFoldersBlock>
  );
}

const ChildFoldersBlock = styled.div`
  margin-bottom: 19px;
`;

export default ChildFoldersContainer;
