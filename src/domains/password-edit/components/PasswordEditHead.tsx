import { DividerLine, LargeBlackText } from "components";
import { palette } from "lib/styles";
import React from "react";
import styled from "styled-components";

interface PasswordEditHeadProps {
  headText: string;
}

function PasswordEditHead({ headText }: PasswordEditHeadProps) {
  return (
    <HeadBlock>
      <TextBox>
        <LargeBlackText text={headText} />
      </TextBox>
      <DividerLine width="100%" color={palette.grayLight} />
    </HeadBlock>
  );
}

const HeadBlock = styled.div`
  width: 100%;
  padding-bottom: 8px;
`;

const TextBox = styled.div`
  margin-bottom: 15px;
`;

export default PasswordEditHead;
