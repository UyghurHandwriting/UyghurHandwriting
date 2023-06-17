import { LangMap, LanguageKeys } from "../../app/types";

export const getNumLine = (props: LanguageKeys) => {
  const numLineMap: LangMap<number> = {
    uyghur: 5,
    chinese: 4,
    english: 4,
    uyghurLatin: 4,
    turkish: 4,
  };

  return numLineMap[props];
};
