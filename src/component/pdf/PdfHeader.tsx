import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
});

function PdfHeader() {
  return (
    <View style={styles.header}>
      <Text>Header Content</Text>
    </View>
  );
}

export default PdfHeader;
