import React from "react";
import styled from "styled-components";
import { MobileDotoriListContainer } from "../containers";

function MobileDotoriPage() {
  return (
    <Container>
      {/* <MobileRemindListContainer /> */}
      <MobileDotoriListContainer />
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`;

export default MobileDotoriPage;