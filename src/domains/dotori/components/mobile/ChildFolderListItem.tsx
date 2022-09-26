import { FolderEmoji } from "components";
import React from "react";
import { Link } from "react-router-dom";
import Path from "routes/Path";
import styled from "styled-components";
import { ChildFolderItem } from "types/folder";

interface Props {
  childFolder: ChildFolderItem;
}

function ChildFolderListItem({ childFolder }: Props) {
  const { emoji, name, folderId } = childFolder;

  return (
    <Container to={`${Path.DotoriPage}/${folderId}`}>
      <FolderEmoji emoji={emoji} />
      <span>{name}</span>
    </Container>
  );
}

const Container = styled(Link)`
  border: 1px solid #d4d2cf;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  width: 156px;
  font-size: 12px;
  margin-right: 12px;
  &:nth-child(odd) {
    margin-bottom: 12px;
  }
  svg {
    margin-right: 4px;
  }
`;

export default ChildFolderListItem;
