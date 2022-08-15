import Header from "domains/@global/header/Header";
import { breakpoints, media } from "lib/styles/media";
import React from "react";
import { initializeApp } from "firebase/app";
import { ReactQueryDevtools } from "react-query/devtools";
import styled from "styled-components";
import GlobalStyles from "./lib/styles/globalStyles";
import { PrivateRouting, PublicRouting } from "./routes/Routing";
import "react-toastify/dist/ReactToastify.css";
import ToastContainerStyled from "lib/styles/toastStyle";
import Footer from "domains/@global/footer";
import useLoggedInUserReplace from "domains/@shared/hooks/useLoggedInUserReplace";
import useInitialRegisterEffect from "domains/@shared/hooks/useInitialRegisterEffect";
import { isLogin } from "lib/utils/auth";
import { firebaseConfig } from "lib/firebase";
import { isSharePage } from "lib/utils/checkRoutePath";
import { MobileHeader } from "domains/@global/header";
import { DeviceDetectProvider } from "domains/@shared/contexts";

initializeApp(firebaseConfig);

function App() {
  useLoggedInUserReplace();
  useInitialRegisterEffect();

  return (
    <DeviceDetectProvider>
      <AppWrapper>
        <GlobalStyles />
        <MobileHeader />
        <Header />
        <MainLayout isSharePage={isSharePage()}>
          {isLogin() ? <PrivateRouting /> : <PublicRouting />}
        </MainLayout>
        <Footer />
      </AppWrapper>

      <ReactQueryDevtools />
      <ToastContainerStyled
        hideProgressBar
        position="bottom-center"
        autoClose={2000}
        closeOnClick
        pauseOnHover
        closeButton={false}
        theme="dark"
      />
    </DeviceDetectProvider>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainLayout = styled.main<{ isSharePage: boolean }>`
  width: ${({ isSharePage }) =>
    isSharePage ? breakpoints.share : breakpoints.large}px;
  margin: 0 auto;
  flex: 1 auto;
  display: flex;
  flex-direction: column;
  ${media.large} {
    width: ${breakpoints.medium}px;
  }
`;

export default App;
