import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { ThemeType } from "common/models";

import { initialAppState } from "./app.state";

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    showCookieConsentModal: (state, { payload }: PayloadAction<boolean>) => {
      state.showCookieConsent = payload;
    },
    setAppTheme: (state, { payload }: PayloadAction<ThemeType>) => {
      state.theme = payload;
    }
  }
});

export default appSlice.reducer;
export const appActions = appSlice.actions;
