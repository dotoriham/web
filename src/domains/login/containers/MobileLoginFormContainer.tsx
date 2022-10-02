import React from "react";
import { LoginForm } from "../components/mobile";
import { useLoginService } from "../services";

function MobileLoginFormContainer() {
  const { email, onChangeEmail, onChangePassword, onLogin, password } =
    useLoginService();

  return (
    <LoginForm
      onLogin={onLogin}
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
}

export default MobileLoginFormContainer;
