import { ReactNode } from "react";
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
export type PropsWithChildren<P> = P & { children?: ReactNode };
export type LangMap<T> = { [key in LanguageKeys]: T };
export type RowSizeMap<T> = { [key in RowSize]: T };
export type DirectionStyle = "rtl" | "ltr";

export interface DropdownOption<TValue = string, TLabel = string> {
  value: TValue; //value is the option id. must be unique
  label: TLabel; //label is the UI display string
}
