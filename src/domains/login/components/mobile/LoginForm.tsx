import { EyeActive24Icon, EyeInActive24Icon } from "assets/icons";
import { Button, Input } from "components";
import { useToggle } from "domains/@shared/hooks";
import React from "react";
import styled from "styled-components";

interface Props {
  email: string;
  password: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin(e: React.FormEvent<HTMLFormElement>): void;
}

function LoginForm({
  email,
  onChangeEmail,
  onChangePassword,
  onLogin,
  password,
}: Props) {
  const [isShowPassword, onToggleShowPassword] = useToggle(false);

  return (
    <Container onSubmit={onLogin}>
      <Input
        value={email}
        onChange={onChangeEmail}
        width="100%"
        height="44px"
        borderRadius="8px"
        placeholder="아이디를 입력하세요"
      />
      <InputBlock>
        <Input
          width="100%"
          value={password}
          onChange={onChangePassword}
          borderRadius="8px"
          type={isShowPassword ? "text" : "password"}
          height="44px"
          placeholder="비밀번호를 입력하세요"
        />
        {isShowPassword ? (
          <EyeActive24Icon onClick={onToggleShowPassword} />
        ) : (
          <EyeInActive24Icon onClick={onToggleShowPassword} />
        )}
      </InputBlock>
      <Button type="submit" width="100%" height="52px" variant="primary">
        로그인
      </Button>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  input {
    margin-bottom: 12px;
    font-size: 14px;
  }
  button {
    margin: 28px 0;
    font-size: 16px;
  }
`;

const InputBlock = styled.div`
  width: 100%;
  position: relative;
  svg {
    position: absolute;
    right: 16px;
    top: 10px;
    cursor: pointer;
  }
`;

export default LoginForm;
