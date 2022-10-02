import { MobileDotoriEmpty } from "domains/@shared/components";
import React from "react";
import { SearchDotoriFilter, SearchDotoriList } from "../components/mobile";
import { useSearchQueryParams } from "../hooks";
import useInfiniteSearchDotoriListService from "../services/useInfiniteSearchDotoriListService";

function MobileSearchDotoriListContainer() {
  const { data, fetchNextPage, isFetched } =
    useInfiniteSearchDotoriListService();
  const { keyword } = useSearchQueryParams();

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  if (isFetched && dotoris.length === 0)
    return <MobileDotoriEmpty text="찾으시는 도토리가 없어요!" />;

  return (
    <>
      {dotoris.length > 0 && <SearchDotoriFilter />}
      <SearchDotoriList
        dotoris={dotoris}
        fetchNextPage={keyword ? fetchNextPage : () => {}}
      />
    </>
  );
}

export default MobileSearchDotoriListContainer;
