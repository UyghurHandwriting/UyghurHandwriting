import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { getPdfSlice } from "../../utils/pdf/getPdfSlice";
import { trim } from "lodash";

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
  const { title, subTitle1, subTitle2, languageStyle } = getPdfSlice();
  const hasSubTitle1 = !!subTitle1 && trim(subTitle1) !== "";
  const hasSubTitle2 = !!subTitle2 && trim(subTitle2) !== "";
  const fontFamily = languageStyle.label;

  return (
    <View debug={false} fixed={true} style={styles.header}>
      {title && (
        <Text style={{ ...styles.headerText, fontFamily }}>{title}</Text>
      )}
      <View debug={false} style={styles.subHeaderContainer}>
        {hasSubTitle1 && (
          <View style={styles.subHeaderGroup}>
            <Text debug={false} style={{ ...styles.subHeaderText, fontFamily }}>
              {subTitle1}
            </Text>
            <View
              style={{ borderBottom: "1px solid black", width: "100px" }}
            ></View>
          </View>
        )}

        {hasSubTitle2 && (
          <View
            debug={false}
            style={{ ...styles.subHeaderGroup, marginLeft: "auto" }}
          >
            <Text debug={false} style={{ ...styles.subHeaderText, fontFamily }}>
              {subTitle2}
            </Text>
            <View
              style={{ borderBottom: "1px solid black", width: "100px" }}
            ></View>
          </View>
        )}
      </View>
    </View>
  );
}

export default PdfHeader;
