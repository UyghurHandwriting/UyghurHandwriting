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
  TextOpacityKeys,
  BaselineWidthKeys,
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
  baselineWidth: BaselineWidthKeys;
  textOpacity: TextOpacityKeys;
  title: string;
};

export const initialState: PdfInitialState = {
  showToolbar: false,
  forceRefresh: false,
  language: "uyghur",
  languageStyle: { value: FontStyle.UKIJElipbe, label: "UKIJElipbe" },
  baseLineSize: "MD",
  baseLineColor: "rgba(103,102,102,255)",
  baseLineGap: 10,
  baselineWidth: "MD",
  textOpacity: "MD",
  title: "",
  text: " يېقىنقى يىللاردىن باشلاپ دۇنيا ئېلېكتىرونلۇق مۇزىكا ساھەسىدە كۆزگە كۆرۈنۈشكە باشلىغان ھەسەن ۋە ئىرپان بۇ مۇزىكا فېستىۋالىنىڭ ئىككىنچى كۈنى، يەنى 14-ئىيۇل فىرانسىيە دۆلەت بايرىمىدا، تاماشىبىنلارغا ئۆزلىرىنىڭ نەق مەيداندا ئورۇنلاش ماھارىتىنى كۆرسەتكەن. مۇزىكا رىتىمىغا ماس ھالدا، ئارىلاپ ئۇلار بىز «ئۈنسىز ئەترىتى» ، «بىز ئۇيغۇر» دېگەن جاراڭلىق سادالارنى ياڭراتقان.",
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
