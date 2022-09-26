import { Button, Input } from "components";
import React from "react";
import styled from "styled-components";

function LoginForm() {
  return (
    <Container>
      <Input
        width="100%"
        height="44px"
        borderRadius="8px"
        placeholder="아이디를 입력하세요"
      />
      <Input
        width="100%"
        borderRadius="8px"
        height="44px"
        placeholder="비밀번호를 입력하세요"
      />
      <Button width="100%" height="52px" variant="primary">
        로그인
      </Button>
    </Container>
  );
}

const Container = styled.div`
  input {
    margin-bottom: 12px;
    font-size: 14px;
  }
  button {
    margin: 28px 0;
    font-size: 16px;
  }
`;

export default LoginForm;
