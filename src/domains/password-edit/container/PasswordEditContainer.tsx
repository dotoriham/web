import { memo } from "react";
import { PasswordEditTemplate } from "../components";
import PasswordEditForm from "../components/PasswordEditForm";
import PasswordEditHead from "../components/PasswordEditHead";
import useCheckSocialType from "../hooks/useCheckSocialType";
import usePasswordEditForm from "../hooks/usePasswordEditForm";

function PasswordEditContainer() {
  useCheckSocialType();
  const {
    newPassword,
    newPasswordConfirm,
    currentPassword,
    onChangeCurrentPassword,
    onChangeNewPassword,
    onChangeNewPasswordConfirm,
    onFormValidation,
    currentPasswordError,
    newPasswordConfirmError,
    newPasswordError,
    mutatePasswordEdit,
    disableButton,
  } = usePasswordEditForm();

  return (
    <PasswordEditTemplate>
      <PasswordEditHead headText="비밀번호 변경" />
      <PasswordEditForm
        currentPassword={currentPassword}
        currentPasswordError={currentPasswordError}
        mutatePasswordEdit={mutatePasswordEdit}
        newPassword={newPassword}
        newPasswordConfirm={newPasswordConfirm}
        newPasswordConfirmError={newPasswordConfirmError}
        newPasswordError={newPasswordError}
        onChangeCurrentPassword={onChangeCurrentPassword}
        onChangeNewPassword={onChangeNewPassword}
        onChangeNewPasswordConfirm={onChangeNewPasswordConfirm}
        onFormValidation={onFormValidation}
        disableButton={disableButton}
      />
    </PasswordEditTemplate>
  );
}

export default memo(PasswordEditContainer);
