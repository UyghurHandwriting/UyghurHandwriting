import { ConnectedComponent } from "react-redux";

export type InjectComp =
  | ConnectedComponent<(prop: any) => JSX.Element, any>
  | ((prop?: any) => JSX.Element);

export type RowSize = "XS" | "SM" | "MD" | "LG" | "XL";
export type SVGMaxHeight = 765;

export type Languages = {
  english: string;
  turkish: string;
  uyghur: string;
  uyghurLatin: string;
  chinese: string;
};

export type LanguageKeys = keyof Languages;
