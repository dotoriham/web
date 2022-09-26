import {
  Bell24Icon,
  HamburgerMobileIcon,
  Search24MobileIcon,
} from "assets/icons";
import { useToggle } from "domains/@shared/hooks";
import { palette } from "lib/styles";
import { useSelector } from "react-redux";
import { mobileHeaderSelector } from "stores/mobileHeader";
import styled from "styled-components";
import MobileSidebarContainer from "../sidebar/containers/MobileSidebarContainer";

function MobileHeader() {
  const { leftMenu, isShowRightMenu, title } =
    useSelector(mobileHeaderSelector);

  const [isVisibleSidebar, onToggleVisibleSidebar] = useToggle(false);

  return (
    <>
      <Container>
        <Inner>
          {leftMenu && (
            <LeftButton>
              <HamburgerMobileIcon onClick={onToggleVisibleSidebar} />
            </LeftButton>
          )}
          <Title>{title}</Title>

          {isShowRightMenu && (
            <RightButtons>
              <Search24MobileIcon />
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

export default MobileHeader;
