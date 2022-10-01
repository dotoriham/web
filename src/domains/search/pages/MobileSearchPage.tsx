import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import { MobileSearchDotoriListContainer } from "../containers";

function MobileSearchPage() {
  useMobileHeader({
    leftMenu: "back",
    searchBar: true,
  });

  return (
    <div>
      <MobileSearchDotoriListContainer />
    </div>
  );
}

export default MobileSearchPage;
