import DividerLine from "components/DividerLine/DividerLine";
import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

function AuthDivider() {
  return (
    <AuthDividerStyled>
      <DividerLine width="123px" color="#f3f3f3" />
      <DividerText>or</DividerText>
      <DividerLine width="123px" color="#f3f3f3" />
    </AuthDividerStyled>
  );
}

const AuthDividerStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0 28px 0;
`;

const DividerText = styled.span`
  width: 75px;
  height: 25px;
  font-size: 16px;
  text-align: center;
  line-height: 1.56;
  color: ${palette.grayLight};
`;

export default AuthDivider;
