import { useDebounce, useInput } from "domains/@shared/hooks";
import { useCallback, useMemo } from "react";
import { useMutation } from "react-query";
import usePasswordValidation from "./usePasswordValidation";
import useToast from "domains/@shared/hooks/useToast";
import { useNavigate } from "react-router-dom";
import Path from "routes/Path";
import { patchPasswordEdit } from "../apis/patchPassword";

export default function usePasswordEditForm() {
  const {
    currentPasswordError,
    newPasswordConfirmError,
    newPasswordError,
    onValidateMatchPassword,
    onValidateNewPassword,
    onValidateNewPasswordConfirm,
  } = usePasswordValidation();

  const [currentPassword, onChangeCurrentPassword] = useInput("");
  const [newPassword, onChangeNewPassword] = useInput("");
  const [newPasswordConfirm, onChangeNewPasswordConfirm] = useInput("");
  const debouncedCurrentPassword = useDebounce(currentPassword, 300);
  const { changePasswordToast, errorToast } = useToast();
  const navigate = useNavigate();

  const onFormValidation = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const name = e.target.name;
      switch (name) {
        case "currentPassword":
          onValidateMatchPassword(debouncedCurrentPassword as string);
          break;
        case "newPassword":
          onValidateNewPassword(newPassword);
          break;
        case "newPasswordConfirm":
          onValidateNewPasswordConfirm(newPassword, newPasswordConfirm);
          break;
        default:
          break;
      }
    },
    [
      debouncedCurrentPassword,
      newPassword,
      newPasswordConfirm,
      onValidateMatchPassword,
      onValidateNewPassword,
      onValidateNewPasswordConfirm,
    ]
  );

  const { mutate: mutatePasswordEdit } = useMutation(
    () => patchPasswordEdit({ currentPassword, newPassword }),
    {
      onSuccess: () => {
        changePasswordToast();
        navigate(Path.MyPage);
      },
      onError: (error) => {
        errorToast(error as string, "small");
      },
    }
  );

  const disableButton = useMemo(() => {
    return (currentPasswordError ||
      newPasswordError ||
      newPasswordConfirmError ||
      !currentPassword ||
      !newPassword ||
      !newPasswordConfirm) as boolean;
  }, [
    currentPassword,
    currentPasswordError,
    newPassword,
    newPasswordConfirm,
    newPasswordConfirmError,
    newPasswordError,
  ]);

  return {
    newPassword,
    onChangeCurrentPassword,
    newPasswordConfirm,
    onChangeNewPasswordConfirm,
    onChangeNewPassword,
    debouncedCurrentPassword,
    currentPassword,
    onFormValidation,
    currentPasswordError,
    newPasswordConfirmError,
    newPasswordError,
    mutatePasswordEdit,
    disableButton,
  };
}
