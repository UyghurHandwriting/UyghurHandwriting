import { CSSTextAlign, DirectionStyle } from "../../app/types";

export const textDirection2align = (
  direction: DirectionStyle
): CSSTextAlign => {
  if (direction === "ltr") return "left";
  if (direction === "rtl") return "right";
};
