import {
  TextOpacityKeys,
  BaselineWidthKeys,
  DropdownOption,
  FontStyle,
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
