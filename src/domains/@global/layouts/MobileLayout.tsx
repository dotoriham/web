import { isLogin } from "lib/utils/auth";
import React from "react";
import { PrivateRouting, PublicRouting } from "routes/MobileRouting";
import styled from "styled-components";
import { MobileHeader } from "../header";

function MobileLayout() {
  return (
    <>
      <MobileHeader />
      <Container>
        {isLogin() ? <PrivateRouting /> : <PublicRouting />}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 52px 16px 0 16px;
`;
export default MobileLayout;
