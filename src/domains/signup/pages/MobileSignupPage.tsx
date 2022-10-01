import {
  MobileAuthLinked,
  MobileAuthTemplate,
} from "domains/@shared/components";
import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import Path from "routes/Path";
import { SignupForm } from "../components/mobile";

function MobileSignupPage() {
  useMobileHeader({
    leftMenu: null,
    title: "",
  });

  return (
    <MobileAuthTemplate>
      <SignupForm />
      <MobileAuthLinked link={Path.LoginPage} text="이미 회원이신가요?" />
    </MobileAuthTemplate>
  );
}

export default MobileSignupPage;
