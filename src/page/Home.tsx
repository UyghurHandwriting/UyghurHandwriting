import React from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
import { VerticalTwoColumn } from "../component/layout/VerticalTwoColumn/VerticalTwoColumn";
import { useDispatch } from "react-redux";
import { setPdfRefresh } from "../features/pdf/pdfSlice";
import { Header } from "../component/layout/Header/Header";
import { WorksheetSettings } from "../component/TabCard/TabCard";
type Props = {};

export function Home({}: Props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setPdfRefresh());
  };

  return (
    <div style={{ marginTop: "8rem" }}>
      <Header />
      <VerticalTwoColumn>
        <PdfGenerator />
        <div className="">
          <WorksheetSettings />
        </div>
      </VerticalTwoColumn>
      <button onClick={handleClick}>Preview PDF</button>
    </div>
  );
}
