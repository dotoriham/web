import axios from "axios";
import { SERVER_URL } from "lib/constants";
import { getTokens, logout } from "lib/utils/auth";
import userStorage from "lib/utils/userStorage";

const client = axios.create({
  withCredentials: true,
});

client.defaults.baseURL = `${SERVER_URL}`;

client.interceptors.request.use(
  (config) => {
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    const tokens = getTokens();
    if (!tokens) throw new Error("No tokens found");

    const { accessToken, refreshToken } = tokens;
    config.headers.accessToken = `Bearer ${accessToken}`;
    config.headers.refreshToken = `Bearer ${refreshToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    switch (status) {
      case 401:
        const originalRequest = config;
        const tokens = getTokens();
        if (!tokens) throw new Error("No tokens found");
        const { accessToken, refreshToken } = tokens;
        try {
          const { data } = await axios.get(
            `${SERVER_URL}/api/v1/user/reIssuanceAccessToken`,
            {
              headers: {
                accessToken: `Bearer ${accessToken}`,
                refreshToken: `Bearer ${refreshToken}`,
              },
            }
          );

          const user = userStorage.get();
          if (!user) throw new Error("No user found");
          const newUser = {
            ...user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          };
          userStorage.set(newUser);
          axios.defaults.headers.common.accessToken = `Bearer ${data.accessToken}`;
          axios.defaults.headers.common.refreshToken = `Bearer ${data.refreshToken}`;
          originalRequest.headers.accessToken = `Bearer ${data.accessToken}`;
          originalRequest.headers.refreshToken = `Bearer ${data.refreshToken}`;

          // @Todo 여기서 지금 refreshtoken을 새로 받아와서 localStorage에 저장을 했는데, redux는 저장을 안해줘서 redux쪽에도 업데이트를 시켜줘야함.(index.tsx 참고)

          // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
          return axios(originalRequest);
        } catch (e) {
          logout();
        }
        break;

      case 409:
        throw new Error(error.response.data.message);

      case 500:
        throw new Error(error.response.data.message);

      default:
        throw new Error("Unknown Error");
    }
  }
);

export default client;
