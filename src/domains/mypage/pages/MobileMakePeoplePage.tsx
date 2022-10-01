import { useMobileHeader } from "domains/@shared/hooks";
import React from "react";
import { MakePeople } from "../components/mobile";

function MobileMakePeoplePage() {
  useMobileHeader({
    leftMenu: "back",
    title: "만든 사람들",
  });

  return <MakePeople />;
}

export default MobileMakePeoplePage;
