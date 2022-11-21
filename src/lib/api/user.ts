import client from "./client";

export const nicknameCheckAPI = async (nickName: string) => {
  const response = await client.post("/api/v1/user/nickNameCheck", {
    nickName,
  });
  return response.data;
};

export const nicknameChangeAPI = async (nickName: string) => {
  const response = await client.post("/api/v1/user/nickNameChange", {
    nickName,
  });
  return response.data;
};

export const uploadProfileImageAPI = async (image: FormData) => {
  const response = await client.post("/api/v1/user/uploadProfileImage", image, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const changeProfileAPI = async (
  profileImageUrl: string,
  nickname: string
) => {
  const body = { profileImageUrl, name: nickname };
  const response = await client.post("/api/v1/user/changeProfile", body);
  return response.data;
};
