import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Path from "routes/Path";
import { userSelector } from "stores/user";
import { PasswordEditTemplate } from "../components";
import PasswordEditForm from "../components/PasswordEditForm";
import PasswordEditHead from "../components/PasswordEditHead";

function PasswordEditContainer() {
  const { socialType } = useSelector(userSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (socialType === "google") navigate(Path.MyPage);
  }, [navigate, socialType]);

  return (
    <PasswordEditTemplate>
      <PasswordEditHead headText="비밀번호 변경" />
      <PasswordEditForm />
    </PasswordEditTemplate>
  );
}

export default PasswordEditContainer;
