import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PdfPage from "./PdfPage";
import "./PdfGenerator.scss";
import { useSelector } from "react-redux";
import {
  selectPdfRefresh,
  selectPdfShowToolBar,
} from "../../features/pdf/pdfSlice";

type Props = {};

export const PdfGenerator = ({}: Props) => {
  const refresh = useSelector(selectPdfRefresh);
  const showToolbar = useSelector(selectPdfShowToolBar);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="pdfContainer">
        <PDFViewer showToolbar={showToolbar} width="100%" height="100%">
          {/* 
          since react-pdf doesn't support useContext, we are doing a force-refresh this way */}
          {refresh ? <PdfPage key={1} /> : <PdfPage key={2} />}
        </PDFViewer>
      </div>
    </div>
  );
};
