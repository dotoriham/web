import React from "react";
import { SearchDotoriFilter, SearchDotoriList } from "../components/mobile";
import useInfiniteSearchDotoriListService from "../services/useInfiniteSearchDotoriListService";

function MobileSearchDotoriListContainer() {
  const { data, fetchNextPage } = useInfiniteSearchDotoriListService();

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  return (
    <div>
      {dotoris.length > 0 && <SearchDotoriFilter />}
      <SearchDotoriList dotoris={dotoris} fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default MobileSearchDotoriListContainer;
