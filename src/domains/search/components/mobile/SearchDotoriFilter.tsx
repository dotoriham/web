import { DropDownIcon } from "assets/icons";
import { SwitchButton } from "components";
import { useToggle } from "domains/@shared/hooks";
import { DotoriFilterModal } from "domains/dotori/components/mobile";
import { getDotoriSortText } from "domains/dotori/utils/dotori";
import { useSearchQueryParams } from "domains/search/hooks";
import { mergeQsParserWithSearchKeys } from "domains/search/utils";
import { palette } from "lib/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function SearchDotoriFilter() {
  const { remind, sort, keyword } = useSearchQueryParams();
  const navigate = useNavigate();
  const [isModal, onToggleModal] = useToggle(false);

  return (
    <>
      <Container>
        <FilterBox>
          <RemindBox>
            <span>리마인드 only</span>
            <SwitchButton
              isChecked={remind}
              onToggle={() =>
                navigate(
                  {
                    search: mergeQsParserWithSearchKeys({
                      remind: !remind,
                      sort,
                      keyword,
                    }),
                  },
                  {
                    replace: true,
                  }
                )
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
  justify-content: flex-end;
  margin: 6px 0;
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

export default SearchDotoriFilter;
