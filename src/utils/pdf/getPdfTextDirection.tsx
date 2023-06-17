import { DirectionStyle, LangMap, LanguageKeys } from "../../app/types";

export const getPdfTextDirection = (lang: LanguageKeys): DirectionStyle => {
  const directionMap: LangMap<DirectionStyle> = {
    english: "ltr",
    turkish: "ltr",
    uyghur: "rtl",
    uyghurLatin: "ltr",
    chinese: "ltr",
  };

  return directionMap[lang];
};
