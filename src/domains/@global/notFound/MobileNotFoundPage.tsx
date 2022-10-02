import { SymbolGray96Icon } from "assets/icons";
import { Button } from "components";
import { palette } from "lib/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function MobileNotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <SymbolGray96Icon />

      <Text>
        앗, 접근이 제한된 페이지입니다!
        <br />
        도토리함을 둘러보시겠어요?
      </Text>

      <Button
        variant="primary"
        onClick={() => navigate("/")}
        width="172px"
        height="40px"
      >
        둘러보기
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 104px);
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: ${palette.grayDarker};
  margin: 16px 0 24px;
  text-align: center;
`;

export default MobileNotFoundPage;
