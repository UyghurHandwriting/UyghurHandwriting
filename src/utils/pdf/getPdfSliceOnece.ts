import { PdfInitialState } from "../../features/pdf/pdfSlice";
import { getPdfSlice } from "./getPdfSlice";

export const getPdfSliceOnce = (() => {
  let pdfSliceData: Readonly<PdfInitialState> | null = null;

  return () => {
    if (!pdfSliceData) {
      pdfSliceData = getPdfSlice();
    }
    return pdfSliceData;
  };
})();
