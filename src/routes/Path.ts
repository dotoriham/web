enum Path {
  // logged In
  HomePage = "/",
  DotoriPage = "/dotori",
  DotoriFolderPage = "/dotori/:folderId",
  TrashPage = "/trash",
  SearchPage = "/search",
  MyPage = "/my",
  ProfileEditPage = "/my/profile",

  // no Logged In
  LoginPage = "/login",
  SignupPage = "/signup",
  LandingPage = "https://dotoriham.kr/",
  SharePage = "/share/:shareToken",
  PasswordResetPage = "/password-reset",
  PasswordResetConfirmPage = "/password-reset/confirm",

  // only Mobile
  MakePeoplePage = "/make-people",
}

export default Path;
