import { Button, SmallBlackText } from "components";
import { palette } from "lib/styles";
import React, { ChangeEvent, memo } from "react";
import { UseMutateFunction } from "react-query";
import styled from "styled-components";
import ForgetPassword from "./ForgetPassword";

interface Props {
  newPassword: string;
  newPasswordConfirm: string;
  currentPassword: string;
  onChangeCurrentPassword(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  onChangeNewPassword(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  onChangeNewPasswordConfirm(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  onFormValidation(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  currentPasswordError: string | null;
  newPasswordConfirmError: string | null;
  newPasswordError: string | null;
  mutatePasswordEdit: UseMutateFunction;
  disableButton: boolean;
}
function PasswordEditForm({
  currentPassword,
  currentPasswordError,
  mutatePasswordEdit,
  newPassword,
  newPasswordConfirm,
  newPasswordConfirmError,
  newPasswordError,
  onChangeCurrentPassword,
  onChangeNewPassword,
  onChangeNewPasswordConfirm,
  onFormValidation,
  disableButton,
}: Props) {
  return (
    <PasswordEditFormBlock>
      <InputBox>
        <FormLabel width="297px" label="현재 비밀번호" />
        <div>
          <PasswordInput
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={onChangeCurrentPassword}
            onBlur={onFormValidation}
          />
          {currentPasswordError && (
            <WarningText>현재 비밀번호와 일치하지 않습니다.</WarningText>
          )}
          <ForgetPassword />
        </div>
      </InputBox>
      <InputBox>
        <FormLabel width="297px" label="새 비밀번호" />
        <div>
          <PasswordInput
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={onChangeNewPassword}
            onBlur={onFormValidation}
          />
          {newPasswordError && (
            <WarningText>
              영문 대소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 <br />
              8~16자의 비밀번호를 생성해주세요.
            </WarningText>
          )}
        </div>
      </InputBox>
      <InputBox>
        <FormLabel width="297px" label="새 비밀번호 확인" />
        <div>
          <PasswordInput
            type="password"
            name="newPasswordConfirm"
            value={newPasswordConfirm}
            onChange={onChangeNewPasswordConfirm}
            onBlur={onFormValidation}
          />
          {newPasswordConfirmError && (
            <WarningText>새 비밀번호와 일치하지 않습니다.</WarningText>
          )}
        </div>
      </InputBox>
      <EditButtonGroups>
        <Button
          onClick={() => window.history.back()}
          children="취소"
          variant="primary"
          width="174px"
          height="40px"
        />
        <Button
          onClick={() => mutatePasswordEdit()}
          disabled={disableButton}
          children="저장"
          variant="quaternary"
          width="174px"
          height="40px"
        />
      </EditButtonGroups>
      <WithdrawText>도토리함 그만 쓸래요</WithdrawText>
    </PasswordEditFormBlock>
  );
}

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 16px 0;
`;

const PasswordEditFormBlock = styled.div`
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
`;

const PasswordInput = styled.input`
  width: 273px;
  height: 32px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 0 10px;
  margin: 4px 99px 4px 0;
`;

const FormLabel = styled(SmallBlackText)`
  padding-top: 8px;
`;

const WarningText = styled.div`
  font-size: 12px;
  color: ${palette.error};
  padding: 4px 0;
  line-height: 17px;
`;

const EditButtonGroups = styled.div`
  margin: 88px 0 72px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const WithdrawText = styled.div`
  font-size: 14px;
  color: ${palette.gray};
  font-weight: 500;
`;
export default memo(PasswordEditForm);
