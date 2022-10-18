import { CameraIcon, PenIcon } from "assets/icons";
import { useToast, useToggle } from "domains/@shared/hooks";
import { DEFAULT_IMAGE_FILE_NAME } from "domains/mypage/constants";
import { nicknameChangeAPI, nicknameCheckAPI } from "lib/api/user";
import { palette } from "lib/styles";
import userStorage from "lib/utils/userStorage";
import React, { useState, useCallback } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "stores/user";
import styled from "styled-components";
import ProfileNicknameForm from "./ProfileNicknameForm";

function MyPageProfileSection() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [isNicknameEdit, onToggleNicknameEdit] = useToggle(false);
  const [form, setForm] = useState({
    profileImage: user.image,
    imageFileName: DEFAULT_IMAGE_FILE_NAME,
    nickname: user.name,
  });
  const { editProfileToast } = useToast();
  const { nickname, profileImage } = form;

  const onChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prevForm) => ({ ...prevForm, nickname: e.target.value }));
    },
    []
  );

  const { mutate: mutateNickname } = useMutation(
    () => nicknameCheckAPI(nickname),
    {
      onSuccess: async () => {
        await nicknameChangeAPI(nickname);
        const newUserInfo = {
          ...user,
          name: nickname,
        };
        dispatch(setUser(newUserInfo));
        userStorage.set(newUserInfo);
        editProfileToast();
        onToggleNicknameEdit();
      },
      onError: () => {
        setErrorMessage("이미 사용중인 닉네임입니다.");
      },
    }
  );

  return (
    <Container>
      <Inner>
        <ProfileImageBox>
          <ProfileImage src={profileImage} alt="프로필 이미지" />
          <CameraIcon />
        </ProfileImageBox>

        {isNicknameEdit ? (
          <ProfileNicknameForm
            onEditNickname={mutateNickname}
            onChangeNickname={onChangeNickname}
            errorMessage={errorMessage}
            nickname={nickname}
          />
        ) : (
          <NicknameBox>
            <Nickname>{user.name}</Nickname>
            <PenIcon onClick={onToggleNicknameEdit} />
          </NicknameBox>
        )}
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
