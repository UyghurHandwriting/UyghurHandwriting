import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialLangState, initialLangState } from "./initialState";
import { LanguageKeys } from "../../app/types";
import { RootState } from "../../app/store";

type InitialState = InitialLangState & {
  language: LanguageKeys;
  langOptionOpen: boolean; //indicates in the language dropdown is open
};

export const initialState: InitialState = {
  ...initialLangState,
  language: "english",
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
    return thisSlice(state)[textKey][thisSlice(state).language];
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

export const selectRBtn12 = (state: RootState) =>
  selectLangText(state)("rBtn12");

export const selectFTitle33 = (state: RootState) =>
  selectLangText(state)("fTitle33");

export const selectFSubTitle34 = (state: RootState) =>
  selectLangText(state)("fSubTitle34");
export const selectFPhone35 = (state: RootState) =>
  selectLangText(state)("fPhone35");
