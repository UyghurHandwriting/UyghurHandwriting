import React from "react";
import "./PdfGenerator.scss";
import { useSelector } from "react-redux";
import {
  selectPdfRefresh,
  selectPdfShowToolBar,
} from "../../features/pdf/pdfSlice";
import { PdfDoc } from "./PdfDoc";
import classNames from "classnames";

type Props = { style?: React.CSSProperties; classes?: string };

export const PdfGenerator = ({ style, classes }: Props) => {
  const refresh = useSelector(selectPdfRefresh);
  const showToolbar = useSelector(selectPdfShowToolBar);
  const compClassName = classNames("pdfContainer", classes);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={compClassName} style={{ ...style }}>
        <PdfDoc refresh={refresh} showToolbar={showToolbar} />
      </div>
    </div>
  );
};
