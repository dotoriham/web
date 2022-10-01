import { palette } from "lib/styles";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function MyPageListButton({ children, ...rest }: Props) {
  return <Container {...rest}>{children}</Container>;
}

const Container = styled.button`
  padding: 16px 16px 18px 16px;
  font-size: 14px;
  line-height: 1.5;
  color: ${palette.grayDarkest};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default MyPageListButton;
