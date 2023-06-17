import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PdfPage from "./PdfPage";
import "./PdfGenerator.scss";

type Props = {};

export const PdfGenerator = ({}: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="pdfContainer">
        <PDFViewer width="100%" height="100%">
          <PdfPage />
        </PDFViewer>
      </div>
    </div>
  );
};
