import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    fontSize: 12,
    /* marginBottom: 20, */
    textAlign: 'center',
    color: 'black',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    rowGap: 2,
  },
  line: {
    flexDirection: "row",
    flex: 1,
    padding: 2,
  },
  label: {
    marginRight: 10,
  },
  value: {
    borderBottom: 1,
    flexGrow: 1,
  },
  headerText: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: 'center',
    justifyContent: 'center', // Satır bazında ortalanma

    marginBottom:12
  },
});

function PdfHeader() {
  return (
    <>
      <View debug={true}>
        <View style={styles.headerText}>
          <Text>Header:</Text>
        </View>
        <View fixed style={styles.header}>
          <View style={styles.line}>
            <View style={styles.label}>
              <Text>Name:</Text>
            </View>
            <View style={styles.value}>
              <Text> </Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.label}>
              <Text>Class:</Text>
            </View>
            <View style={styles.value}>
              <Text> </Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.label}>
              <Text>Date:</Text>
            </View>
            <View style={styles.value}>
              <Text> </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default PdfHeader;
