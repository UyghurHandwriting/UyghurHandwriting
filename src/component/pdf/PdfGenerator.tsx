import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PdfPage from "./PdfPage";
import { PdfInitialState } from "../../features/pdf/pdfSlice";

type Props = { width?: string; height?: string; pdfSlice: PdfInitialState };

export const PdfGenerator = ({
  width = "500",
  height = "600",
  pdfSlice,
}: Props) => {
  return (
    <>
      <PDFViewer width={width} height={height}>
        <PdfPage pdfSlice={pdfSlice} />
      </PDFViewer>
    </>
  );
};
