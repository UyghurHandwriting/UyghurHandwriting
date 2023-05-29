import { createSlice } from "@reduxjs/toolkit";
import { initialLangState } from "./initialState";

export const initialState = initialLangState;
export const sliceKey = "language";
export const languageSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {},
});

//export reducers & selector
export const {} = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
