import { store } from "../../app/store";
import { PdfInitialState } from "../../features/pdf/pdfSlice";

/**
 * Helper to get pdfSlice form root store. we weren't able to use
 * redux UseContext inside PdfViewer from react-pdf library so
 * this function is needed to get the slice directly from store.
 * @returns redux.store.pdf
 */
export const getPdfSlice = (): Readonly<PdfInitialState> => {
  const pdfSlice = JSON.parse(
    JSON.stringify(store.getState().pdf)
  ) as PdfInitialState;
  return pdfSlice;
};
