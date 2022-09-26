import {
  ListSelectedIcon,
  ListUnSelectedIcon,
  SelectedTrashIcon,
  UnselectedTrashIcon,
} from "assets/icons";
import { Button } from "components";
import { palette } from "lib/styles";
import { throttle } from "lib/utils/throttle";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Path from "routes/Path";
import { userSelector } from "stores/user";
import styled from "styled-components";
import {
  SidebarFolderList,
  SidebarIconName,
  SidebarProfile,
} from "../components/mobile";
import SidebarAddFolderButton from "../components/mobile/SidebarAddFolderButton";

interface Props {
  visible: boolean;
  onToggleVisible(): void;
}

function MobileSidebarContainer({ visible, onToggleVisible }: Props) {
  const [sidebarTop, setSidebarTop] = useState(window.scrollY);
  const user = useSelector(userSelector);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = throttle(() => {
      setSidebarTop(window.scrollY);
    });

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (visible) window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.overflow = "unset";
    };
  }, [visible]);

  return (
    <>
      <Container visible={visible} $top={sidebarTop}>
        <Inner>
          <SidebarProfile
            profileImgSrc={user.image}
            email={user.email}
            onClickProfile={() => {
              navigate(Path.MyPage);
              onToggleVisible();
            }}
          />

          <SidebarIconName
            isActive={pathname === Path.DotoriPage}
            onClick={() => {
              navigate(Path.DotoriPage);
              onToggleVisible();
            }}
            name="모든 도토리"
            activeIcon={<ListSelectedIcon />}
            unActiveIcon={<ListUnSelectedIcon />}
          />

          <SidebarFolderList onFolderClick={onToggleVisible} />
          <SidebarAddFolderButton />

          <SidebarIconName
            isActive={pathname === Path.TrashPage}
            name="휴지통"
            onClick={() => {
              navigate(Path.TrashPage);
              onToggleVisible();
            }}
            activeIcon={<SelectedTrashIcon />}
            unActiveIcon={<UnselectedTrashIcon />}
          />
        </Inner>
      </Container>
      <Background
        visible={visible}
        $top={sidebarTop}
        onClick={onToggleVisible}
      />
    </>
  );
}

const Container = styled.div<{ visible: boolean; $top: number }>`
  position: absolute;
  z-index: 3000;
  width: 287px;
  top: ${(props) => props.$top}px;
  background-color: #fff;
  margin: auto;
  height: 100%;
  ${({ visible }) => (visible ? "visibility: visible" : "visibility: hidden")};
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ visible }) => (visible ? 0 : -100)}vw);
`;

const Inner = styled.div`
  padding: 16px;
`;

const Background = styled.div<{ visible: boolean; $top: number }>`
  ${({ visible }) => (visible ? "display: block" : "display: none")};
  width: 100%;
  height: 100%;
  z-index: 500;
  background-color: ${palette.black};
  position: absolute;
  left: 0;
  top: ${(props) => props.$top}px;
  opacity: 0.3;
`;

export default MobileSidebarContainer;
