import React from "react";
import { DotoriList } from "../components/mobile";
import { useInfiniteDotoriListService } from "../services";

function MobileDotoriListContainer() {
  const { data, fetchNextPage } = useInfiniteDotoriListService({
    page: 0,
    size: 12,
    remind: false,
    sort: "saveTime,desc",
  });

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  return (
    <div>
      <DotoriList dotoris={dotoris} fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default MobileDotoriListContainer;
