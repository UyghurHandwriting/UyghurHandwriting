import { ReactNode } from "react";
import { ConnectedComponent } from "react-redux";

export type InjectComp =
  | ConnectedComponent<(prop: any) => JSX.Element, any>
  | ((prop?: any) => JSX.Element);

export type Size = "XS" | "SM" | "MD" | "LG" | "XL";
export type RowSize = Size;

export enum BaselineWidth {
  XS = 0.1,
  SM = 0.4,
  MD = 1,
  LG = 1.6,
  XL = 2,
}
export type BaselineWidthKeys = keyof typeof BaselineWidth;
export type BaselineWidthValues = (typeof BaselineWidth)[BaselineWidthKeys];

export enum TextOpacity {
  XS = 0.1,
  SM = 0.25,
  MD = 0.5,
  LG = 0.75,
  XL = 1,
}
export type TextOpacityKeys = keyof typeof TextOpacity;
export type TextOpacityValues = (typeof TextOpacity)[TextOpacityKeys];

export type SVGMaxHeight = 765;

export type Languages = {
  english: string;
  turkish: string;
  uyghur: string;
  uyghurLatin: string;
  chinese: string;
};

export type LanguageKeys = keyof Languages;
export type PropsWithChildren<P> = P & { children?: ReactNode };
export type LangMap<T> = { [key in LanguageKeys]: T };
export type RowSizeMap<T> = { [key in RowSize]: T };
export type DirectionStyle = "rtl" | "ltr";

export interface DropdownOption<TValue = string, TLabel = string> {
  value: TValue; //value is the option id. must be unique
  label: TLabel; //label is the UI display string
}

export enum FontStyle {
  UKIJElipbe,
  UKIJElipbeChekitlik,
  AlpEkran,
}

export type FontStyleKeys = keyof typeof FontStyle;
