import React from "react";
import { Svg, Path, StyleSheet } from "@react-pdf/renderer/";
import getLineGroup from "../../utils/pdf/getLineGroup";
import { PdfInitialState } from "../../features/pdf/pdfSlice";
import { getPdfSlice } from "../../utils/pdf/getPdfSlice";
import { BaselineWidth } from "../../app/types";
type Props = {};

const styles = StyleSheet.create({
  svg: { position: "absolute", top: 0 },
});

export const PdfBaseLine = ({}: Props) => {
  const {
    language,
    baseLineSize,
    baseLineColor,
    baselineWidth,
  }: PdfInitialState = getPdfSlice();
  const size = baseLineSize;
  const color = baseLineColor;
  const strokeWidth = BaselineWidth[baselineWidth];
  return (
    <Svg style={styles.svg}>
      <Path
        d={getLineGroup({
          language,
          numRow: 1,
          size,
        })}
        strokeWidth={strokeWidth}
        stroke={color}
      />
    </Svg>
  );
};
