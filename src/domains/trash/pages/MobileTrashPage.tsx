import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import styled from "styled-components";
import { MobileTrashDotoriListContainer } from "../containers";

function MobileTrashPage() {
  useMobileHeader({
    leftMenu: "menu",
    title: "휴지통",
    isShowRightMenu: true,
  });

  return (
    <Container>
      <MobileTrashDotoriListContainer />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 16px;
`;

export default MobileTrashPage;
