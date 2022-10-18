import { PenIcon } from "assets/icons";
import { palette } from "lib/styles";
import React from "react";
import styled from "styled-components";

interface Props {
  nickname?: string;
  onChangeNickname(e: React.ChangeEvent<HTMLInputElement>): void;
  onEditNickname(): void;
  errorMessage?: string;
}

function ProfileNicknameForm({
  nickname,
  onChangeNickname,
  onEditNickname,
  errorMessage = "asd",
}: Props) {
  return (
    <NicknameFormBlock>
      <NickNameBox>
        <NicknameInput value={nickname} onChange={onChangeNickname} />
        <PenIcon onClick={onEditNickname} />
        {/* @Todo 컬러 아이콘으로 바꿔야됨 */}
      </NickNameBox>
      {errorMessage && <NicknameCheckError>{errorMessage}</NicknameCheckError>}
    </NicknameFormBlock>
  );
}

const NicknameFormBlock = styled.div`
  flex: 1;
  margin: 0 8px 5px 0;
  height: 51px;
  align-self: flex-end;
`;

const NickNameBox = styled.div`
  position: relative;
  svg {
    position: absolute;
    bottom: 3px;
    right: 0px;
    cursor: pointer;
  }
`;

const NicknameInput = styled.input`
  font-weight: 500;
  width: 100%;
  height: 36px;
  border-bottom: 1px solid ${palette.primary};
  padding: 5.5px 12px 3px 0px;
  font-size: 18px;
`;

const NicknameCheckError = styled.div`
  margin: 4px 0 2px 0;
  color: ${palette.error};
  font-size: 12px;
`;

export default ProfileNicknameForm;
