import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  TextOpacityValues,
  BaselineWidthValues,
  DropdownOption,
  FontStyle,
  FontStyleKeys,
  LanguageKeys,
  RowSize,
} from "../../app/types";
import { toNumber } from "lodash";

export type PdfInitialState = {
  showToolbar: boolean;
  forceRefresh: boolean;
  language: LanguageKeys;
  languageStyle: DropdownOption<FontStyle, FontStyleKeys>;
  baseLineSize: RowSize;
  baseLineColor: string;
  baseLineGap: number;
  text: string;
  baselineWidth: BaselineWidthValues;
  textOpacity: TextOpacityValues;
  title: string;
};

export const initialState: PdfInitialState = {
  showToolbar: false,
  forceRefresh: false,
  language: "uyghur",
  languageStyle: { value: FontStyle.UKIJElipbe, label: "UKIJElipbe" },
  baseLineSize: "XL",
  baseLineColor: "rgba(103,102,102,255)",
  baseLineGap: 10,
  baselineWidth: 0.4,
  textOpacity: 0.5,
  title: "",
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
    setPdfRefresh: (state) => {
      state.forceRefresh = !state.forceRefresh;
    },
    //!!!Dev_Note: We should never manually change PdfFontStyleLabel
    setPdfFontStyleLabel: (state, action: PayloadAction<FontStyleKeys>) => {
      state.languageStyle.label = action.payload;
    },
    setPdfFontStyleValue: (state, action: PayloadAction<FontStyle>) => {
      state.languageStyle.value = action.payload;
    },
    setPdfFontStyle: (state, action: PayloadAction<FontStyle>) => {
      const keys = Object.keys(FontStyle) as Array<keyof typeof FontStyle>;
      const label =
        keys.find((key) => FontStyle[key] === toNumber(action.payload)) ??
        "UKIJElipbe";

      state.languageStyle.value = action.payload;
      state.languageStyle.label = label;
    },
    setPdfBaselineWidth: (
      state,
      action: PayloadAction<BaselineWidthValues>
    ) => {
      state.baselineWidth = action.payload;
    },
    setPdfTextOpacity: (state, action: PayloadAction<TextOpacityValues>) => {
      state.textOpacity = action.payload;
    },
    setPdfBaselineSize: (state, action: PayloadAction<RowSize>) => {
      state.baseLineSize = action.payload;
    },
    setPdfTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

//export reducers & selector
export const {
  setPdfText,
  setPdfRefresh,
  setPdfFontStyleValue,
  setPdfFontStyleLabel,
  setPdfFontStyle,
  setPdfBaselineWidth,
  setPdfTextOpacity,
  setPdfTitle,
  setPdfBaselineSize,
} = pdfSlice.actions;
export const pdfReducer = pdfSlice.reducer;
export const selectPdfSlice = (state: RootState) => state[sliceKey];
export const selectPdfLanguage = (state: RootState) => state[sliceKey].language;
export const selectPdfShowToolBar = (state: RootState) =>
  state[sliceKey].showToolbar;
export const selectPdfText = (state: RootState) => state[sliceKey].text;
export const selectPdfTitle = (state: RootState) => state[sliceKey].title;
export const selectPdfRefresh = (state: RootState) =>
  state[sliceKey].forceRefresh;
