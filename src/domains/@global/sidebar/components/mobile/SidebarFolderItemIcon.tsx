import { ItemId, TreeItem } from "@atlaskit/tree";
import { ArrowDownIcon, ArrowSideIcon } from "assets/icons";
import FolderEmoji from "components/Folder/FolderEmoji";
import React from "react";
import styled from "styled-components";

interface Props {
  item: TreeItem;
  onExpand: (itemId: ItemId) => void;
  onCollapse: (itemId: ItemId) => void;
}

function SidebarFolderItemIcon({ item, onExpand, onCollapse }: Props) {
  return (
    <FolderItemIconWrapper onMouseDown={(e) => e.stopPropagation()}>
      <ArrowButton
        isShow={item.children.length > 0}
        type="button"
        onClick={() =>
          item.isExpanded ? onCollapse(item.id) : onExpand(item.id)
        }
      >
        {item.isExpanded ? <ArrowDownIcon /> : <ArrowSideIcon />}
      </ArrowButton>
      <FolderEmoji emoji={item.data.emoji} />
    </FolderItemIconWrapper>
  );
}

const FolderItemIconWrapper = styled.div`
  display: flex;
`;

const ArrowButton = styled.button<{ isShow: boolean }>`
  padding: 0;
  width: 16px;
  height: 16px;
  margin-left: 16px;
  visibility: ${(props) => !props.isShow && "hidden"};
  margin-right: 10px;
`;

export default SidebarFolderItemIcon;
