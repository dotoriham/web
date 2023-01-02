import client from "lib/api/client";
import { SERVER_URL } from "lib/constants";

export const passwordCheck = async (currentPassword: string) => {
  const response = await client.post(
    `${SERVER_URL}/api/v1/user/passwordCheck`,
    {
      currentPassword,
    }
  );
  return response;
};
