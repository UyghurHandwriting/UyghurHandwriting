import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type PdfInitialState = {
  fontSize: number;
};

export const initialState: PdfInitialState = {
  fontSize: 15,
};

export const sliceKey = "pdf";
export const pdfSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setPdfFontSize: (
      state,
      action: PayloadAction<PdfInitialState["fontSize"]>
    ) => {
      state.fontSize = action.payload;
    },
  },
});

//export reducers & selector
export const { setPdfFontSize } = pdfSlice.actions;
export const pdfReducer = pdfSlice.reducer;
export const selectPdfFontSize = (state: RootState) => state[sliceKey].fontSize;
export const selectPdfSlice = (state: RootState) => state[sliceKey];
