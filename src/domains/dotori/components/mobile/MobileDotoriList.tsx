import { MobileDotoriCard } from "domains/@shared/components";
import React from "react";
import { Dotori } from "types/dotori";

interface Props {
  dotoris: Dotori[];
}

function MobileDotoriList({ dotoris }: Props) {
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
          />
        );
      })}
    </div>
  );
}

export default MobileDotoriList;
