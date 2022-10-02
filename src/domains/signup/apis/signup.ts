import axios from "axios";
import { UserModel } from "domains/@shared/models/user.model";
import { SERVER_URL } from "lib/constants";

interface RequestData {
  email: string;
  password: string;
  fcmToken: string;
}

type ResponseData = UserModel;

export const signup = async (requestData: RequestData) => {
  const response = await axios.post<ResponseData>(
    `${SERVER_URL}/api/v1/user/signUp`,
    {
      requestData,
    }
  );
  return response.data;
};
