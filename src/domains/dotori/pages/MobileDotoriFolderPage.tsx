import React from "react";
import styled from "styled-components";
import { MobileChildFolderListContainer } from "../containers";
import MobileDotoriAddContainer from "../containers/MobileDotoriAddContainer";
import MobileFolderDotoriListContainer from "../containers/MobileFolderDotoriListContainer";

function MobileDotoriFolderPage() {
  return (
    <Container>
      <MobileChildFolderListContainer />
      <MobileFolderDotoriListContainer />
      <MobileDotoriAddContainer />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

export default MobileDotoriFolderPage;
