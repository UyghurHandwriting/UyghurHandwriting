import React from "react";
import {
  Page,
  View,
  Document,
  StyleSheet,
  Font,
  Svg,
  Path,
} from "@react-pdf/renderer";
import { PdfInitialState } from "../../features/pdf/pdfSlice";

import uyghur1 from "../../app/font/uyghur/ukijelipbe.ttf";
import getLineGroup from "../../utils/pdf/getLineGroup";
import PdfHeader from "./PdfHeader";
import { PdfText } from "./PdfText";

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

  text: {
    textAlign: "right",
    direction: "rtl",
    fontFamily: "Uyghur1",
    marginBottom: 16.5,
  },
  line: { borderTop: "1px dashed red", width: "700" },
  lineContainer: {},
  dashedLine: {
    position: "absolute",
    left: 0,
    top: 0,
  },
});

type Props = {
  pdfSlice: PdfInitialState;
};

function PdfPage({ pdfSlice }: Props) {
  const text: string =
    "  خ خ خ خ خ خ خ ختى   ئىلگىرى خ خ خ خ خ خ خ خ ختى ئىلگىرى رەھبەرلىك باسق خ خ خ خ خ خ خ خ خ خ خ خ خ خ خ تۈركىيەنىڭ يېڭى ھۆكۈمەت كابىنېتىنىڭ بۇنىڭدىن كېيىنكى ئىچكى سىياسىتى، بولۇپمۇ ئىقتىسادىي سىياسىتى تۈركىيەلىكلەر ئەڭ كۆڭۈل بۆلىدىغان مەسىلە، ئەمما بۇ قېتىمقى سايلامغا ناھايىتى كۆڭۈل بۆلگەن ئۇيغۇرلارنىڭ كۆڭۈل بۆلىدىغىنى يېڭى كابىنېتنىڭ خىتاي ۋە ئۇيغۇرلار مەسىلىسىگە قانداق مۇئامىلە تۇتۇشىدۇر. ئەلۋەتتە، ئۇيغۇرلار تۈركىيەنىڭمۇ خۇددى ئامېرىكا ۋە باشقا غەرب دېموكراتىك دۆلەتلىرىدەك خىتاينىڭ ئۇيغۇرلارغا يۈرگۈزۈۋاتقانلىرىنى ئىرقىي قىرغىنچىلىق ۋە ئىنسانىيەتكە قارشى جىنايەت دەپ بېكىتىشىنى ئۈمىد قىلىدۇ. لېكىن تۈركىيە ھۆكۈمىتى ئىلگىرى رەھبەرلىك باسقۇچىدا بۇنداق قەدەم تاشلىمىدى. خ خ خ خ خ خ خ خ خ ختى ئىلگىرى رەھبەرلى ك باسق";

  /**
   * TODO: we should build a helper function that:
   * 1. splits these lines in best ways possible
   * 2. consider spaces
   * 3. consider words
   * 4. consider length
   */

  const splitText = (text: string, chunkSize: number): string[] => {
    const regex = new RegExp(`.{1,${chunkSize}}`, "g");
    return text.match(regex) || [];
  };

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <PdfHeader />
        <View style={styles.main}>
          <View style={{}}>
            <Svg debug={false} style={{ position: "absolute", top: 13.5 }}>
              <Path
                d={getLineGroup({ language: "uyghur", numRow: 6, size: "LG" })}
                strokeWidth={0.4}
                stroke={"rgba(103,102,102,255)"}
              />
            </Svg>
            <View style={{}}>
              <PdfText text={splitText(text, 25)} />
            </View>
          </View>
        </View>

        {/* <PdfFooter /> */}
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
