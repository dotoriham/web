import { Button, Input } from "components";
import React from "react";
import styled from "styled-components";

function MobilePasswordResetContainer() {
  return (
    <Container>
      <Input
        width="100%"
        height="44px"
        placeholder="이메일을 입력하세요"
        borderRadius="6px"
      />
      <ButtonBlock>
        <SubmitButton width="100%" height="52px" variant="primary">
          임시 비밀번호 발급
        </SubmitButton>
      </ButtonBlock>
    </Container>
  );
}

const Container = styled.div`
  > input {
    font-size: 14px;
  }
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

export default MobilePasswordResetContainer;
