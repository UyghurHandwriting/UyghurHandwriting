import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PdfPage from "./PdfPage";
import "./PdfGenerator.scss";
import { useSelector } from "react-redux";
import {
  selectPdfRefresh,
  selectPdfShowToolBar,
} from "../../features/pdf/pdfSlice";
import { PdfDoc } from "./PdfDoc";

type Props = {};

export const PdfGenerator = ({}: Props) => {
  const refresh = useSelector(selectPdfRefresh);
  const showToolbar = useSelector(selectPdfShowToolBar);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="pdfContainer">
        <PdfDoc refresh={refresh} showToolbar={showToolbar} />
      </div>
    </div>
  );
};
