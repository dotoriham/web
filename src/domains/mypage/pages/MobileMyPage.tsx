import { DividerLine } from "components";
import { MobileFooter } from "domains/@global/footer";
import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import Path from "routes/Path";
import styled from "styled-components";
import { MyPageListButton } from "../components/mobile";
import { MobileMyInfoContainer } from "../containers";

function MobileMyPage() {
  useMobileHeader({
    leftMenu: "back",
    title: "마이페이지",
  });

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <MobileMyInfoContainer />
        <MyPageListButton onClick={() => navigate(Path.MakePeoplePage)}>
          만든 사람들
        </MyPageListButton>
        <DividerLine color="#f3f3f3" width="100%" />
        <MyPageListButton
          onClick={() =>
            window.open("https://www.instagram.com/dotori_ham/", "_blank")
          }
        >
          도토리함 인스타그램
        </MyPageListButton>
      </Container>
      <MobileFooter />
    </>
  );
}

const Container = styled.div`
  flex: 1 0 auto;
`;

export default MobileMyPage;
