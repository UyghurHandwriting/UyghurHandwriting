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
  PdfLanguageOption,
} from "../Dropdown/Dropdown";
import { DownloadPdf } from "../pdf/DownloadPdf";
import {
  PdfSubTitle1,
  PdfSubTitle2,
  PdfTitleInput,
} from "../TextInput/TextInput";
import { PrintPdfBtn } from "../Button/Button";
type Props = {};

export const TextSetting = (props: Props) => {
  const baselineText = useSelector(selectRCardTitle9);
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  return (
    <>
      <div className="TextSetting--TextAreaMain--container">
        <TextAreaMain />
      </div>
      <div className="TextSetting--settings--container">
        <p className="text-md">{baselineText} </p>
        <PdfLanguageOption />
        <FontStyleOption />
        <BaselineWidthOption />
        <TextOpacityOption />
        <BaselineSizeOption />
        <PdfTitleInput />
        <PdfSubTitle1 />
        <PdfSubTitle2 />
        <div>
          <DownloadPdf />
        </div>
        <div>{!isFirefox && <PrintPdfBtn />}</div>
      </div>
    </>
  );
};
