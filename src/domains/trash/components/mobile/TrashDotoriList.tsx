import { MobileDotoriCard } from "domains/@shared/components";
import { useInfiniteScroll } from "domains/@shared/hooks/useInfiniteScroll";
import React from "react";
import styled from "styled-components";
import { Dotori } from "types/dotori";

interface Props {
  dotoris: Dotori[];
  fetchNextPage(): void;
}

function TrashDotoriList({ dotoris, fetchNextPage }: Props) {
  const [subscribe] = useInfiniteScroll(fetchNextPage);

  return (
    <Container>
      {dotoris.map((dotori) => {
        const { id, link, title, description, image } = dotori;
        return (
          <MobileDotoriCard
            key={id}
            link={link}
            title={title}
            description={description}
            imageSrc={image}
            onClickLink={() => {}}
            profileName="프로필 이름"
            profileImageSrc="https://yapp-bucket-test.s3.ap-northeast-2.amazonaws.com/static/2e6b4adc-6c93-4351-8442-9aab32e40b48"
          />
        );
      })}
      <div ref={subscribe} />
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
`;

export default TrashDotoriList;
