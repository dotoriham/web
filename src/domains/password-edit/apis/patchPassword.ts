import client from "lib/api/client";
import { SERVER_URL } from "lib/constants";

export const patchPasswordEdit = async ({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) => {
  const response = await client.patch(`${SERVER_URL}/api/v1/user/password`, {
    currentPassword,
    newPassword,
  });
  return response.data;
};
