import React from "react";
import { Svg, Path, StyleSheet } from "@react-pdf/renderer/";
import getLineGroup from "../../utils/pdf/getLineGroup";
import { PdfInitialState } from "../../features/pdf/pdfSlice";
import { getPdfSlice } from "../../utils/pdf/getPdfSlice";

type Props = {};

const styles = StyleSheet.create({
  svg: { position: "absolute", top: 0 },
});

export const PdfBaseLine = ({}: Props) => {
  const pdfSlice: PdfInitialState = getPdfSlice();
  const language = pdfSlice.language;
  const size = pdfSlice.baseLineSize;
  const color = pdfSlice.baseLineColor;
  const strokeWidth = pdfSlice.baselineWidth;
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
