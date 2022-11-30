import { Button, Input } from "components";
import { DrawerModal } from "domains/@shared/components";
import React from "react";
import styled from "styled-components";
import LoadingIcon from "assets/images/loading.gif";

interface Props {
  isOpen: boolean;
  onClose(): void;
  value: string;
  onChangeValue(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(): void;
  isLoading: boolean;
}

function DotoriAddModal({
  isOpen,
  onClose,
  onChangeValue,
  value,
  onSubmit,
  isLoading,
}: Props) {
  return (
    <DrawerModal isOpen={isOpen} onClose={onClose} title="도토리 저장">
      <Container>
        {isLoading ? (
          <LoadingIconBox>
            <img src={LoadingIcon} width="70" alt="loading" />
          </LoadingIconBox>
        ) : (
          <>
            <Input
              value={value}
              onChange={onChangeValue}
              width="100%"
              height="44px"
              placeholder="URL을 입력하세요"
            />
            <Button
              width="100%"
              height="52px"
              variant="primary"
              onClick={onSubmit}
            >
              저장
            </Button>
          </>
        )}
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

const LoadingIconBox = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 15px;
    z-index: 999;
  }
`;

export default DotoriAddModal;
