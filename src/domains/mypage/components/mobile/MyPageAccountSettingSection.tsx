import { ArrowDown16Icon, ArrowUp16Icon } from "assets/icons";
import { Button, SwitchButton } from "components";
import { useToggle } from "domains/@shared/hooks";
import { REMIND_CYCLE } from "domains/mypage/constants";
import useRemindSetting from "domains/mypage/hooks/useRemindSetting";
import { palette } from "lib/styles";
import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "stores/user";
import styled from "styled-components";
import MyPageListButton from "./MyPageListButton";
import MyPageRemindChipButton from "./MyPageRemindChipButton";

function MyPageAccountSettingSection() {
  const [isRemindSetting, onToggleRemindSetting] = useToggle(true);
  const [isAccountSetting, onToggleAccountSetting] = useToggle(false);

  const {
    isRemind,
    selectedCycle,
    mutateRemindSettingToggle,
    mutateRemindCycleChange,
  } = useRemindSetting();

  const { email } = useSelector(userSelector);

  return (
    <div>
      <MyPageListButton onClick={onToggleRemindSetting}>
        리마인드 설정
        {isRemindSetting ? <ArrowUp16Icon /> : <ArrowDown16Icon />}
      </MyPageListButton>
      {isRemindSetting && (
        <SettingBlock>
          <Row>
            알림
            <SwitchButton
              isChecked={isRemind}
              onToggle={() => mutateRemindSettingToggle()}
            />
          </Row>
          <Divider />
          <Row>
            주기
            <RemindChipButtonGroup>
              {REMIND_CYCLE.map((cycle) => (
                <MyPageRemindChipButton
                  label={`${cycle}일`}
                  variant={cycle === selectedCycle ? "primary" : "secondary"}
                  disabled={!isRemind}
                  onClick={() => mutateRemindCycleChange(cycle)}
                  key={cycle}
                />
              ))}
            </RemindChipButtonGroup>
          </Row>
        </SettingBlock>
      )}
      <MyPageListButton onClick={onToggleAccountSetting}>
        계정 설정
        {isAccountSetting ? <ArrowUp16Icon /> : <ArrowDown16Icon />}
      </MyPageListButton>
      {isAccountSetting && (
        <SettingBlock>
          <Row>
            이메일
            <EmailText>{email}</EmailText>
          </Row>
          <Divider />
          <Row>
            비밀번호
            <PasswordChangeButton
              variant="secondary"
              width="156px"
              height="32px"
              disabled
            >
              비밀번호 변경
            </PasswordChangeButton>
          </Row>
        </SettingBlock>
      )}
    </div>
  );
}

const SettingBlock = styled.div`
  padding: 16px;
  width: 100%;
  font-size: 12px;
  line-height: 1.42;
  color: ${palette.grayDark};
  background-color: #fbfbfb;
`;

const Divider = styled.div`
  margin: 18px 0;
  width: 100%;
  height: 1px;
  background-color: #f3f3f3;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RemindChipButtonGroup = styled.div`
  > button {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const EmailText = styled.span`
  font-size: 14px;
  font-family: Roboto;
  line-height: 1.5;
  color: ${palette.grayDarkest};
`;

const PasswordChangeButton = styled(Button)`
  font-size: 12px;
`;

export default MyPageAccountSettingSection;
