import { useInput } from "domains/@shared/hooks";
import userStorage from "lib/utils/userStorage";
import React from "react";
import Path from "routes/Path";
import { login } from "../apis";

export default function useLoginService() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    try {
      const data = await login({ email, password });
      userStorage.set(data);
      window.location.replace(Path.DotoriPage);
    } catch (e) {
      alert(
        "계정을 찾을 수 없습니다. 이메일 또는 비밀번호를 다시 확인해 주세요."
      );
    }
  };

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onLogin,
  };
}
