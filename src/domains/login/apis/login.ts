import axios from "axios";
import { SERVER_URL } from "lib/constants";

interface RequestData {
  email: string;
  password: string;
}

interface ResponseData {
  name: string;
  nickname: string;
  email: string;
  image: string;
  socialType: "google" | null;
  remindCycle: number;
  remindToggle: boolean;
  accessToken: string;
  refreshToken: string;
  isRegistered: boolean;
  fcmToken: string;
}

export const login = async (requestData: RequestData) => {
  const response = await axios.post<ResponseData>(
    `${SERVER_URL}/api/v1/user/signIn`,
    requestData
  );

  return response.data;
};
