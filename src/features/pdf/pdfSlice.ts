import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LanguageKeys, RowSize } from "../../app/types";

export type PdfInitialState = {
  language: LanguageKeys;
  baseLineSize: RowSize;
  baseLineColor: string;
  baseLineGap: number;
  text: string;
};

export const initialState: PdfInitialState = {
  language: "uyghur",
  baseLineSize: "XL",
  baseLineColor: "rgba(103,102,102,255)",
  baseLineGap: 10,
  text: "  ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې  ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې  ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې  ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې  ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې ئابپتجچخدرزژسشغفقكڭگلمنھەوۆۇۈۋيىې ئ ا ب پ ت ج چ خ د ر ز ژ س ش غ ف ق ك ڭ گ ل م ن ھ ە و ۆ ۇ ۈ ۋ ي ى ې",
};

export const sliceKey = "pdf";
export const pdfSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setPdfText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

//export reducers & selector
export const { setPdfText } = pdfSlice.actions;
export const pdfReducer = pdfSlice.reducer;
export const selectPdfSlice = (state: RootState) => state[sliceKey];
export const selectPdfLanguage = (state: RootState) => state[sliceKey].language;
export const selectPdfText = (state: RootState) => state[sliceKey].text;
