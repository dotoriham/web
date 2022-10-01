import { isLogin } from "lib/utils/auth";
import React from "react";
import { PrivateRouting, PublicRouting } from "routes/MobileRouting";
import styled from "styled-components";
import { MobileHeader } from "../header";

function MobileLayout() {
  return (
    <Layout>
      <MobileHeader />
      <Container>
        {isLogin() ? <PrivateRouting /> : <PublicRouting />}
      </Container>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const Container = styled.div`
  width: 100%;
  padding: 52px 0 0 0;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;
export default MobileLayout;
