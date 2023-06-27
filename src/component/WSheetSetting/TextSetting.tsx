import React from "react";
import { TextAreaMain } from "../TextArea";
import "./TextSetting.scss";
import { useSelector } from "react-redux";
import { selectRCardTitle9 } from "../../features/language/languageSlice";
import { FontStyleOption } from "../Dropdown/Dropdown";
type Props = {};

export const TextSetting = (props: Props) => {
  const baselineText = useSelector(selectRCardTitle9);
  return (
    <>
      <TextAreaMain />
      <div className="">
        <p className="text-md">{baselineText} </p>
        <FontStyleOption />
      </div>
    </>
  );
};
