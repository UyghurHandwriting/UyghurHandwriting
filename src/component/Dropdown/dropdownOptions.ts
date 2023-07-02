import {
  BaselineWidth,
  BaselineWidthKeys,
  DropdownOption,
  FontStyle,
  LanguageKeys,
} from "../../app/types";

export const langueOptions: DropdownOption<LanguageKeys>[] = [
  {
    value: "uyghur",
    label: "Uyghurche",
  },
  {
    value: "english",
    label: "English",
  },
  {
    value: "turkish",
    label: "Turkish",
  },
  {
    value: "chinese",
    label: "Chinese",
  },
];
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
