import { RowSize } from "../../app/types";

export const getTextChunkSize = (key: RowSize): number => {
  const fontTable: { [key in RowSize]: number } = {
    XS: 55,
    SM: 45,
    MD: 34,
    LG: 25,
    XL: 19,
  };
  return fontTable[key];
};
