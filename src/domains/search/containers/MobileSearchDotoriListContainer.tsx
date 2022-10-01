import React from "react";
import {
  SearchDotoriEmpty,
  SearchDotoriFilter,
  SearchDotoriList,
} from "../components/mobile";
import useInfiniteSearchDotoriListService from "../services/useInfiniteSearchDotoriListService";

function MobileSearchDotoriListContainer() {
  const { data, fetchNextPage, isFetched } =
    useInfiniteSearchDotoriListService();

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  if (isFetched && dotoris.length === 0) return <SearchDotoriEmpty />;

  return (
    <>
      {dotoris.length > 0 && <SearchDotoriFilter />}
      <SearchDotoriList dotoris={dotoris} fetchNextPage={fetchNextPage} />
    </>
  );
}

export default MobileSearchDotoriListContainer;
