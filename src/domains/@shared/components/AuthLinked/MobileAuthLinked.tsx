import { palette } from "lib/styles";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  text: string;
  link: string;
}

function MobileAuthLinked({ link, text }: Props) {
  return <StyledLinked to={link}>{text}</StyledLinked>;
}

const StyledLinked = styled(Link)`
  font-size: 12px;
  color: ${palette.grayDark};
  text-decoration: underline;
  line-height: 1.75;
  margin-bottom: 12px;
`;

export default MobileAuthLinked;
