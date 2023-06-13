/**
 * Helps generate SVG path for worksheet baseline.
 * @param param0 height: number;numLine: number;length: number;startX: number;startY: number;
 * @returns string
 */
export function getBaseline({
  height,
  numLine,
  length,
  startX,
  startY,
}: {
  height: number;
  numLine: number;
  length: number;
  startX: number;
  startY: number;
}) {
  let path: string = "";

  for (var i = 0; i < numLine; i++) {
    path += ` M${startX} ${i * height + startY} L${length} ${
      i * height + startY
    }`;
  }

  const verticalBorder = ` M${startX} ${startY} V${
    height * (numLine - 1) + startY
  } M${length} ${startY} V${height * (numLine - 1) + startY}`;

  path += verticalBorder;

  console.log(verticalBorder);

  return path;
}
