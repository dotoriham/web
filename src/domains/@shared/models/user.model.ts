export interface UserModel {
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
