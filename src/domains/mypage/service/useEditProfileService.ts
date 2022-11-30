import { useToast, useToggle } from "domains/@shared/hooks";
import { DEFAULT_IMAGE_FILE_NAME } from "domains/mypage/constants";
import {
  changeProfileAPI,
  nicknameChangeAPI,
  nicknameCheckAPI,
  uploadProfileImageAPI,
} from "lib/api/user";
import userStorage from "lib/utils/userStorage";
import React, { useState, useCallback } from "react";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "stores/user";

export default function useEditProfileService() {
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

  // 닉네임 상태 변경
  const onChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prevForm) => ({ ...prevForm, nickname: e.target.value }));
    },
    []
  );
  
  // 닉테임 변경 로직
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

  // 프로필 이미지, 이미지 이름 상태 변경
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

  // 프로필 변경
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

  return {
    form,
    errorMessage,
    isNicknameEdit,
    profileImage,
    onChangeNickname,
    onToggleNicknameEdit,
    mutateNickname,
    onSubmit,
  };
}
