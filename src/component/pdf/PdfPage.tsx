import React from "react";
import { Page, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import PdfHeader from "./PdfHeader";
import { PdfText } from "./PdfText";
import PdfFooter from "./PdfFooter";
import ukijelibech from "../../app/font/uyghur/ukijelipbech.ttf";
import ukijelipbe from "../../app/font/uyghur/ukijelipbe.ttf";
import ysabeau_infant from "../../app/font/english/YsabeauInfant-VariableFont_wght.ttf";
import elp from "../../app/font/uyghur/alp.ttf";
import { DropdownOption, FontStyleKeys } from "../../app/types";

const fontRegisterOpt: DropdownOption<any, FontStyleKeys>[] = [
  {
    value: ukijelibech,
    label: "UKIJElipbeChekitlik",
  },
  {
    value: ukijelipbe,
    label: "UKIJElipbe",
  },
  {
    value: elp,
    label: "AlpEkran",
  },
  {
    value: ysabeau_infant,
    label: "YsabeauInfant",
  },
];

fontRegisterOpt.forEach((font) => {
  Font.register({
    family: font.label,
    src: font.value,
    direction: "rtl",
  });
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
        {/* <PdfFooter /> */}
      </Page>
    </Document>
  );
}

export default PdfPage;
