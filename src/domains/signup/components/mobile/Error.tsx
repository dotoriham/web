import { palette } from "lib/styles";
import styled from "styled-components";

const Error = styled.p<{ mt?: number; mb?: number }>`
  font-size: 12px;
  line-height: 1.42;
  color: ${palette.error};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : "0")};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "0")};
`;

export default Error;
