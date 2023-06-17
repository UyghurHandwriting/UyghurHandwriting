import { RowSize, RowSizeMap } from "../../app/types";

export const getRowGap = (key: RowSize): number => {
  const fontTable: RowSizeMap<number> = {
    XS: 20,
    SM: 20,
    MD: 20,
    LG: 20,
    XL: 20,
  };
  return fontTable[key];
};
