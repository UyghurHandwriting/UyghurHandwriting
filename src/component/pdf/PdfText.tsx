import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer/";
import { PdfBaseLine } from "./PdfBaseLine";
import { getPdfSlice } from "../../utils/pdf/getPdfSlice";
import { splitText } from "../../utils/pdf/splitText";
import { getPdfFontSize } from "../../utils/pdf/getPdfFontSize";
import { getStyleLineTop } from "../../utils/pdf/getStyleLineTop";
import { getRowGap } from "../../utils/pdf/getRowGap";
import { getTextChunkSize } from "../../utils/pdf/getTextChunkSize";
type Props = {};

const styles = StyleSheet.create({
  text: {
    textAlign: "right",
    direction: "rtl",
    fontFamily: "Uyghur1",
    position: "relative",
  },
});

export const PdfText = ({}: Props) => {
  const { baseLineSize, text: pdfText } = useMemo(() => getPdfSlice(), []);
  const fontSize = getPdfFontSize(baseLineSize);
  const top = getStyleLineTop(baseLineSize);
  const rowGap = getRowGap(baseLineSize);
  const chunkSize = getTextChunkSize(baseLineSize);
  const text = splitText({ text: pdfText, chunkSize });

  return (
    <>
      {text.map((str, index) => {
        return (
          <View
            key={"pdfText-container" + index}
            style={{ marginBottom: rowGap }}
          >
            <PdfBaseLine />
            <Text style={{ ...styles.text, fontSize, top }}>{str}</Text>
          </View>
        );
      })}
    </>
  );
};
