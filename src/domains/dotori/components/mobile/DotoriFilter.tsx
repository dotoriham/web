import { DropDownIcon } from "assets/icons";
import { SwitchButton } from "components";
import { useToggle } from "domains/@shared/hooks";
import { useDotoriQueryParams } from "domains/dotori/hooks";
import { mergeQsParserWithSortKeys } from "domains/dotori/utils";
import { getDotoriSortText } from "domains/dotori/utils/dotori";
import { palette } from "lib/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DotoriFilterModal from "./DotoriFilterModal";

function DotoriFilter() {
  const { remind, sort } = useDotoriQueryParams();
  const navigate = useNavigate();
  const [isModal, onToggleModal] = useToggle(false);

  return (
    <>
      <Container>
        <Title>도토리</Title>

        <FilterBox>
          <RemindBox>
            <span>리마인드 only</span>
            <SwitchButton
              isChecked={remind}
              onToggle={() =>
                navigate({
                  search: mergeQsParserWithSortKeys({
                    remind: !remind,
                    sort,
                  }),
                })
              }
            />
          </RemindBox>

          <SortBox onClick={onToggleModal}>
            <span>{getDotoriSortText(sort)}</span>
            <DropDownIcon />
          </SortBox>
        </FilterBox>
      </Container>

      <DotoriFilterModal isOpen={isModal} onClose={onToggleModal} />
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
`;

const FilterBox = styled.div`
  display: flex;
  align-items: center;
`;

const RemindBox = styled.div`
  font-size: 12px;
  line-height: 1.42;
  display: flex;
  align-items: center;
  span {
    margin-right: 6px;
    height: 22px;
  }
  > input {
    margin-right: 22px;
  }
`;

const SortBox = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 12px;
    line-height: 1.42;
    color: ${palette.grayDarkest};
  }
`;

export default DotoriFilter;
