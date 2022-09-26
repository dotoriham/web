import { useDragScroll } from "domains/@shared/hooks";
import React from "react";
import styled from "styled-components";
import { ChildFolderItem } from "types/folder";
import ChildFolderListItem from "./ChildFolderListItem";

interface Props {
  childFolders: ChildFolderItem[];
}

function ChildFolderList({ childFolders }: Props) {
  const { onDragEnd, onDragMove, onDragStart, scrollRef } = useDragScroll();

  return (
    <Container
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
    >
      {childFolders.map((childFolder) => (
        <ChildFolderListItem
          key={childFolder.folderId}
          childFolder={childFolder}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default ChildFolderList;
