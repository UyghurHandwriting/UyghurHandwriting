import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer/";
import { PdfBaseLine } from "./PdfBaseLine";
import { getPdfSlice } from "../../utils/pdf/getPdfSlice";
import { splitText } from "../../utils/pdf/splitText";
type Props = {};

const styles = StyleSheet.create({
  text: {
    textAlign: "right",
    direction: "rtl",
    fontFamily: "Uyghur1",
    fontSize: 55,
    position: "relative",
    top: -13.5,
  },
});

export const PdfText = ({}: Props) => {
  const pdfSlice = useMemo(() => getPdfSlice(), []);
  const text = splitText({ text: pdfSlice.text, chunkSize: 25 });
  const baseLineGap: number = pdfSlice.baseLineGap ?? 5;
  const fontSize = pdfSlice.fontSize;

  return (
    <>
      {text.map((str, index) => {
        return (
          <View
            key={"pdfText-container" + index}
            style={{ marginBottom: baseLineGap }}
          >
            <PdfBaseLine />
            <Text style={{ ...styles.text, fontSize: fontSize }}>{str}</Text>
          </View>
        );
      })}
    </>
  );
};
