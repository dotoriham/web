import { MobileDotoriEmpty } from "domains/@shared/components";
import React from "react";
import { TrashDotoriList } from "../components/mobile";
import { useInfiniteTrashDotoriListService } from "../services";

function MobileTrashDotoriListContainer() {
  const { data, fetchNextPage, isFetched } =
    useInfiniteTrashDotoriListService();

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  if (isFetched && dotoris.length === 0)
    return <MobileDotoriEmpty text="휴지통이 비어있어요!" />;

  return (
    <>
      <TrashDotoriList dotoris={dotoris} fetchNextPage={fetchNextPage} />
    </>
  );
}

export default MobileTrashDotoriListContainer;
