import { CameraIcon, PenIcon } from "assets/icons";
import { palette } from "lib/styles";
import React from "react";
import styled from "styled-components";

function MyPageProfileSection() {
  return (
    <Container>
      <Inner>
        <ProfileImageBox>
          <ProfileImage
            src="https://yapp-bucket-test.s3.ap-northeast-2.amazonaws.com/static/2e6b4adc-6c93-4351-8442-9aab32e40b48"
            alt="프로필 이미지"
          />
          <CameraIcon />
        </ProfileImageBox>

        <NicknameBox>
          <Nickname>닉네임</Nickname>
          <PenIcon />
        </NicknameBox>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px 16px 22px;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImageBox = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  margin-right: 36px;
  svg {
    position: absolute;
    bottom: -1px;
    right: -12px;
    cursor: pointer;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  background-color: #f3f3f3;
  height: 100%;
  border-radius: 40px;
`;

const NicknameBox = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

const Nickname = styled.span`
  color: ${palette.black};
  font-size: 18px;
  height: 26px;
  line-height: 23px;
  margin-right: 4px;
  font-weight: 500;
`;

export default MyPageProfileSection;
