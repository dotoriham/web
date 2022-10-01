import { SymbolGray96Icon } from "assets/icons";
import { palette } from "lib/styles";
import React from "react";
import styled from "styled-components";

function SearchDotoriEmpty() {
  return (
    <Container>
      <SymbolGray96Icon />
      <EmptyText>찾으시는 도토리가 없어요!</EmptyText>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100vh - 104px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const EmptyText = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: ${palette.grayDarker};
  margin-top: 16px;
`;

export default SearchDotoriEmpty;
