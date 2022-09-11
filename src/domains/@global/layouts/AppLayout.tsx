import { useDeviceDetect } from "domains/@shared/hooks/useDeviceDetect";
import React from "react";
import styled from "styled-components";
import { DesktopLayout } from ".";
import MobileLayout from "./MobileLayout";

function AppLayout() {
  const { mobile } = useDeviceDetect();

  return <Layout>{mobile ? <MobileLayout /> : <DesktopLayout />}</Layout>;
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export default AppLayout;
