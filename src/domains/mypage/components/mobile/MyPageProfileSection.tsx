import { CameraIcon, PenIcon } from "assets/icons";
import { useToast, useToggle } from "domains/@shared/hooks";
import { DEFAULT_IMAGE_FILE_NAME } from "domains/mypage/constants";
import {
  changeProfileAPI,
  nicknameChangeAPI,
  nicknameCheckAPI,
  uploadProfileImageAPI,
} from "lib/api/user";
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

  // 프로필 이미지, 이름 상태 변경
  const onChangeProfileImage = useCallback(
    (
      newImg: string,
      newFileName: string | undefined = DEFAULT_IMAGE_FILE_NAME
    ) => {
      setForm((prevForm) => ({
        ...prevForm,
        profileImage: newImg,
        imageFileName: newFileName,
      }));
    },
    []
  );

  // 프로필 이미지 업로드
  const onImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files !== null) {
        if (e.target.files[0].size > 10000000) {
          alert("파일 용량이 10MB를 초과하였습니다.");
          return;
        }

        const fd = new FormData();
        fd.append("image", e.target.files[0]);
        try {
          const data = await uploadProfileImageAPI(fd);
          onChangeProfileImage(data.imageUrl, e.target.files[0].name);
          console.log(data);
        } catch (err) {
          console.log(err);
          alert("이미지 업로드에 실패했습니다.");
        }
      }
    },
    [onChangeProfileImage]
  );

  const { mutate: mutateProfile } = useMutation(
    () => changeProfileAPI(profileImage, nickname),
    {
      onSuccess: async () => {
        const newUserInfo = {
          ...user,
          image: profileImage,
          name: nickname,
        };
        dispatch(setUser(newUserInfo));
        userStorage.set(newUserInfo);
        editProfileToast();
      },
      onError: (error: any) => {
        setErrorMessage(error.message);
      },
    }
  );

  const onSubmit = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      await onImageUpload(e);
      mutateProfile();
    },
    [onImageUpload, mutateProfile]
  );

  return (
    <Container>
      <Inner>
        <ProfileImageBox>
          <label htmlFor="profile-image-upload">
            <ProfileImage src={profileImage} alt="프로필 이미지" />
            <CameraIcon />
            <FileInputStyled
              type="file"
              id="profile-image-upload"
              onChange={onSubmit}
            />
          </label>
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

const FileInputStyled = styled.input`
  display: none; ;
`;

export default MyPageProfileSection;
