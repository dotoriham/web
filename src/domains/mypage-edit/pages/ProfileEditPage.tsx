import {
  MyPageHead,
  MyPageTemplate,
  ProfileEditForm,
} from "domains/mypage/components/desktop";
import React from "react";
import styled from "styled-components";

function ProfileEditPage() {
  return (
    <ProfileEditPageBlock>
      <MyPageHead headText="프로필" />
      <ProfileEditForm />
    </ProfileEditPageBlock>
  );
}

const ProfileEditPageBlock = styled(MyPageTemplate)`
  width: 768px;
`;

export default ProfileEditPage;
