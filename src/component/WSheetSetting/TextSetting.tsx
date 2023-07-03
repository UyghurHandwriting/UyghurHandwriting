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
type Props = {};

export const TextSetting = (props: Props) => {
  const baselineText = useSelector(selectRCardTitle9);
  return (
    <>
      <TextAreaMain />
      <div className="">
        <p className="text-md">{baselineText} </p>
        <FontStyleOption />
        <BaselineWidthOption />
        <TextOpacityOption />
        <BaselineSizeOption />
        <PdfTitleInput />
        <DownloadPdf />
      </div>
    </>
  );
};
