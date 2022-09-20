import { SettingIcon } from "assets/icons";
import React from "react";
import styled from "styled-components";

interface Props {
  profileImgSrc: string;
  email: string;
  onClickProfile(): void;
}

function SidebarProfile({ email, profileImgSrc, onClickProfile }: Props) {
  return (
    <Container onClick={onClickProfile}>
      <ProfileImage src={profileImgSrc} alt="profile" />
      <ProfileEmail>{email}</ProfileEmail>
      <SettingIcon />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 41px;
  height: 41px;
  border-radius: 50%;
`;

const ProfileEmail = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 172px;
  line-height: 1.5;
`;

export default SidebarProfile;
