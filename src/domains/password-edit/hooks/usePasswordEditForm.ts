import { useDebounce, useInput } from "domains/@shared/hooks";

export default function usePasswordEditForm() {
  const [currentPassword, onChangeCurrentPassword] = useInput("");
  const [newPassword, onChangeNewPassword] = useInput("");
  const [newPasswordConfirm, onChangeNewPasswordConfirm] = useInput("");
  const debouncedCurrentPassword = useDebounce(currentPassword, 500);

  return {
    newPassword,
    onChangeCurrentPassword,
    newPasswordConfirm,
    onChangeNewPasswordConfirm,
    onChangeNewPassword,
    debouncedCurrentPassword,
  };
}
