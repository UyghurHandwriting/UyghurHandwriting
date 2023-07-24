import { LanguageKeys } from "../../app/types";

export const getSamplePdfTitleText = (lang: LanguageKeys) => {
  switch (lang) {
    case "uyghur":
      return {
        title: "ئىختىيارى ماۋزۇسى",
        subtitle1: "ئىسىم",
        subtitle2: "سىنىپ",
      };
    case "english":
      return {
        title: "Optional Title",
        subtitle1: "Name",
        subtitle2: "Class",
      };
    case "turkish":
      return {
        title: "İsteğe Bağlı Başlık",
        subtitle1: "isim",
        subtitle2: "sınıf",
      };
    case "chinese":
      return {
        title: "可选标题",
        subtitle1: "姓名",
        subtitle2: "班级",
      };
    default:
      return {
        title: "Optional Title",
        subtitle1: "Name",
        subtitle2: "Class",
      };
  }
};
