import { MakePeopleIMG } from "assets/images";
import { DOTORIHAM_MAKE_PEOPLE } from "domains/@global/footer/constants";
import { palette } from "lib/styles";
import React from "react";
import styled from "styled-components";

function MakePeople() {
  return (
    <Container>
      <MemberList>
        {DOTORIHAM_MAKE_PEOPLE.map(({ field, name, activity }) => (
          <MemberListItem key={name} disabled={!activity}>
            <MemberField>{field}</MemberField>
            <MemberName>{name}</MemberName>
          </MemberListItem>
        ))}
      </MemberList>

      <MemberImageBox>
        <MemberImage src={MakePeopleIMG} alt="만든 사람들" />
      </MemberImageBox>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;

const MemberList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 50px;
`;

const MemberListItem = styled.div<{ disabled?: boolean }>`
  width: 44px;
  text-align: left;
  ${({ disabled }) => disabled && `opacity: 0.3;`}
  margin-right: 60px;
  margin-bottom: 40px;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const MemberField = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${palette.primary};
  margin-bottom: 2px;
`;

const MemberName = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.57;
  color: ${palette.grayDarkest};
`;

const MemberImageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MemberImage = styled.img`
  width: 312px;
`;

export default MakePeople;
