import { X24Icon } from "assets/icons";
import { MobileModalTemplate } from "components";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  onClose(): void;
  children: ReactNode;
  title: string;
}

function DrawerModal({ isOpen, onClose, children, title }: Props) {
  return (
    <MobileModalTemplate isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <Title>
          <span>{title}</span>
          <X24Icon onClick={onClose} />
        </Title>
        {children}
      </Wrapper>
    </MobileModalTemplate>
  );
}

const Wrapper = styled.div`
  padding: 21px 16px 16px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
`;

export default DrawerModal;
