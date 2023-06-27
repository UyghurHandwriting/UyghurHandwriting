import React, { useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";
import PdfPage from "./PdfPage";
import { useSelector } from "react-redux";
import { selectPdfRefresh } from "../../features/pdf/pdfSlice";
import { DownloadPdfBtn } from "../Button/Button";
import { selectRBtn14 } from "../../features/language/languageSlice";

export const DownloadPdf = () => {
  const refresh = useSelector(selectPdfRefresh);
  const downloadText = useSelector(selectRBtn14);

  //---pdf force update on 'refresh'
  const [instance, updateInstance] = usePDF({
    document: refresh ? <PdfPage key={1} /> : <PdfPage key={2} />,
  });
  useEffect(updateInstance, [refresh]);

  return (
    <div>
      <DownloadPdfBtn>
        <a
          className="no-default-a"
          href={instance.url ?? undefined}
          download="uzhet.pdf"
        >
          {downloadText}
        </a>
      </DownloadPdfBtn>
    </div>
  );
};
