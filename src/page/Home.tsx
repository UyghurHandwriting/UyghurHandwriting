import React from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
import { useDispatch, useSelector } from "react-redux";
import { selectPdfSlice, setPdfFontSize } from "../features/pdf/pdfSlice";
type Props = {};

export function Home({}: Props) {
  const pdfSlice = useSelector(selectPdfSlice) ?? {};
  return (
    <div>
      <PdfGenerator pdfSlice={pdfSlice} />
    </div>
  );
}
