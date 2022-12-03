import { ArrowUp16Icon } from "assets/icons";
import CheckBox from "components/CheckBox/CheckBox";
import { palette } from "lib/styles/palette";
import React from "react";
import styled from "styled-components";

interface Props {
  onToggleAllChildFolder(): void;
  onToggleDeleteModal(): void;
  onToggleFolderList(): void;
  isAllChecked: boolean;
  isCheckedChildFolder: boolean;
  isOpenFolderList: boolean;
}

function ChildFolderSelectNav({
  isAllChecked,
  isCheckedChildFolder,
  onToggleAllChildFolder,
  onToggleDeleteModal,
  onToggleFolderList,
  isOpenFolderList,
}: Props) {
  return (
    <ChildFolderSelectNavBlock>
      <SelectBox>
        <SelectForm>
          <SelectText>선택</SelectText>
          <SelectButton
            variant="secondary"
            isChecked={isAllChecked}
            onClick={onToggleAllChildFolder}
          />
        </SelectForm>

        {isCheckedChildFolder && (
          <SelectOption>
            <Option onClick={onToggleDeleteModal}>삭제</Option>
          </SelectOption>
        )}
      </SelectBox>
      <FolderListToggleButton onClick={onToggleFolderList}>
        <div className="text">{isOpenFolderList ? "접기" : "펼치기"}</div>
        <ArrowIconBox isOpen={isOpenFolderList}>
          <ArrowUp16Icon />
        </ArrowIconBox>
      </FolderListToggleButton>
    </ChildFolderSelectNavBlock>
  );
}

const ChildFolderSelectNavBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  margin-bottom: 16px;
  font-size: 12px;
  color: ${palette.grayDarkest};
`;

const SelectBox = styled.div`
  display: flex;
`;

const SelectForm = styled.div`
  display: flex;
  align-items: center;
`;

const SelectText = styled.span`
  height: 17px;
  margin-right: 4px;
`;

const SelectButton = styled(CheckBox)`
  display: flex;
  align-items: center;
`;

const SelectOption = styled.div`
  display: flex;
  align-items: center;
`;

const Option = styled.div`
  height: 17px;
  margin-left: 16px;
  cursor: pointer;
`;

const FolderListToggleButton = styled.button`
  color: ${palette.grayDarker};
  font-size: 12px;
  display: flex;
  align-items: center;
  height: 100%;
  .text {
    margin-right: 4px;
    height: 100%;
    line-height: 19px;
  }
`;

const ArrowIconBox = styled.div<{ isOpen: boolean }>`
  ${({ isOpen }) => (isOpen ? "" : `transform: rotate(180deg);`)}
  transition: all ease .5s;
  display: flex;
  align-items: center;
`;

export default ChildFolderSelectNav;
