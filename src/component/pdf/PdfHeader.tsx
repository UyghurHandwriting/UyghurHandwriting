import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getPdfSlice } from "../../utils/pdf/getPdfSlice";
import { trim } from "lodash";
import { textDirection2align } from "../../utils/pdf/textDirection2align";
import { getPdfTextDirection } from "../../utils/pdf/getPdfTextDirection";

const styles = StyleSheet.create({
  header: {
    height: "45px",
  },
  headerText: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  subHeaderContainer: {
    display: "flex",
    flexDirection: "row",
  },
  subHeaderGroup: {
    display: "flex",
    flexDirection: "row",
  },
  subHeaderText: {
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "4px",
    marginBottom: "4px",
    marginRight: "4px",
  },
});

function PdfHeader() {
  const { title, subTitle1, subTitle2, languageStyle, language } =
    getPdfSlice();
  const hasSubTitle1 = !!subTitle1 && trim(subTitle1) !== "";
  const hasSubTitle2 = !!subTitle2 && trim(subTitle2) !== "";
  const fontFamily = languageStyle.label;
  const textAlign = textDirection2align(getPdfTextDirection(language));

  return (
    <View debug={false} fixed={true} style={styles.header}>
      {title && (
        <Text style={{ ...styles.headerText, fontFamily, textAlign }}>
          {title}
        </Text>
      )}
      <View debug={false} style={styles.subHeaderContainer}>
        {hasSubTitle1 && (
          <View style={styles.subHeaderGroup}>
            {SubTitleBody(subTitle1, textAlign, fontFamily)}
          </View>
        )}

        {hasSubTitle2 && (
          <View style={{ ...styles.subHeaderGroup, marginLeft: "auto" }}>
            {SubTitleBody(subTitle2, textAlign, fontFamily)}
          </View>
        )}
      </View>
    </View>
  );
}

export default PdfHeader;

//Definition: This function decides whether the label in PDF header should be on the right or left based on the language
//Returns:    component that has label and underline
function SubTitleBody(
  title: string,
  textAlign: "left" | "right" | "center" | "justify" | undefined,
  fontFamily:
    | "UKIJElipbe"
    | "UKIJElipbeChekitlik"
    | "AlpEkran"
    | "YsabeauInfant"
) {
  return (
    <>
      {/* Label on the right, line on left */}
      {textAlign === "right" && (
        <>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              width: 100,
            }}
          ></View>
          <Text style={{ ...styles.headerText, fontFamily, textAlign }}>
            {title}
          </Text>
        </>
      )}

      {/* Label on the left, line on right */}
      {textAlign === "left" && (
        <>
          <Text style={{ ...styles.headerText, fontFamily, textAlign }}>
            {title}
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              width: 100,
            }}
          ></View>
        </>
      )}
    </>
  );
}
