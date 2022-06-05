import { Button } from "components/common";
import Input from "components/common/Input";
import { palette } from "lib/styles/palette";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { authValidateSelector } from "stores/authValidate";
import styled from "styled-components";
import { AuthType } from "types/auth";
import AgreementForm from "./AgreementForm";
import useAuthForm from "./hooks/useAuthForm";

interface Props {
  AuthType: AuthType;
}

function AuthForm({ AuthType }: Props) {
  const authValidateState = useSelector(authValidateSelector);

  const { form, onChangeForm, onLogin, onRegister, errorMessage, onBlur } =
    useAuthForm();
  const { email, password } = form;
  const { authError, passwordError, emailError } = errorMessage;

  const isDisabled = useMemo(() => {
    return !(
      authValidateState.email &&
      authValidateState.isAgree &&
      authValidateState.password
    );
  }, [authValidateState]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return AuthType === "login" ? onLogin() : onRegister();
  };

  return (
    <AuthFormWrapper onSubmit={onSubmit}>
      <AuthFormRow>
        <Input
          width="100%"
          height="56px"
          borderRadius="8px"
          placeholder="이메일"
          type="email"
          name="email"
          onChange={onChangeForm}
          value={email}
          autoFocus
          className="auth-input"
          // onBlur={AuthType === "signup" ? onBlur : undefined}
        />
        {/* {emailError && <ErrorText text={emailError} />} */}
      </AuthFormRow>
      <AuthFormRow>
        <Input
          width="100%"
          height="56px"
          borderRadius="8px"
          placeholder="비밀번호"
          type="password"
          name="password"
          onChange={onChangeForm}
          // value={password}
          className="auth-input"
          // onBlur={AuthType === "signup" ? onBlur : undefined}
        />
        {/* {passwordError && <ErrorText text={passwordError} />} */}
        {/* {authError && <ErrorText text={authError} />} */}
      </AuthFormRow>

      {AuthType === "signup" && <AgreementForm />}

      <AuthFormRow>
        <Button
          variant="primary"
          width="100%"
          height="56px"
          borderRadius="8px"
          className="auth-button"
          disabled={AuthType === "signup" ? isDisabled : false}
        >
          {AuthType === "login" ? "로그인" : "회원가입"}
        </Button>
      </AuthFormRow>
    </AuthFormWrapper>
  );
}

const AuthFormWrapper = styled.form`
  .auth-input {
    padding: 15px 0 18px 24px;
    font-size: 16px;
    color: ${palette.grayDarkest};
  }
  .auth-button {
    font-size: 16px;
  }
`;

const AuthFormRow = styled.div`
  margin-bottom: 20px;
`;

export default AuthForm;
