import { palette } from "lib/styles";
import React from "react";
import styled from "styled-components";

function MobileFooter() {
  return (
    <Container>
      <Inner>
        <Text>이용약관</Text>
        <Divider />
        <Text>개인정보 처리방침</Text>
        <Divider />
        <Text>오픈소스 라이센스</Text>
        <Divider />
        <Text>로그아웃</Text>
      </Inner>
    </Container>
  );
}

const Container = styled.footer`
  padding: 12px 16px 20px;
  background-color: #f3f3f3;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.span`
  color: ${palette.gray};
  font-size: 12px;
`;

const Divider = styled.div`
  height: 18px;
  width: 0.6px;
  background-color: ${palette.grayLight};
`;

export default MobileFooter;
