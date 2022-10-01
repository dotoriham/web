import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import styled from "styled-components";
import { PasswordResetConfirm } from "../components/mobile";

function MobilePasswordResetConfirmPage() {
  useMobileHeader({
    leftMenu: "back",
    title: "비밀번호 재설정",
  });

  return (
    <Container>
      <PasswordResetConfirm />
    </Container>
  );
}

const Container = styled.div`
  padding: 36px 16px;
`;

export default MobilePasswordResetConfirmPage;
