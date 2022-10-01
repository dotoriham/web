import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import styled from "styled-components";
import { MobilePasswordResetContainer } from "../containers";

function MobilePasswordResetPage() {
  useMobileHeader({
    leftMenu: "back",
    title: "비밀번호 재설정",
  });

  return (
    <Container>
      <MobilePasswordResetContainer />
    </Container>
  );
}

const Container = styled.div`
  padding: 36px 16px 0;
`;

export default MobilePasswordResetPage;
