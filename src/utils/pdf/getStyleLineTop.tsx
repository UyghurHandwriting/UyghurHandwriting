import { RowSize } from "../../app/types";

export const getStyleLineTop = (key: RowSize): number => {
  const fontTable: { [key in RowSize]: number } = {
    XS: -6,
    SM: -7,
    MD: -9.5,
    LG: -11.5,
    XL: -14.5,
  };
  return fontTable[key];
};
