import { CameraIcon, PenIcon } from "assets/icons";
import { useEditProfileService } from "domains/mypage/service";
import { palette } from "lib/styles";
import styled from "styled-components";
import ProfileNicknameForm from "./ProfileNicknameForm";

function MyPageProfileSection() {
  const {
    form,
    errorMessage,
    isNicknameEdit,
    onToggleNicknameEdit,
    profileImage,
    onChangeNickname,
    mutateNickname,
    onSubmit,
  } = useEditProfileService();

  const { nickname } = form;

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
            <Nickname>{nickname}</Nickname>
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
