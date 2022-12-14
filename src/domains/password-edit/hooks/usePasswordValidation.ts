import { useState } from "react";
import { passwordCheck } from "../apis/passwordCheck";
import { regexPassword } from "../utils/regex";

type ErrorMessageType =
  | "currentPasswordError"
  | "newPasswordError"
  | "newPasswordConfirmError";

export default function usePasswordValidation() {
  const [errorMessage, setErrorMessage] = useState({
    currentPasswordError: null,
    newPasswordError: null,
    newPasswordConfirmError: null,
  });

  const onChangeErrorMessage = (
    type: ErrorMessageType,
    message: string | null
  ) => {
    setErrorMessage((prev) => ({
      ...prev,
      [type]: message,
    }));
  };

  const onValidateMatchPassword = async (currentPassword: string) => {
    try {
      await passwordCheck(currentPassword);
    } catch (error) {
      onChangeErrorMessage(
        "currentPasswordError",
        "비밀번호가 일치하지 않습니다."
      );
    }
  };

  const onValidateNewPassword = (newPassword: string) => {
    if (newPassword === "") {
      onChangeErrorMessage("newPasswordError", "비밀번호를 입력해주세요.");
    }
    if (regexPassword(newPassword)) {
      onChangeErrorMessage(
        "newPasswordError",
        "영문 대소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 \n8자 이상 20자 이하로 입력해주세요."
      );
    }
  };

  const onValidateNewPasswordConfirm = (
    newPassword: string,
    newpasswordConfirm: string
  ) => {
    if (newPassword !== newpasswordConfirm) {
      onChangeErrorMessage(
        "newPasswordConfirmError",
        "새 비밀번호와 일치하지 않습니다."
      );
    }
  };

  return {
    errorMessage,
    onValidateMatchPassword,
    onValidateNewPassword,
    onValidateNewPasswordConfirm,
  };
}
