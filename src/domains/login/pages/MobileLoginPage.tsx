import React from "react";
import {
  MobileAuthLinked,
  MobileAuthTemplate,
} from "domains/@shared/components";
import { useMobileHeader } from "domains/@shared/hooks";
import Path from "routes/Path";
import { MobileLoginFormContainer } from "../containers";

function MobileLoginPage() {
  useMobileHeader({
    leftMenu: null,
    title: "",
  });

  return (
    <MobileAuthTemplate>
      <MobileLoginFormContainer />
      <MobileAuthLinked
        link={Path.PasswordResetPage}
        text="비밀번호를 잊으셨나요?"
      />

      <MobileAuthLinked link={Path.SignupPage} text="처음 방문하셨나요?" />
    </MobileAuthTemplate>
  );
}

export default MobileLoginPage;
