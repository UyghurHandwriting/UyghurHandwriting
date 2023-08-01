import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  DropdownOption,
  FontStyle,
  FontStyleKeys,
  LanguageKeys,
  RowSize,
  TextOpacityKeys,
  BaselineWidthKeys,
} from "../../app/types";
import { toNumber } from "lodash";
import { getSamplePdfTitleText } from "../../utils/pdf/getSamplePdfTitleText";

export type PdfInitialState = {
  showToolbar: boolean;
  forceRefresh: boolean;
  language: LanguageKeys;
  languageStyle: DropdownOption<FontStyle, FontStyleKeys>;
  baseLineSize: RowSize;
  baseLineColor: string;
  baseLineGap: number;
  text: string | undefined;
  baselineWidth: BaselineWidthKeys;
  textOpacity: TextOpacityKeys;
  title: string | undefined;
  subTitle1: string | undefined;
  subTitle2: string | undefined;
};

export const initialState: PdfInitialState = {
  showToolbar: false,
  forceRefresh: false,
  language: "english",
  languageStyle: { value: FontStyle.YsabeauInfant, label: "YsabeauInfant" },
  baseLineSize: "MD",
  baseLineColor: "rgba(103,102,102,255)",
  baseLineGap: 10,
  baselineWidth: "MD",
  textOpacity: "MD",
  title: "Optional Title",
  subTitle1: "Name",
  subTitle2: "Class",
  text: undefined,
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
    setPdfLangStyleLabel: (state, action: PayloadAction<FontStyleKeys>) => {
      state.languageStyle.label = action.payload;
    },
    setPdfLangStyleValue: (state, action: PayloadAction<FontStyle>) => {
      state.languageStyle.value = action.payload;
    },
    setPdfLangStyle: (
      state,
      action: PayloadAction<DropdownOption<FontStyle, FontStyleKeys>>
    ) => {
      state.languageStyle = action.payload;
    },
    setPdfFontStyle: (state, action: PayloadAction<FontStyle>) => {
      const keys = Object.keys(FontStyle) as Array<keyof typeof FontStyle>;
      const label =
        keys.find((key) => FontStyle[key] === toNumber(action.payload)) ??
        "UKIJElipbe";
      setPdfLangStyleValue(action.payload);
      setPdfLangStyleLabel(label);
    },
    setPdfBaselineWidth: (state, action: PayloadAction<BaselineWidthKeys>) => {
      state.baselineWidth = action.payload;
    },
    setPdfTextOpacity: (state, action: PayloadAction<TextOpacityKeys>) => {
      state.textOpacity = action.payload;
    },
    setPdfBaselineSize: (state, action: PayloadAction<RowSize>) => {
      state.baseLineSize = action.payload;
    },
    setPdfTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setShowToolbar: (state, action: PayloadAction<boolean>) => {
      state.showToolbar = action.payload;
    },
    setPdfSubtitle1: (state, action: PayloadAction<string>) => {
      state.subTitle1 = action.payload;
    },
    setPdfSubtitle2: (state, action: PayloadAction<string>) => {
      state.subTitle2 = action.payload;
    },
    setPdfLanguage: (state, action: PayloadAction<LanguageKeys>) => {
      const { title, subtitle1, subtitle2 } = getSamplePdfTitleText(
        action.payload
      );
      state.language = action.payload;
      state.title = title;
      state.subTitle1 = subtitle1;
      state.subTitle2 = subtitle2;
    },
  },
});

//export reducers & selector
export const {
  setPdfLanguage,
  setPdfSubtitle1,
  setPdfSubtitle2,
  setPdfText,
  setPdfRefresh,
  setPdfLangStyle,
  setPdfLangStyleValue,
  setPdfLangStyleLabel,
  setPdfFontStyle,
  setPdfBaselineWidth,
  setPdfTextOpacity,
  setPdfTitle,
  setPdfBaselineSize,
  setShowToolbar,
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
export const selectPdfLangStyle = (state: RootState) =>
  state[sliceKey].languageStyle.value;
export const selectPdfBaselineSize = (state: RootState) =>
  state[sliceKey].baseLineSize;
export const selectPdfBaselineWidth = (state: RootState) =>
  state[sliceKey].baselineWidth;
export const selectPdfTextOpacity = (state: RootState) =>
  state[sliceKey].textOpacity;
export const selectPdfSubtitle1 = (state: RootState) =>
  state[sliceKey].subTitle1;
export const selectPdfSubtitle2 = (state: RootState) =>
  state[sliceKey].subTitle2;
