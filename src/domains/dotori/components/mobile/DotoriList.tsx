import { MobileDotoriCard } from "domains/@shared/components";
import { useInfiniteScroll } from "domains/@shared/hooks/useInfiniteScroll";
import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "stores/user";
import { Dotori } from "types/dotori";

interface Props {
  dotoris: Dotori[];
  fetchNextPage(): void;
}

function DotoriList({ dotoris, fetchNextPage }: Props) {
  const [subscribe] = useInfiniteScroll(fetchNextPage);
  const { name, image: profileImg } = useSelector(userSelector);
  return (
    <div>
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
            profileName={name}
            profileImageSrc={profileImg}
          />
        );
      })}
      <div ref={subscribe} />
    </div>
  );
}

export default DotoriList;
