import React, { ReactNode } from "react";
import { LogoMobileIMG } from "assets/images";
import styled from "styled-components";
import { palette } from "lib/styles";
import GoogleLoginButton from "domains/auth/GoogleLoginButton";
import { MobileAuthDivider } from "../AuthDivider";

interface Props {
  children: ReactNode;
}

function MobileAuthTemplate({ children }: Props) {
  return (
    <Container>
      <Title>함께 쓰는 북마크 아카이빙</Title>
      <img src={LogoMobileIMG} alt="도토리함 로고" />
      <GoogleLoginButton className="googleLoginBtn" />
      <MobileAuthDivider />
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .googleLoginBtn {
    border-color: ${palette.grayLight};
    color: ${palette.grayDarker};
    height: 52px;
    span {
      font-weight: inherit;
    }
  }

  > img {
    margin-bottom: 60px;
  }
`;

const Title = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: ${palette.primaryDark};
  margin-bottom: 8px;
`;

export default MobileAuthTemplate;
