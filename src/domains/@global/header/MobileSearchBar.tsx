import { useDebounce, useInput } from "domains/@shared/hooks";
import { useSearchQueryParams } from "domains/search/hooks";
import { mergeQsParserWithSearchKeys } from "domains/search/utils";
import { palette } from "lib/styles";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function MobileSearchBar() {
  const { keyword } = useSearchQueryParams();
  const [searchInput, onChangeSearchInput] = useInput(keyword || "");
  const navigate = useNavigate();
  const debounceSearchInput = useDebounce(searchInput, 500);

  useEffect(() => {
    navigate(
      {
        search: mergeQsParserWithSearchKeys({
          keyword: debounceSearchInput,
        }),
      },
      {
        replace: true,
      }
    );
  }, [debounceSearchInput, navigate]);

  return (
    <StyledSearchBar
      value={searchInput}
      onChange={onChangeSearchInput}
      placeholder="도토리함 검색"
    />
  );
}

const StyledSearchBar = styled.input`
  width: 100%;
  padding: 6px 10px;
  border-radius: 6px;
  background-color: #f3f3f3;
  margin-right: 16px;
  font-size: 12px;
  line-height: 1.42;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${palette.grayDark};
  }
`;

export default MobileSearchBar;
