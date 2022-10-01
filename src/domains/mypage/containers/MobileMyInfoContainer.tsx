import React from "react";
import {
  MyPageAccountSettingSection,
  MyPageProfileSection,
  MyPageSectionDivider,
} from "../components/mobile";

function MobileMyInfoContainer() {
  return (
    <>
      <MyPageProfileSection />
      <MyPageSectionDivider />
      <MyPageAccountSettingSection />
      <MyPageSectionDivider />
    </>
  );
}

export default MobileMyInfoContainer;
