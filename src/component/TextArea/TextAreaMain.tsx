import React from "react";
import "./TextAreaMain.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { DirectionStyle, LanguageKeys } from "../../app/types";
import {
  selectPdfLanguage,
  selectPdfText,
  setPdfText,
} from "../../features/pdf/pdfSlice";
import { getPdfTextDirection } from "../../utils/pdf/getPdfTextDirection";
type Props = {};

export const TextAreaMain = (props: Props) => {
  const dispatch = useDispatch();
  const pdfLanguage: LanguageKeys = useSelector(selectPdfLanguage);
  const textDirection: DirectionStyle = getPdfTextDirection(pdfLanguage);
  const componentClassName: string = classNames("textAreaMain", textDirection);
  const textValue = useSelector(selectPdfText);
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = event.target.value;
    dispatch(setPdfText(value));
  };

  return (
    <textarea
      value={textValue}
      onChange={handleTextChange}
      className={componentClassName}
    />
  );
};
