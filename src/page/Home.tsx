import React from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
import { VerticalTwoColumn } from "../component/layout/VerticalTwoColumn/VerticalTwoColumn";
import { TextAreaMain } from "../component/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { selectPdfRefresh, setPdfRefresh } from "../features/pdf/pdfSlice";
type Props = {};

export function Home({}: Props) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setPdfRefresh());
  };

  return (
    <div>
      <VerticalTwoColumn>
        <>
          <PdfGenerator />
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatum, ut ipsam laborum, nihil deserunt molestiae debitis sed
            voluptate quod nisi et, nulla asperiores. Quibusdam minima esse
            doloribus eius, accusamus doloremque? <TextAreaMain />
          </div>
        </>
      </VerticalTwoColumn>
      <button onClick={handleClick}>Preview PDF</button>
    </div>
  );
}
