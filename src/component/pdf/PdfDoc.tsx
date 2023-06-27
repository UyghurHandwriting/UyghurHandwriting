import { PDFViewer } from "@react-pdf/renderer";
import React from "react";
import PdfPage from "./PdfPage";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import {
  selectPdfRefresh,
  selectPdfShowToolBar,
} from "../../features/pdf/pdfSlice";

type Props = { refresh?: boolean; showToolbar?: boolean };

export const PdfDoc = ({ refresh = false, showToolbar = false }: Props) => {
  return (
    <PDFViewer showToolbar={showToolbar} width="100%" height="100%">
      {/* 
          since react-pdf doesn't support useContext, we are doing a force-refresh this way */}
      {refresh ? <PdfPage key={1} /> : <PdfPage key={2} />}
    </PDFViewer>
  );
};
