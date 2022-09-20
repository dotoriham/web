import { PlusIcon } from "assets/icons";
import { Button } from "components";
import useHandleFolder from "domains/@global/sidebar/hooks/useCreateFolder";
import React from "react";
import styled from "styled-components";

function SidebarAddFolderButton() {
  const { onCreateFolder } = useHandleFolder();

  return (
    <AddFolderButtonStyled
      variant="secondary"
      width="100%"
      height="44px"
      borderRadius="8px"
      onClick={() => onCreateFolder()}
    >
      <PlusIcon />
      보관함 추가
    </AddFolderButtonStyled>
  );
}

const AddFolderButtonStyled = styled(Button)`
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 28px;
  svg {
    margin-right: 8px;
  }
`;

export default SidebarAddFolderButton;
