import { SymbolProgressIcon } from "assets/icons";
import { Button } from "components";
import { palette } from "lib/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import Path from "routes/Path";
import styled from "styled-components";

function PasswordResetConfirm() {
  const navigate = useNavigate();

  return (
    <>
      <Title>
        임시 비밀번호가
        <br />
        발송 완료되었습니다!
      </Title>
      <Text>메일을 받지 못 하셨다면 스팸메일함을 확인해주세요.</Text>

      <Text>
        비밀번호는 마이페이지에서 언제든지
        <br />
        변경할 수 있어요!
      </Text>

      <ProgressIcon />

      <ButtonBlock>
        <SubmitButton
          width="100%"
          height="52px"
          variant="primary"
          onClick={() => navigate(Path.LoginPage)}
        >
          로그인
        </SubmitButton>
      </ButtonBlock>
    </>
  );
}

const Title = styled.div`
  font-size: 28px;
  letter-spacing: -0.28px;
  font-weight: bold;
  line-height: 41px;
  margin-bottom: 36px;
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 6px;
  color: ${palette.grayDarker};
`;

const ProgressIcon = styled(SymbolProgressIcon)`
  margin-left: -16px;
  margin-top: 48px;
`;

const ButtonBlock = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  > button {
    font-size: 16px;
  }
`;

const SubmitButton = styled(Button)`
  border-radius: 8px;
  margin-bottom: 16px;
`;

export default PasswordResetConfirm;
