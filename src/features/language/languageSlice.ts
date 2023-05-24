import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {};

export const initialState: InitialState = {};

export const sliceKey = "language";
export const languageSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {},
});

//export reducers & selector
export const {} = languageSlice.actions;
export const languageReducer = languageSlice.reducer;
