import { useInput } from "domains/@shared/hooks";
import { getFCMToken } from "lib/firebase";
import userStorage from "lib/utils/userStorage";
import Path from "routes/Path";
import { signup } from "../apis/signup";

export default function useSignupService() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSignup = async () => {
    const userFCMToken = await getFCMToken();
    const requestData = {
      email,
      password,
      fcmToken: userFCMToken,
    };
    const res = await signup(requestData);
    userStorage.set(res);
    window.location.replace(Path.DotoriPage);
    try {
    } catch (e) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSignup,
  };
}
