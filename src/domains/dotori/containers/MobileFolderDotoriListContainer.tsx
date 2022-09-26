import { useMobileHeader } from "domains/@shared/hooks";
import { useDotoriQueryParams } from "domains/dotori/hooks";
import {
  useInfiniteDotoriListService,
  usePagePathService,
} from "domains/dotori/services";
import React from "react";
import { useParams } from "react-router-dom";
import { DotoriFilter, DotoriList } from "../components/mobile";

function MobileFolderDotoriListContainer() {
  const { remind, sort } = useDotoriQueryParams();
  const { folderId = "" } = useParams<"folderId">();

  const { data, fetchNextPage } = useInfiniteDotoriListService({
    page: 0,
    size: 12,
    remind,
    sort,
    folderId,
  });

  const { pagePath } = usePagePathService(folderId);
  console.log({ pagePath });

  useMobileHeader({
    isShowRightMenu: true,
    leftMenu: "menu",
    title: pagePath,
  });

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  return (
    <div>
      <DotoriFilter />
      <DotoriList dotoris={dotoris} fetchNextPage={fetchNextPage} />
    </div>
  );
}

export default MobileFolderDotoriListContainer;
