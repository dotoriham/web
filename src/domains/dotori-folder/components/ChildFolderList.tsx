import { ItemId } from "@atlaskit/tree";
import React from "react";
import styled from "styled-components";
import { ChildFolder } from "../containers/ChildFoldersContainer";
import ChildFolderListItem from "./ChildFolderListItem";

interface Props {
  childFolders: ChildFolder[];
  onToggleSingleChildFolder: (childFolderId: ItemId) => void;
  isCheckedChildFolder: boolean;
  isOpenFolderList: boolean;
}

function ChildFolderList({
  childFolders,
  isCheckedChildFolder,
  onToggleSingleChildFolder,
  isOpenFolderList,
}: Props) {
  if (!isOpenFolderList) {
    return null;
  }

  return (
    <ChildFolderListBlock>
      {childFolders.map((childFolder) => (
        <ChildFolderListItem
          key={childFolder.folderId}
          childFolder={childFolder}
          isCheckedChildFolder={isCheckedChildFolder}
          onToggleSingleChildFolder={onToggleSingleChildFolder}
        />
      ))}
    </ChildFolderListBlock>
  );
}

const ChildFolderListBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ChildFolderList;
