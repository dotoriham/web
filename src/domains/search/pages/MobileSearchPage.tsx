import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";

function MobileSearchPage() {
  useMobileHeader({
    leftMenu: "back",
    searchBar: true,
  });

  return <div>MobileSearchPage</div>;
}

export default MobileSearchPage;
