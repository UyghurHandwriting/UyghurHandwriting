import React from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
import { VerticalTwoColumn } from "../component/layout/VerticalTwoColumn/VerticalTwoColumn";
import { TextAreaMain } from "../component/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { selectPdfRefresh, setPdfRefresh } from "../features/pdf/pdfSlice";
import { Header } from "../component/layout/Header/Header";
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
          <TextAreaMain />
        </div>
      </VerticalTwoColumn>
      <button onClick={handleClick}>Preview PDF</button>
    </div>
  );
}
