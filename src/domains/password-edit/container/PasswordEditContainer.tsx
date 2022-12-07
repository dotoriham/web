import { PasswordEditTemplate } from "../components";
import PasswordEditForm from "../components/PasswordEditForm";
import PasswordEditHead from "../components/PasswordEditHead";
import useCheckSocialType from "../hooks/useCheckSocialType";

function PasswordEditContainer() {
  useCheckSocialType();

  return (
    <PasswordEditTemplate>
      <PasswordEditHead headText="비밀번호 변경" />
      <PasswordEditForm />
    </PasswordEditTemplate>
  );
}

export default PasswordEditContainer;
