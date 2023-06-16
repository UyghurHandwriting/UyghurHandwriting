import React from "react";
import { Page, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import uyghur1 from "../../app/font/uyghur/ukijelipbe.ttf";
import PdfHeader from "./PdfHeader";
import { PdfText } from "./PdfText";
import PdfFooter from "./PdfFooter";

Font.register({
  family: "Uyghur1",
  src: uyghur1,
  direction: "rtl",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 25,
  },
  main: {
    flexDirection: "column",
    flexGrow: 1,
  },
});

type Props = {};

function PdfPage({}: Props) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PdfHeader />
        <View style={styles.main}>
          <PdfText />
        </View>
        <PdfFooter />
      </Page>
    </Document>
  );
}

export default PdfPage;

/**
 *
 * 1. Header :calculate space percentage
 * 2. Footer :calculate space percentage
 * 3. splitText function: dynamically split words
 * 4. PDF slice populate
 * 5. languages
 * 6. LOGO
 * 7. web footer and other UI components
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * XS:
 * font size: 30
 * marginBottom: 16.5
 * svg top: 8.5
 *
 * NOTE: might need to adjust H and T dot position for XS
 *
 *
 * SM:
 * font size: 37
 * margin bottom: 20.5
 * svg top: 10
 *
 *
 * MD:
 * font size: 46
 * margin bottom:31
 * svg top: 10
 *
 *
 * LG:
 * font size: 55
 * margin bottom:43
 * svg top: 13.5
 *
 *
 * * LG:
 * font size: 55
 * margin bottom:43
 * svg top: 13.5
 *
 * *
 * XL:
 * font size: 55
 * margin bottom:43
 * top: -19.5,
 *
 *
 */

//----------- Baseline sample -------
//
// <Svg style={{ position: "absolute", top: 100 }}>
// <Path
//   d={getLineGroup({
//     language: "uyghur",
//     numRow: 1,
//     size: "SM",
//   })}
//   strokeWidth={0.4}
//   stroke={"rgba(103,102,102,255)"}
// />
// </Svg>
// <Svg style={{ position: "absolute", top: 200 }}>
// <Path
//   d={getLineGroup({ language: "uyghur", numRow: 1, size: "MD" })}
//   strokeWidth={0.4}
//   stroke={"rgba(103,102,102,255)"}
// />
// </Svg>
// <Svg style={{ position: "absolute", top: 340 }}>
// <Path
//   d={getLineGroup({ language: "uyghur", numRow: 1, size: "LG" })}
//   strokeWidth={0.4}
//   stroke={"rgba(103,102,102,255)"}
// />
// </Svg>
// <Svg style={{ position: "absolute", top: 480 }}>
// <Path
//   d={getLineGroup({ language: "uyghur", numRow: 1, size: "XL" })}
//   strokeWidth={0.4}
//   stroke={"rgba(103,102,102,255)"}
// />
// </Svg>
