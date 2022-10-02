import React from "react";
import { SignupForm } from "../components/mobile";
import { useSignupService, useSignupValidationService } from "../services";

function MobileSignupFormContainer() {
  const { email, onChangeEmail, onChangePassword, onSignup, password } =
    useSignupService();

  const { emailError, onEmailValidation, onPasswordValidation, passwordError } =
    useSignupValidationService();

  const onSignupFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEmailValidation(email);
    onPasswordValidation(password);
    if (emailError || passwordError) return;
    onSignup();
  };

  return (
    <SignupForm
      email={email}
      password={password}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailError={emailError}
      passwordError={passwordError}
      onSignup={onSignupFormSubmit}
    />
  );
}

export default MobileSignupFormContainer;
