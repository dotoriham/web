import { ItemId } from "@atlaskit/tree";
import {
  DotoriCardOptionButton,
  MobileDotoriCard,
} from "domains/@shared/components";
import { useToast } from "domains/@shared/hooks";
import { useInfiniteScroll } from "domains/@shared/hooks/useInfiniteScroll";
import useDotoriMutation from "domains/dotori/hooks/useDotoriMutation";
import { initialDotoriState } from "domains/dotori/utils/constants";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "stores/user";
import { Dotori } from "types/dotori";

export interface ActiveDotoriMenu extends Dotori {
  isOpen: boolean;
}

interface Props {
  dotoris: Dotori[];
  fetchNextPage(): void;
}

function DotoriList({ dotoris, fetchNextPage }: Props) {
  const [subscribe] = useInfiniteScroll(fetchNextPage);
  const { name, image: profileImg } = useSelector(userSelector);

  const {
    mutateDeleteDotori,
    mutateMoveDotori,
    mutateRemindToggleDotori,
    mutateClickCountDotori,
  } = useDotoriMutation();

  const { remindRecommendationToast } = useToast();

  const { remindToggle } = useSelector(userSelector);

  const [isActiveDotoriMenu, setIsActiveDotoriMenu] =
    useState<ActiveDotoriMenu>({
      ...initialDotoriState,
      isOpen: false,
    });

  const onActiveDotoriMenu = useCallback((dotori: Dotori, isOpen: boolean) => {
    setIsActiveDotoriMenu({ ...dotori, isOpen });
  }, []);

  const onMoveDotori = (nextFolderId: ItemId) => {
    const requestData = {
      bookmarkIdList: [isActiveDotoriMenu.id],
      nextFolderId,
    };
    mutateMoveDotori(requestData);
  };

  const onDeleteDotori = () => mutateDeleteDotori([isActiveDotoriMenu.id]);

  const onRemindToggle = (id: string, isRemind: boolean) => {
    if (!remindToggle) {
      remindRecommendationToast();
      return;
    }

    const requestData = {
      dotoriId: id,
      remind: isRemind,
    };

    mutateRemindToggleDotori(requestData);
  };

  return (
    <div>
      {dotoris.map((dotori) => {
        const { id, link, title, description, image, remindList } = dotori;
        return (
          <MobileDotoriCard
            key={id}
            link={link}
            title={title}
            description={description}
            imageSrc={image}
            onClickLink={() => {
              mutateClickCountDotori(id);
            }}
            profileName={name}
            profileImageSrc={profileImg}
            optionsButton={
              <DotoriCardOptionButton
                isActiveDotoriMenu={isActiveDotoriMenu}
                isOpenDotoriMenu={
                  isActiveDotoriMenu.id === dotori.id &&
                  isActiveDotoriMenu.isOpen
                }
                isRemind={!!remindList.length}
                link={link}
                onActiveDotoriMenu={(isOpen: boolean) =>
                  onActiveDotoriMenu(dotori, isOpen)
                }
                onDeleteDotori={onDeleteDotori}
                onMoveDotori={onMoveDotori}
                onRemindToggle={() => onRemindToggle(id, !!remindList.length)}
              />
            }
          />
        );
      })}
      <div ref={subscribe} />
    </div>
  );
}

export default DotoriList;
