import { breakpoints, media } from "lib/styles";
import { isLogin } from "lib/utils/auth";
import { isSharePage } from "lib/utils/checkRoutePath";
import React from "react";
import { PrivateRouting, PublicRouting } from "routes/Routing";
import styled from "styled-components";
import { Footer } from "../footer";
import { Header } from "../header";

function DesktopLayout() {
  return (
    <>
      <Header />
      <Container isSharePage={isSharePage()}>
        {isLogin() ? <PrivateRouting /> : <PublicRouting />}
      </Container>
      <Footer />
    </>
  );
}
const Container = styled.main<{ isSharePage: boolean }>`
  width: ${({ isSharePage }) =>
    isSharePage ? breakpoints.share : breakpoints.large}px;
  margin: 0 auto;
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  ${media.large} {
    width: ${breakpoints.medium}px;
  }
  ${media.medium} {
    width: 100%;
  }
`;

export default DesktopLayout;
