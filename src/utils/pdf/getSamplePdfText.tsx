import { LanguageKeys } from "../../app/types";

export const getSamplePdfText = (lang: LanguageKeys) => {
  switch (lang) {
    case "uyghur":
      return "قىشدا كۈشمۈش پىشماسمىش، پىشسىمۇ كىشى يىمەسمىش.";
    case "english":
      return "The quick brown fox jumps over the lazy dog.";
    case "turkish":
      return "Dal kalkar kartal sarkar, kartal sarkar dal kalkar.";
    case "chinese":
      return "红凤凰,粉凤凰,粉红凤凰,黄凤凰.";
    case "uyghurLatin":
      return "qixta kuxmux pixmasmish, pixsimu kixi yimasmish";
    default:
      return "قىشدا كۈشمۈش پىشماسمىش، پىشسىمۇ كىشى يىمەسمىش.";
  }
};
