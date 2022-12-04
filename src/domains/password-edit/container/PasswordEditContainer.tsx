import React from "react";
import { PasswordEditTemplate } from "../components";
import PasswordEditForm from "../components/PasswordEditForm";
import PasswordEditHead from "../components/PasswordEditHead";

function PasswordEditContainer() {
  return (
    <PasswordEditTemplate>
      <PasswordEditHead headText="비밀번호 변경" />
      <PasswordEditForm />
    </PasswordEditTemplate>
  );
}

export default PasswordEditContainer;
