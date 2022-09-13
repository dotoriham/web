import React, { useEffect } from "react";
import { MobileDotoriList } from "../components/mobile";
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
      <MobileDotoriList dotoris={dotoris} fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default MobileDotoriListContainer;
