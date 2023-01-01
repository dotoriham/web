import { useState } from "react";
import { useMutation } from "react-query";
import { passwordCheck } from "../apis/passwordCheck";
import { regexPassword } from "../utils/regex";

export default function usePasswordValidation() {
  const [currentPasswordError, setCurrentPasswordError] =
    useState<string | null>(null);
  const [newPasswordError, setNewPasswordError] = useState<string | null>(null);
  const [newPasswordConfirmError, setNewPasswordComfirmError] =
    useState<string | null>(null);

  const { mutate: onValidateMatchPassword } = useMutation(
    (currentPassword: string) => passwordCheck(currentPassword),
    {
      onSuccess: () => {
        setCurrentPasswordError("");
      },
      onError: () => {
        setCurrentPasswordError("비밀번호가 일치하지 않습니다.");
      },
    }
  );

  const onValidateNewPassword = (newPassword: string) => {
    if (newPassword === "") {
      setNewPasswordError("비밀번호를 입력해주세요.");
      return;
    }
    if (!regexPassword(newPassword)) {
      setNewPasswordError(
        "영문 대소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 \n8자 이상 20자 이하로 입력해주세요."
      );
      return;
    }
    setNewPasswordError("");
  };

  const onValidateNewPasswordConfirm = (
    newPassword: string,
    newpasswordConfirm: string
  ) => {
    if (newPassword !== newpasswordConfirm) {
      setNewPasswordComfirmError("새 비밀번호와 일치하지 않습니다.");
      return;
    }
    setNewPasswordComfirmError("");
  };

  return {
    currentPasswordError,
    newPasswordError,
    newPasswordConfirmError,
    onValidateMatchPassword,
    onValidateNewPassword,
    onValidateNewPasswordConfirm,
  };
}
