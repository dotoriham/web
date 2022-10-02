import { Button, Input } from "components";
import React from "react";
import styled from "styled-components";
import Error from "./Error";

interface Props {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignup(e: React.FormEvent<HTMLFormElement>): void;
  emailError: string | null;
  passwordError: string | null;
}

function SignupForm({
  email,
  emailError,
  onChangeEmail,
  onChangePassword,
  onSignup,
  password,
  passwordError,
}: Props) {
  return (
    <Container onSubmit={onSignup}>
      <Input
        width="100%"
        value={email}
        onChange={onChangeEmail}
        height="44px"
        borderRadius="8px"
        placeholder="아이디를 입력하세요"
      />
      {emailError && <Error mt={8}>{emailError}</Error>}

      <Input
        width="100%"
        value={password}
        onChange={onChangePassword}
        borderRadius="8px"
        height="44px"
        type="password"
        placeholder="비밀번호를 입력하세요"
      />
      {passwordError && <Error mt={8}>{passwordError}</Error>}
      <Button width="100%" height="52px" variant="primary">
        회원가입
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  input {
    margin-top: 12px;
    font-size: 14px;
    &:first-child {
      margin-top: 0;
    }
  }
  button {
    margin: 28px 0;
    font-size: 16px;
  }
`;

export default SignupForm;
