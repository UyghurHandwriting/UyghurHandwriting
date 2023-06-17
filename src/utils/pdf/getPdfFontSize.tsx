import { RowSize, RowSizeMap } from "../../app/types";

export const getPdfFontSize = (key: RowSize): number => {
  const fontTable: RowSizeMap<number> = {
    XS: 26,
    SM: 31.5,
    MD: 42,
    LG: 51,
    XL: 64,
  };
  return fontTable[key];
};
