import { palette } from "lib/styles";
import { throttle } from "lib/utils/throttle";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "stores/user";
import styled from "styled-components";
import { SidebarProfile } from "../components/mobile";

interface Props {
  visible: boolean;
  onToggleVisible(): void;
}

function MobileSidebarContainer({ visible, onToggleVisible }: Props) {
  const [sidebarTop, setSidebarTop] = useState(window.scrollY);
  const user = useSelector(userSelector);

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
          <SidebarProfile profileImgSrc={user.image} email={user.email} />
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
  z-index: 9999;
  width: 100%;
  max-width: 300px;
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
