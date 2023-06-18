import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    /* position: 'absolute',
    fontSize: 12,
    bottom: 16,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'black', */
    fontSize: 12,
  },
  italicText: {
    fontStyle: "italic",
  },
});


function PdfFooter() {
  return (
    <View fixed style={styles.footer} debug={true}>
      <Text  style={styles.italicText}>
        Footer Content
      </Text>
    </View>
  );
}

export default PdfFooter;
