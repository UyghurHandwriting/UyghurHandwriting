import { RowSize, RowSizeMap } from "../../app/types";

type Props = RowSize;

export const getLineHeight = (prop: Props): number => {
  const heightMap: RowSizeMap<number> = {
    XS: 8.5,
    SM: 10.5,
    MD: 14,
    LG: 17,
    XL: 21,
  };

  return heightMap[prop];
};
