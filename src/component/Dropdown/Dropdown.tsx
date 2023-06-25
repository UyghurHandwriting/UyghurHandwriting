import { connect } from "react-redux";
import { DropdownOption, LanguageKeys } from "../../app/types";
import React from "react";
import { RootState } from "../../app/store";
import { fontStyleOption_uyghur, langueOptions } from "./dropdownOptions";
import { Dispatch } from "@reduxjs/toolkit";
import "./Dropdown.scss";
import {
  selectRCardTitle16,
  setLangOptionOpen,
  setSiteLanguage,
} from "../../features/language/languageSlice";
import classnames from "classnames";

type HandleClick = (value: any) => void;
type DropdownClassName = {
  group?: string;
  label?: string;
  select?: string;
  option?: string;
};
interface ComponentProps {
  options: DropdownOption[];
  className?: DropdownClassName;
  componentId: string;
  label?: string;
  size?: number;
}
interface ComponentDispatch {
  handleClick?: HandleClick;
}
type Props = ComponentProps & ComponentDispatch;

export const Dropdown = ({
  className,
  options,
  componentId,
  label,
  size,
  handleClick = () => {},
}: Props) => {
  //
  //---class names
  const groupClassName = classnames(
    componentId,
    "dropdown-group",
    className?.group
  );
  const labelClassName = classnames(
    "DropdownLabel",
    componentId + "label",
    className?.label
  );
  const selectClassName = classnames(
    "DropdownSelect",
    componentId + "select",
    "pointer",
    className?.select
  );
  const optionClassName = classnames(
    "DropdownOption",
    componentId + "option",
    className?.option
  );

  return (
    <div id={componentId} className={groupClassName}>
      <label
        id={(componentId = "-label")}
        htmlFor={componentId + "select"}
        className={labelClassName}
      >
        {label}
      </label>

      <select
        size={size}
        id={componentId + "-select"}
        className={selectClassName}
        onChange={(e) => handleClick(e.target.value)}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={option.value}
            className={optionClassName}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const LanguageOption = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    return {
      options: langueOptions,
      className: { group: "langueOptionStyle", select: "no-padding" },
      componentId: "LanguageOptions",
      size: langueOptions.length,
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: (value: LanguageKeys) => {
        dispatch(setSiteLanguage(value));
        dispatch(setLangOptionOpen());
      },
    };
  }
)(Dropdown);

//BaseLineWidthOption
export const FontStyleOption = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const labelText = selectRCardTitle16(state);
    return {
      options: fontStyleOption_uyghur,
      className: { group: "FontStyleOptionStyle" },
      componentId: "FontStyleOption",
      label: labelText,
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: (value: LanguageKeys) => {
        // dispatch(setSiteLanguage(value));
        // dispatch(setLangOptionOpen());
      },
    };
  }
)(Dropdown);
