import { RowSize } from "../../app/types";
import { Languages } from "../../features/language/initialState";
import { getBaseline } from "./getBaseline";
import { getLineHeight } from "./getLineheight";
import { getNumLine } from "./getNumLine";

type Props = {
  numRow: number;
  size: RowSize;
  language: keyof Languages;
  length?: number;
};

export default function getLineGroup({
  numRow,
  size,
  language,
  length = 562,
}: Props) {
  let pathGroup = "";
  const height = getLineHeight(size);
  const numLine = getNumLine(language);
  const startX = 0;
  var startY = 0;
  for (let i = 0; i < numRow; i++) {
    pathGroup += getBaseline({ height, length, startX, startY, numLine });
    startY += height * numLine + height;
    console.log("the height: ", startY);
  }

  return pathGroup;
}
