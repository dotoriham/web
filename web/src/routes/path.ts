enum Path {
  HomePage = "/",
  DotoriPage = "/dotori",
  DotoriFolderPage = "/dotori/:folderId",
  TrashPage = "/trash",
  SearchPage = "/search",
  MyPage = "/my",

  // no Logged In
  LoginPage = "/login",
  SignUpPage = "/signup",
}

export default Path;