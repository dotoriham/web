import { Button, SmallBlackText } from "components";
import { palette } from "lib/styles";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function PasswordEditForm() {
  const error = true;
  return (
    <PasswordEditFormBlock>
      <FormBlock>
        <FormLabel width="297px" label="현재 비밀번호" />
        <div>
          <PasswordInput type="password" />
          {error && (
            <WarningText>현재 비밀번호와 일치하지 않습니다.</WarningText>
          )}
          <ForgetText>
            <div>비밀번호를 잊으셨나요?</div>
            <div>
              <Link to="">비밀번호 재설정</Link>
            </div>
          </ForgetText>
        </div>
      </FormBlock>
      <FormBlock>
        <FormLabel width="297px" label="새 비밀번호" />
        <div>
          <PasswordInput type="password" />
          {error && (
            <WarningText>
              영문 대소문자, 숫자, 특수문자 중 2종류 이상을 조합하여 <br />
              8~16자의 비밀번호를 생성해주세요.
            </WarningText>
          )}
        </div>
      </FormBlock>
      <FormBlock>
        <FormLabel width="297px" label="새 비밀번호 확인" />
        <div>
          <PasswordInput type="password" />
          {error && <WarningText>새 비밀번호와 일치하지 않습니다.</WarningText>}
        </div>
      </FormBlock>
      <EditButtonGroups>
        <Button children="취소" variant="primary" width="174px" height="40px" />
        <Button
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

const FormBlock = styled.div`
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

const ForgetText = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 17px;
  padding: 4px 0;
  gap: 8px;
  div:first-child {
    color: ${palette.grayDark};
  }
  div:last-child {
    color: ${palette.grayDarkest};
    text-decoration: underline;
  }
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
export default PasswordEditForm;
