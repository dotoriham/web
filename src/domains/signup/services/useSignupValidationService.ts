import { useState } from "react";
import { regexEmail, regexEng, regexNum, regexSpe } from "../utils";

export default function useSignupValidationService() {
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onEmailValidation = async (email: string) => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      return;
    }

    if (!regexEmail(email)) {
      setEmailError("이메일 형식이 올바르지 않습니다.");
      return;
    }

    setEmailError(null);
  };

  const onPasswordValidation = async (password: string) => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return;
    }

    let passwordValidCount = 0;
    if (regexNum(password)) passwordValidCount += 1;
    if (regexEng(password)) passwordValidCount += 1;
    if (regexSpe(password)) passwordValidCount += 1;

    if (password.length < 8 || password.length > 16 || passwordValidCount < 2) {
      setPasswordError(
        "영문 대소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 8~16자의 비밀번호를 생성해주세요."
      );
      return;
    }

    setPasswordError(null);
  };

  return {
    onEmailValidation,
    onPasswordValidation,
    emailError,
    passwordError,
  };
}
