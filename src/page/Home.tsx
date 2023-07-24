import React, { useEffect } from "react";
import { PdfGenerator } from "../component/pdf/PdfGenerator";
import { VerticalTwoColumn } from "../component/layout/VerticalTwoColumn/VerticalTwoColumn";
import { useDispatch } from "react-redux";
import { setPdfRefresh } from "../features/pdf/pdfSlice";
import { Header } from "../component/layout/Header/Header";
import { WorksheetSettings } from "../component/TabCard/TabCard";
import "./Home.scss";
import Footer from "../component/layout/Footer/Footer";
import { TextSetting } from "../component/WSheetSetting/TextSetting";
type Props = {};

export function Home({}: Props) {
  return (
    <div className="">
      <Header />
      <div className="HomePage--container">
        <VerticalTwoColumn>
          <div className="HomePage-pdfGenerator--container">
            <PdfGenerator />
          </div>
          <div className="HomePage-worksheetSettings--container">
            {/* <WorksheetSettings /> */}
            <TextSetting />
          </div>
        </VerticalTwoColumn>
      </div>
      <Footer />
    </div>
  );
}
