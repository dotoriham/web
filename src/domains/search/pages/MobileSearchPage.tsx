import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import { MobileSearchDotoriListContainer } from "../containers";

function MobileSearchPage() {
  useMobileHeader({
    leftMenu: "back",
    searchBar: true,
  });

  return (
    <>
      <MobileSearchDotoriListContainer />
    </>
  );
}

export default MobileSearchPage;
