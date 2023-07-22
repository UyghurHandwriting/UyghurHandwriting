import {
  TextOpacityKeys,
  BaselineWidthKeys,
  DropdownOption,
  FontStyle,
  LanguageKeys,
} from "../../app/types";

export const fontStyleOption_uyghur: DropdownOption<FontStyle>[] = [
  {
    value: FontStyle.UKIJElipbe,
    label: "UKIJ Elipbe",
  },
  {
    value: FontStyle.UKIJElipbeChekitlik,
    label: "Elipbe chekitlik",
  },
  {
    value: FontStyle.AlpEkran,
    label: "Alp ekran",
  },
];

export const baselineWidthOptions: DropdownOption<BaselineWidthKeys, string>[] =
  [
    {
      value: "XS",
      label: "Thinnest",
    },
    {
      value: "SM",
      label: "Thin",
    },
    {
      value: "MD",
      label: "Medium",
    },
    {
      value: "LG",
      label: "Thick",
    },
    {
      value: "XL",
      label: "Thickest",
    },
  ];

export const textOpacityOptions: DropdownOption<TextOpacityKeys, string>[] = [
  {
    value: "XS",
    label: "Lightest",
  },
  {
    value: "SM",
    label: "Light",
  },
  {
    value: "MD",
    label: "Medium",
  },
  {
    value: "LG",
    label: "Dark",
  },
  {
    value: "XL",
    label: "Darkest",
  },
];

export const baselineSizeOptions: DropdownOption<TextOpacityKeys, string>[] = [
  {
    value: "XS",
    label: "Smallest",
  },
  {
    value: "SM",
    label: "Small",
  },
  {
    value: "MD",
    label: "Medium",
  },
  {
    value: "LG",
    label: "Large",
  },
  {
    value: "XL",
    label: "Largest",
  },
];

export const languageOptions: DropdownOption<LanguageKeys, string>[] = [
  {
    value: "uyghur",
    label: "ئۇيغۇرچە",
  },
  {
    value: "english",
    label: "English",
  },
  {
    value: "turkish",
    label: "Türkçe",
  },
  {
    value: "chinese",
    label: "中文",
  },
];

//Chinese is not available for PDF language option
export const PdfLanguageOptions: DropdownOption<LanguageKeys, string>[] =
  languageOptions.filter((lang) => lang.value !== "chinese");
