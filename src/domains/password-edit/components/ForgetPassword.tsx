import { palette } from "lib/styles";
import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ForgetPassword() {
  return (
    <ForgetText>
      <div>비밀번호를 잊으셨나요?</div>
      <div>
        <Link to="">비밀번호 재설정</Link>
      </div>
    </ForgetText>
  );
}

const ForgetText = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 17px;
  padding: 4px 0;
  gap: 8px;
  div:first-child {
    color: ${palette.grayDark};
  }
  div:last-child {
    color: ${palette.grayDarkest};
    text-decoration: underline;
  }
`;

export default memo(ForgetPassword);
