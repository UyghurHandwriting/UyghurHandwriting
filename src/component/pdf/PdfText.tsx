import { isArray } from "lodash";
import React from "react";
import { StyleSheet, Text } from "@react-pdf/renderer/";
type Props = { text: string | string[] };

const styles = StyleSheet.create({
  text: {
    textAlign: "right",
    direction: "rtl",
    fontFamily: "Uyghur1",
    marginBottom: 43,
    fontSize: 55,
  },
});

export const PdfText = ({ text }: Props) => {
  if (!isArray(text)) return <Text style={styles.text}>{text}</Text>;

  return (
    <>
      {text.map((str, index) => {
        return (
          <Text style={styles.text} key={"pdfText-row" + index}>
            {str}
          </Text>
        );
      })}
    </>
  );
};
