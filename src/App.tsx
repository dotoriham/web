import React from "react";
import { initializeApp } from "firebase/app";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyles from "./lib/styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import ToastContainerStyled from "lib/styles/toastStyle";
import useLoggedInUserReplace from "domains/@shared/hooks/useLoggedInUserReplace";
import useInitialRegisterEffect from "domains/@shared/hooks/useInitialRegisterEffect";
import { firebaseConfig } from "lib/firebase";
import { DeviceDetectProvider } from "domains/@shared/contexts";
import { AppLayout } from "domains/@global/layouts";
import useRouteChangeTracker from "domains/@shared/hooks/useRouteChangeTracker";

initializeApp(firebaseConfig);

function App() {
  useLoggedInUserReplace();
  useInitialRegisterEffect();
  useRouteChangeTracker();

  return (
    <DeviceDetectProvider>
      <GlobalStyles />
      <AppLayout />
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

export default App;
