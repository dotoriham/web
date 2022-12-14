import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "stores";

export interface MobileHeaderState {
  isShowRightMenu?: boolean;
  leftMenu?: "back" | "menu" | null;
  title?: string;
  searchBar?: boolean;
}

const initialState: MobileHeaderState = {
  isShowRightMenu: false,
  leftMenu: null,
  title: "",
};

const mobileHeader = createSlice({
  name: "mobileHeader",
  initialState,
  reducers: {
    setMobileHeader: (_, action: PayloadAction<MobileHeaderState>) =>
      action.payload,
  },
});

export const { setMobileHeader } = mobileHeader.actions;
export const mobileHeaderSelector = (state: rootState) => state.mobileHeader;
export default mobileHeader;
