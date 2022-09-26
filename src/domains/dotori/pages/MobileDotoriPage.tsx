import React from "react";
import styled from "styled-components";
import { MobileDotoriListContainer } from "../containers";
import MobileDotoriAddContainer from "../containers/MobileDotoriAddContainer";

function MobileDotoriPage() {
  return (
    <Container>
      {/* <MobileRemindListContainer /> */}
      <MobileDotoriListContainer />
      <MobileDotoriAddContainer />
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

export default MobileDotoriPage;
