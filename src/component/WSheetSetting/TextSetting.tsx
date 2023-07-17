import React from "react";
import { TextAreaMain } from "../TextArea";
import "./TextSetting.scss";
import { useSelector } from "react-redux";
import { selectRCardTitle9 } from "../../features/language/languageSlice";
import {
  TextOpacityOption,
  BaselineWidthOption,
  FontStyleOption,
  BaselineSizeOption,
} from "../Dropdown/Dropdown";
import { DownloadPdf } from "../pdf/DownloadPdf";
import { PdfTitleInput } from "../TextInput/TextInput";
import { PrintPdfBtn } from "../Button/Button";
type Props = {};

export const TextSetting = (props: Props) => {
  const baselineText = useSelector(selectRCardTitle9);
  return (
    <>
      <div className="TextSetting--TextAreaMain--container">
        <TextAreaMain />
      </div>
      <div className="TextSetting--settings--container">
        <p className="text-md">{baselineText} </p>
        <FontStyleOption />
        <BaselineWidthOption />
        <TextOpacityOption />
        <BaselineSizeOption />
        <PdfTitleInput />
        <div>
          <DownloadPdf />
        </div>
        <div>
          <PrintPdfBtn />
        </div>
      </div>
    </>
  );
};
