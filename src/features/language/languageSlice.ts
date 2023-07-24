import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialLangState, initialLangState } from "./initialState";
import {
  LanguageKeys,
  DropdownOption,
  BaselineWidthKeys,
  TextOpacityKeys,
} from "../../app/types";
import { RootState } from "../../app/store";

type InitialState = InitialLangState & {
  language: LanguageKeys | undefined;
  langOptionOpen: boolean; //indicates in the language dropdown is open
};

export const initialState: InitialState = {
  ...initialLangState,
  language: "english", //site language
  langOptionOpen: false,
};
export const sliceKey = "language";
export const languageSlice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setSiteLanguage: (state, action: PayloadAction<LanguageKeys>) => {
      state.language = action.payload;
    },
    setLangOptionOpen: (state, action: PayloadAction<boolean | undefined>) => {
      if (action?.payload) {
        state.langOptionOpen = action.payload;
      } else {
        state.langOptionOpen = !state.langOptionOpen;
      }
    },
  },
});

//export reducers & selector
export const { setSiteLanguage, setLangOptionOpen } = languageSlice.actions;
export const languageReducer = languageSlice.reducer;

export const thisSlice = (state: RootState) => state[sliceKey];

export const selectSiteLanguage = (state: RootState) =>
  thisSlice(state).language;

export const selectLangText =
  (state: RootState) =>
  (textKey: keyof InitialLangState): string => {
    return thisSlice(state)[textKey][thisSlice(state).language ?? "english"];
  };

export const selectLangOptionOpen = (state: RootState) =>
  thisSlice(state).langOptionOpen;

export const selectHeaderNav1 = (state: RootState) =>
  selectLangText(state)("headerNav1");

export const selectHeaderNav2 = (state: RootState) =>
  selectLangText(state)("headerNav2");

export const selectRNav5 = (state: RootState) => selectLangText(state)("rNav5");

export const selectRNav6 = (state: RootState) => selectLangText(state)("rNav6");

export const selectRNav7 = (state: RootState) => selectLangText(state)("rNav7");

export const selectRCardTitle9 = (state: RootState) =>
  selectLangText(state)("rCardTitle9");

export const selectRCardTitle16 = (state: RootState) =>
  selectLangText(state)("rCardTitle16");

export const selectRBtn14 = (state: RootState) =>
  selectLangText(state)("rBtn14");

export const selectRDropLabel18 = (state: RootState) =>
  selectLangText(state)("rDropLabel18");

export const selectRDropLabel19 = (state: RootState) =>
  selectLangText(state)("rDropLabel19");

export const selectRDropLabel20 = (state: RootState) =>
  selectLangText(state)("rDropLabel20");

export const selectRDropLabel23 = (state: RootState) =>
  selectLangText(state)("rDropLabel23");

export const selectSubtitle60 = (state: RootState) =>
  selectLangText(state)("subtitle60");

export const selectRBtn12 = (state: RootState) =>
  selectLangText(state)("rBtn12");

export const selectFTitle33 = (state: RootState) =>
  selectLangText(state)("fTitle33");

export const selectFSubTitle34 = (state: RootState) =>
  selectLangText(state)("fSubTitle34");
export const selectFPhone35 = (state: RootState) =>
  selectLangText(state)("fPhone35");
export const selectOption38 = (state: RootState) =>
  selectLangText(state)("option38");
export const selectOption39 = (state: RootState) =>
  selectLangText(state)("option39");
export const selectOption40 = (state: RootState) =>
  selectLangText(state)("option40");
export const selectOption42 = (state: RootState) =>
  selectLangText(state)("option42");
export const selectOption43 = (state: RootState) =>
  selectLangText(state)("option43");
export const selectOption44 = (state: RootState) =>
  selectLangText(state)("option44");
export const selectOption45 = (state: RootState) =>
  selectLangText(state)("option45");
export const selectOption46 = (state: RootState) =>
  selectLangText(state)("option46");
export const selectOption47 = (state: RootState) =>
  selectLangText(state)("option47");
export const selectOption48 = (state: RootState) =>
  selectLangText(state)("option38");
export const selectOption49 = (state: RootState) =>
  selectLangText(state)("option49");
export const selectOption50 = (state: RootState) =>
  selectLangText(state)("option50");
export const selectOption51 = (state: RootState) =>
  selectLangText(state)("option51");
export const selectOption52 = (state: RootState) =>
  selectLangText(state)("option52");
export const selectOption53 = (state: RootState) =>
  selectLangText(state)("option53");
export const selectOption54 = (state: RootState) =>
  selectLangText(state)("option54");
export const selectOption55 = (state: RootState) =>
  selectLangText(state)("option55");
export const selectOption56 = (state: RootState) =>
  selectLangText(state)("option56");
export const selectOption57 = (state: RootState) =>
  selectLangText(state)("option57");
export const selectOption58 = (state: RootState) =>
  selectLangText(state)("option58");
export const selectOption59 = (state: RootState) =>
  selectLangText(state)("option59");
export const selectPdfLang61 = (state: RootState) =>
  selectLangText(state)("pdfLang61");
export const selectPdfTitle62 = (state: RootState) =>
  selectLangText(state)("pdfTitle62");
export const selectPdfTitle63 = (state: RootState) =>
  selectLangText(state)("pdfTitle63");
export const selectPdfTitle64 = (state: RootState) =>
  selectLangText(state)("pdfTitle64");

export const selectLanguageOptions = (
  state: RootState
): DropdownOption<LanguageKeys>[] => {
  return [
    {
      value: "uyghur",
      label: selectLangText(state)("option38"),
    },
    {
      value: "english",
      label: selectLangText(state)("option39"),
    },
    {
      value: "turkish",
      label: selectLangText(state)("option40"),
    },
    {
      value: "chinese",
      label: selectLangText(state)("option42"),
    },
  ];
};

export const selectBaselineWidthOptions = (
  state: RootState
): DropdownOption<BaselineWidthKeys>[] => {
  return [
    {
      value: "XS",
      label: selectLangText(state)("option47"),
    },
    {
      value: "SM",
      label: selectLangText(state)("option48"),
    },
    {
      value: "MD",
      label: selectLangText(state)("option49"),
    },
    {
      value: "LG",
      label: selectLangText(state)("option50"),
    },
    {
      value: "XL",
      label: selectLangText(state)("option51"),
    },
  ];
};

export const selectTextOpacityOptions = (
  state: RootState
): DropdownOption<TextOpacityKeys>[] => {
  return [
    {
      value: "XS",
      label: selectLangText(state)("option52"),
    },
    {
      value: "SM",
      label: selectLangText(state)("option53"),
    },
    {
      value: "MD",
      label: selectLangText(state)("option49"),
    },
    {
      value: "LG",
      label: selectLangText(state)("option54"),
    },
    {
      value: "XL",
      label: selectLangText(state)("option55"),
    },
  ];
};

export const selectBaselineSizeOptions = (
  state: RootState
): DropdownOption<BaselineWidthKeys>[] => {
  return [
    {
      value: "XS",
      label: selectLangText(state)("option56"),
    },
    {
      value: "SM",
      label: selectLangText(state)("option57"),
    },
    {
      value: "MD",
      label: selectLangText(state)("option49"),
    },
    {
      value: "LG",
      label: selectLangText(state)("option58"),
    },
    {
      value: "XL",
      label: selectLangText(state)("option59"),
    },
  ];
};
