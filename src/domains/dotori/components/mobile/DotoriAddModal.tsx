import { Button, Input } from "components";
import { DrawerModal } from "domains/@shared/components";
import React from "react";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  onClose(): void;
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DotoriAddModal({ isOpen, onClose, onChangeValue, value }: Props) {
  return (
    <DrawerModal isOpen={isOpen} onClose={onClose} title="도토리 저장">
      <Container>
        <Input
          value={value}
          onChange={onChangeValue}
          width="100%"
          height="44px"
          placeholder="URL을 입력하세요"
        />
        <Button width="100%" height="52px" variant="primary">
          저장
        </Button>
      </Container>
    </DrawerModal>
  );
}

const Container = styled.div`
  margin-top: 25px;
  input {
    border-radius: 8px;
    margin-bottom: 36px;
    font-size: 14px;
  }
  button {
    font-size: 16px;
  }
`;

export default DotoriAddModal;
