import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import styled from "styled-components";
import { MobileSearchDotoriListContainer } from "../containers";

function MobileSearchPage() {
  useMobileHeader({
    leftMenu: "back",
    searchBar: true,
  });

  return (
    <Container>
      <MobileSearchDotoriListContainer />
    </Container>
  );
}

const Container = styled.div`
  padding: 0 16px;
`;

export default MobileSearchPage;
