import { transitions } from "lib/styles";
import React, { ReactNode, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ModalPortal from "./ModalPortal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function MobileModalTemplate({ children, isOpen, onClose }: Props) {
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (isOpen) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen]);

  if (!isOpen && closed) return null;

  return (
    <ModalPortal>
      <ModalTemplateContainer onMouseDown={onClose}>
        <div onMouseDown={(e) => e.stopPropagation()}>
          <Wrapper isOpen={isOpen}>
            <Inner>{children}</Inner>
          </Wrapper>
        </div>
      </ModalTemplateContainer>
      <ModalBackground />
    </ModalPortal>
  );
}

const ModalTemplateContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ModalBackground = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.3;
  z-index: 2000;
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  max-height: calc(100% - 25px);
  ${({ isOpen }) =>
    isOpen
      ? css`
          animation: ${transitions.popInFromBottom} 0.2s forwards ease-in-out;
        `
      : css`
          animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
        `}
`;

const Inner = styled.div`
  flex: 1 1 auto;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default MobileModalTemplate;
