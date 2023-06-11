import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
  },
});
function PdfFooter() {
  return (
    <View style={styles.footer}>
      <Text>Footer Content</Text>
    </View>
  );
}

export default PdfFooter;
