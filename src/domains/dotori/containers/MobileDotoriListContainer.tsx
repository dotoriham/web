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

  console.log({ data });

  useEffect(() => {
    console.log("Dd");
    fetchNextPage();
  }, []);

  const dotoris = data?.pages.flatMap((page) => page.content) ?? [];

  return (
    <div>
      <MobileDotoriList dotoris={dotoris} />
    </div>
  );
}

export default MobileDotoriListContainer;
