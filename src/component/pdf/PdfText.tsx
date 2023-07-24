import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer/";
import { PdfBaseLine } from "./PdfBaseLine";
import { getPdfSlice } from "../../utils/pdf/getPdfSlice";
import { splitText } from "../../utils/pdf/splitText";
import { getPdfFontSize } from "../../utils/pdf/getPdfFontSize";
import { getStyleLineTop } from "../../utils/pdf/getStyleLineTop";
import { getRowGap } from "../../utils/pdf/getRowGap";
import { getTextChunkSize } from "../../utils/pdf/getTextChunkSize";
import { TextOpacity } from "../../app/types";
import { getPdfTextDirection } from "../../utils/pdf/getPdfTextDirection";
import { textDirection2align } from "../../utils/pdf/textDirection2align";
import { toString } from "lodash";
type Props = {};

const styles = StyleSheet.create({
  text: {
    textAlign: "right",
    direction: "rtl",
    position: "relative",
    paddingRight: "8px",
  },
});

export const PdfText = ({}: Props) => {
  const {
    baseLineSize,
    text: pdfText,
    languageStyle,
    textOpacity,
    language,
  } = useMemo(() => getPdfSlice(), []);
  const fontSize = getPdfFontSize(baseLineSize);
  const top = getStyleLineTop(baseLineSize);
  const rowGap = getRowGap(baseLineSize);
  const chunkSize = getTextChunkSize(baseLineSize);
  const text = splitText({ text: toString(pdfText), chunkSize });
  const fontFamily = languageStyle.label;
  const textAlign = textDirection2align(getPdfTextDirection(language));

  return (
    <>
      {text.map((str, index) => {
        return (
          <View
            key={"pdfText-container" + index}
            style={{ marginBottom: rowGap }}
          >
            <PdfBaseLine />
            <Text
              style={{
                ...styles.text,
                fontSize,
                textAlign,
                top,
                fontFamily,
                opacity: TextOpacity[textOpacity],
              }}
            >
              {str}
            </Text>
          </View>
        );
      })}
    </>
  );
};
