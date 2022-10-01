import {
  ArrowPre24Icon,
  Bell24Icon,
  HamburgerMobileIcon,
  Search24MobileIcon,
} from "assets/icons";
import { useDebounce, useInput, useToggle } from "domains/@shared/hooks";
import { useSearchQueryParams } from "domains/search/hooks";
import { mergeQsParserWithSearchKeys } from "domains/search/utils";
import { palette } from "lib/styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Path from "routes/Path";
import { mobileHeaderSelector } from "stores/mobileHeader";
import styled from "styled-components";
import MobileSidebarContainer from "../sidebar/containers/MobileSidebarContainer";

function MobileHeader() {
  const { leftMenu, isShowRightMenu, title, searchBar } =
    useSelector(mobileHeaderSelector);

  const [isVisibleSidebar, onToggleVisibleSidebar] = useToggle(false);
  const navigate = useNavigate();
  const { keyword } = useSearchQueryParams();
  const [searchInput, onChangeSearchInput] = useInput(keyword || "");

  const debounceSearchInput = useDebounce(searchInput, 500);

  useEffect(() => {
    if (debounceSearchInput) {
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
    }
  }, [debounceSearchInput, navigate]);

  const printLeftMenu = () => {
    switch (leftMenu) {
      case "back":
        return (
          <LeftButton>
            <ArrowPre24Icon onClick={() => navigate(-1)} />
          </LeftButton>
        );

      case "menu":
        return (
          <LeftButton>
            <HamburgerMobileIcon onClick={onToggleVisibleSidebar} />
          </LeftButton>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        <Inner>
          {printLeftMenu()}
          {title && <Title>{title}</Title>}
          {searchBar && (
            <SearchBar
              value={searchInput}
              onChange={onChangeSearchInput}
              placeholder="도토리함 검색"
            />
          )}

          {isShowRightMenu && (
            <RightButtons>
              <Search24MobileIcon onClick={() => navigate(Path.SearchPage)} />
              <Bell24Icon />
            </RightButtons>
          )}
        </Inner>
      </Container>
      <MobileSidebarContainer
        visible={isVisibleSidebar}
        onToggleVisible={onToggleVisibleSidebar}
      />
    </>
  );
}

const Container = styled.header`
  width: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 400;
  background: white;
`;

const Inner = styled.div`
  height: 52px;
  display: flex;
  align-items: center;
`;

const LeftButton = styled.button`
  margin: 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.span`
  color: ${palette.grayDarkest};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
`;

const RightButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  svg {
    margin-right: 16px;
  }
`;

const SearchBar = styled.input`
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

export default MobileHeader;
