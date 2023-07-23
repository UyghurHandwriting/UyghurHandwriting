import { connect } from "react-redux";
import {
  TextOpacityKeys,
  BaselineWidthKeys,
  DropdownOption,
  FontStyle,
  LanguageKeys,
  RowSize,
} from "../../app/types";
import React from "react";
import { RootState } from "../../app/store";
import {
  textOpacityOptions,
  baselineWidthOptions,
  fontStyleOption_uyghur,
  baselineSizeOptions,
} from "./dropdownOptions";
import { Dispatch } from "@reduxjs/toolkit";
import "./Dropdown.scss";
import {
  selectBaselineSizeOptions,
  selectBaselineWidthOptions,
  selectRCardTitle16,
  selectRDropLabel18,
  selectRDropLabel19,
  selectRDropLabel20,
  selectSiteLanguage,
  selectTextOpacityOptions,
  setLangOptionOpen,
  setSiteLanguage,
} from "../../features/language/languageSlice";
import classnames from "classnames";
import {
  setPdfTextOpacity,
  setPdfBaselineWidth,
  setPdfFontStyle,
  setPdfRefresh,
  setPdfBaselineSize,
  selectPdfLangStyle,
  selectPdfBaselineSize,
  selectPdfBaselineWidth,
  selectPdfTextOpacity,
} from "../../features/pdf/pdfSlice";

import { languageOptions } from "./dropdownOptions";
type HandleClick = (value: any) => void;
type DropdownClassName = {
  group?: string;
  label?: string;
  select?: string;
  option?: string;
};
interface ComponentProps {
  options: DropdownOption<any>[];
  className?: DropdownClassName;
  componentId: string;
  label?: string;
  size?: number;
  value?: string | number;
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
  value,
  handleClick = () => {},
}: Props) => {
  //---class names
  const groupClassName = classnames(
    componentId,
    "dropdown-group",
    className?.group
  );
  const labelClassName = classnames(
    "DropdownLabel",
    "label-secondary",
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

  const handleMouseDown = (
    element: React.MouseEvent<HTMLSelectElement, MouseEvent>
  ) => {
    const target = element.target as HTMLOptionElement;
    handleClick(target.value);
  };

  const handleChange = (element: React.ChangeEvent<HTMLSelectElement>) => {
    handleClick(element.target.value);
  };

  return (
    <div id={componentId} className={groupClassName}>
      {!!label && (
        <label
          id={(componentId = "-label")}
          htmlFor={componentId + "select"}
          className={labelClassName}
        >
          {label}
        </label>
      )}

      <select
        size={size}
        id={componentId + "-select"}
        className={selectClassName}
        onMouseDown={!!size ? handleMouseDown : () => {}}
        onChange={!size ? handleChange : (e) => {}}
        defaultValue={value}
      >
        {options.map((option) => (
          <option
            value={option.value}
            key={componentId + option.value + "key"}
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
    const value = selectSiteLanguage(state);
    return {
      options: languageOptions,
      className: {
        group: "langueOptionStyle",
        select: "no-padding langueOptionSelect",
      },
      componentId: "LanguageOptions",
      size: languageOptions.length,
      value,
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: (value: LanguageKeys) => {
        dispatch(setLangOptionOpen());
        dispatch(setSiteLanguage(value));
      },
    };
  }
)(Dropdown);

export const FontStyleOption = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const labelText = selectRCardTitle16(state);
    const value = selectPdfLangStyle(state);
    return {
      options: fontStyleOption_uyghur,
      className: { group: "FontStyleOptionStyle" },
      componentId: "FontStyleOption",
      label: labelText,
      value,
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: (value: FontStyle) => {
        dispatch(setPdfFontStyle(value));
        dispatch(setPdfRefresh());
      },
    };
  }
)(Dropdown);

//BaseLineWidthOption
export const BaselineWidthOption = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const labelText = selectRDropLabel19(state);
    const value = selectPdfBaselineWidth(state);
    return {
      options: selectBaselineWidthOptions(state),
      componentId: "BaselineWidthOption",
      label: labelText,
      value,
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: (value: BaselineWidthKeys) => {
        dispatch(setPdfBaselineWidth(value));
        dispatch(setPdfRefresh());
      },
    };
  }
)(Dropdown);

//TextOpacity
export const TextOpacityOption = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const labelText = selectRDropLabel20(state);
    const value = selectPdfTextOpacity(state);
    return {
      options: selectTextOpacityOptions(state),
      componentId: "TextOpacityOption",
      label: labelText,
      value,
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: (value: TextOpacityKeys) => {
        dispatch(setPdfTextOpacity(value));
        dispatch(setPdfRefresh());
      },
    };
  }
)(Dropdown);

//TextOpacity
export const BaselineSizeOption = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const value = selectPdfBaselineSize(state);
    const labelText = selectRDropLabel18(state);
    return {
      options: selectBaselineSizeOptions(state),
      componentId: "BaselineSizeOption",
      label: labelText,
      value,
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: (value: RowSize) => {
        dispatch(setPdfBaselineSize(value));
        dispatch(setPdfRefresh());
      },
    };
  }
)(Dropdown);
