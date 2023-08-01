import { LanguageKeys } from "../../app/types";
import {
  fontStyleOption_english,
  fontStyleOption_uyghur,
} from "../../component/Dropdown/dropdownOptions";

export const getPdfFontOption = (lang: LanguageKeys) => {
  switch (lang) {
    case "uyghur":
      return fontStyleOption_uyghur;
    case "english":
      return fontStyleOption_english;
    default:
      return fontStyleOption_uyghur;
  }
};
