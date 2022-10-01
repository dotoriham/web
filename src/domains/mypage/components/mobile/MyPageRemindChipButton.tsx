import { palette } from "lib/styles/palette";
import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant: "primary" | "secondary";
}

interface RemindChipButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonProps {
  label: string;
}

const RemindChipButtonStyled = styled.button<ButtonProps>`
  width: 49px;
  height: 28px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 20px;
  ${(props) =>
    props.variant === "primary"
      ? css`
          color: ${palette.white};
          border: 1px solid ${palette.primary};
          background-color: ${palette.primary};
          &:disabled {
            background-color: ${palette.grayLightest};
            border: none;
            color: ${palette.gray};
            cursor: not-allowed;
          }
        `
      : css`
          color: ${palette.grayDark};
          border: 1px solid ${palette.grayLight};
          &:disabled {
            cursor: not-allowed;
          }
        `}
`;

function MyPageRemindChipButton({
  variant,
  label,
  ...rest
}: RemindChipButtonProps) {
  return (
    <RemindChipButtonStyled variant={variant} {...rest}>
      {label}
    </RemindChipButtonStyled>
  );
}

export default MyPageRemindChipButton;
