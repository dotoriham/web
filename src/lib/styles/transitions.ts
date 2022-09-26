import { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const popInFromBottom = keyframes`
  0% {
    transform: translateY(100%) 
  }
  100% {
    transform: translateY(0px);
  }`;

const popOutToBottom = keyframes`
  0% {
    transform: translateY(0px) 
  }
  100% {
    transform: translateY(100%) 
  }`;

const transitions = {
  fadeIn,
  popInFromBottom,
  popOutToBottom,
};

export default transitions;
