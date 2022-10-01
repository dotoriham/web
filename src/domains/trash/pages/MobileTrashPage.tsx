import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import { MobileTrashDotoriListContainer } from "../containers";

function MobileTrashPage() {
  useMobileHeader({
    leftMenu: "menu",
    title: "휴지통",
    isShowRightMenu: true,
  });

  return (
    <>
      <MobileTrashDotoriListContainer />
    </>
  );
}

export default MobileTrashPage;
