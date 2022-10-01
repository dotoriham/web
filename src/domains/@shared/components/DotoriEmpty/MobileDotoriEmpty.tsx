import { SymbolGray96Icon } from "assets/icons";
import { palette } from "lib/styles";
import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

function MobileDotoriEmpty({ text }: Props) {
  return (
    <Container>
      <SymbolGray96Icon />
      <EmptyText>{text}</EmptyText>
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

export default MobileDotoriEmpty;
