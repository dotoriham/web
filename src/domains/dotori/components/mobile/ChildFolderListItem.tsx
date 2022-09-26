import { FolderEmoji } from "components";
import React from "react";
import styled from "styled-components";
import { ChildFolderItem } from "types/folder";

interface Props {
  childFolder: ChildFolderItem;
}

function ChildFolderListItem({ childFolder }: Props) {
  const { emoji, name } = childFolder;

  return (
    <Container>
      <FolderEmoji emoji={emoji} />
      <span>{name}</span>
    </Container>
  );
}

const Container = styled.div`
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
