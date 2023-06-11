import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PdfPage from "./PdfPage";

type Props = { width?: string; height?: string };

export const PdfGenerator = ({ width = "500", height = "600" }: Props) => {
  return (
    <>
      <PDFViewer width={width} height={height}>
        <PdfPage />
      </PDFViewer>
    </>
  );
};
