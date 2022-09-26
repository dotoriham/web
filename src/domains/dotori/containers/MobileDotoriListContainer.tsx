import React from "react";
import { useMobileHeader } from "domains/@shared/hooks";
import { DotoriFilter, DotoriList } from "../components/mobile";
import { useDotoriQueryParams } from "../hooks";
import { useInfiniteDotoriListService } from "../services";

function MobileDotoriListContainer() {
  const { remind, sort } = useDotoriQueryParams();

  const { data, fetchNextPage } = useInfiniteDotoriListService({
    page: 0,
    size: 12,
    remind,
    sort,
  });

  useMobileHeader({
    isShowRightMenu: true,
    leftMenu: "menu",
    title: "모든 도토리",
  });

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  return (
    <div>
      <DotoriFilter />
      <DotoriList dotoris={dotoris} fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default MobileDotoriListContainer;
