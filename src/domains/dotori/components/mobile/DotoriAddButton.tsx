import { ButtonWrite52Icon } from "assets/icons";
import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function DotoriAddButton({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <ButtonWrite52Icon />
    </Container>
  );
}

const Container = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
  cursor: pointer;
`;

export default DotoriAddButton;
