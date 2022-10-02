import axios from "axios";
import { SERVER_URL } from "lib/constants";

export const emailCheck = async (email: string) => {
  const response = await axios.post(
    `${SERVER_URL}/api/v1/user/signup/emailCheck`,
    {
      email,
    }
  );
  return response;
};
