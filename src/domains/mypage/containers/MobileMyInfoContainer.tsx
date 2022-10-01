import React from "react";
import {
  MyPageAccountSettingSection,
  MyPageProfileSection,
  MyPageSectionDivider,
} from "../components/mobile";

function MobileMyInfoContainer() {
  return (
    <div>
      <MyPageProfileSection />
      <MyPageSectionDivider />
      <MyPageAccountSettingSection />
      <MyPageSectionDivider />
    </div>
  );
}

export default MobileMyInfoContainer;
