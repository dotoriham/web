import { useState, useCallback } from "react";
import { useDebounce } from "domains/@shared/hooks";

export default function usePasswordEditForm() {
  const [editPasswordForm, setEditPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setEditPasswordForm({
        ...editPasswordForm,
        [name]: value,
      });
    },
    [editPasswordForm]
  );

  const debouncedCurrentPassword = useDebounce(
    editPasswordForm.currentPassword,
    500
  );

  return { editPasswordForm, onChangeForm, debouncedCurrentPassword };
}
