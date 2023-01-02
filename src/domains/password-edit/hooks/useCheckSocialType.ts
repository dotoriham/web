import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Path from "routes/Path";
import { userSelector } from "stores/user";

export default function useCheckSocialType() {
  const { socialType } = useSelector(userSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (socialType === "google") navigate(Path.MyPage);
  }, [navigate, socialType]);
}
