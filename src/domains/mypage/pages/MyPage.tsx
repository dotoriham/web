import React from "react";
import MyPageConfiguration from "domains/mypage/components/desktop/MyPageConfiguration";
import MyPageProfile from "domains/mypage/components/desktop/MyPageProfile";
import MyPageTemplate from "domains/mypage/components/desktop/MyPageTemplate";
import MyPageAccountSetting from "domains/mypage/components/desktop/MyPageAccountSetting";

function MyPage() {
  return (
    <MyPageTemplate>
      <MyPageProfile />
      <MyPageConfiguration />
      <MyPageAccountSetting />
    </MyPageTemplate>
  );
}

export default MyPage;
