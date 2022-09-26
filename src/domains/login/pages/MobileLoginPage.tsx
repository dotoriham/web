import {
  MobileAuthLinked,
  MobileAuthTemplate,
} from "domains/@shared/components";
import React from "react";
import { LoginForm } from "../components/mobile";

function MobileLoginPage() {
  return (
    <MobileAuthTemplate>
      <LoginForm />
      <MobileAuthLinked link="/" text="비밀번호를 잊으셨나요?" />
    </MobileAuthTemplate>
  );
}

export default MobileLoginPage;
