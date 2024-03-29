import React, { Dispatch, useEffect, useRef } from "react";
import "./TextInput.scss";
import classNames from "classnames";
import { connect, useDispatch, useSelector } from "react-redux";
import { DirectionStyle, LanguageKeys } from "../../app/types";
import {
  selectPdfLanguage,
  selectPdfRefresh,
  selectPdfSubtitle1,
  selectPdfSubtitle2,
  selectPdfTitle,
  setPdfRefresh,
  setPdfSubtitle1,
  setPdfSubtitle2,
  setPdfTitle,
} from "../../features/pdf/pdfSlice";
import { getPdfTextDirection } from "../../utils/pdf/getPdfTextDirection";
import { RootState } from "../../app/store";
import {
  selectRDropLabel23,
  selectSubtitle60,
} from "../../features/language/languageSlice";

type ComponentProps = {
  componentId: string;
  classes?: string;
  placeholder?: string;
  value: string | undefined;
  hasTimeout?: boolean;
  label?: string;
};
type ComponentDispatch = {
  onChange: (prop: string) => void;
};

type Props = ComponentDispatch & ComponentProps;

export const TextInput = ({
  componentId,
  classes,
  placeholder,
  onChange,
  hasTimeout = true,
  label,
  value,
}: Props) => {
  const dispatch = useDispatch();
  const pdfLanguage: LanguageKeys = useSelector(selectPdfLanguage);
  const textDirection: DirectionStyle = getPdfTextDirection(pdfLanguage);
  const componentClassName: string = classNames("TextInputGroup", classes);
  const componentLabelClassName: string = classNames(
    "label-secondary",
    "TextInput--label"
  );
  const componentInputClassName: string = classNames(
    "TextInputInput",
    textDirection
  );
  const typingTimeout = useRef<number | undefined>(undefined);
  const refresh = useSelector(selectPdfRefresh);

  const forceUpdate = () => {
    dispatch(setPdfRefresh());
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    onChange(value);

    //reset timeout on text change
    if (hasTimeout) {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
      typingTimeout.current = window.setTimeout(forceUpdate, 3000);
    }
  };

  //clearTimeout on change of pdf.forceRefresh
  useEffect(() => {
    hasTimeout && clearTimeout(typingTimeout.current);

    return () => {
      if (hasTimeout && typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, [refresh]);

  return (
    <div className={componentClassName}>
      <label
        id={"TextInput" + componentId + "label"}
        htmlFor={"TextInput" + componentId + "input"}
        className={componentLabelClassName}
      >
        {label}
      </label>
      <input
        type="text"
        id={"TextInput" + componentId + "input"}
        name={"TextInput" + componentId}
        onChange={handleTextChange}
        value={value}
        placeholder={placeholder}
        className={componentInputClassName}
      />
    </div>
  );
};

//PdfTitleInput
export const PdfTitleInput = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const labelText = selectRDropLabel23(state);
    const value = selectPdfTitle(state);

    return {
      value: value,
      componentId: "PdfTitleInput",
      label: labelText,
      placeholder: "PDF title",
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      onChange: (value: string) => {
        dispatch(setPdfTitle(value));
      },
    };
  }
)(TextInput);

//PdfSubtitle1
export const PdfSubTitle1 = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const labelText = selectSubtitle60(state);
    const value = selectPdfSubtitle1(state);

    return {
      value: value,
      componentId: "PdfSubtitle1",
      label: labelText,
      placeholder: "PDF subtitle 1",
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      onChange: (value: string) => {
        dispatch(setPdfSubtitle1(value));
      },
    };
  }
)(TextInput);

//PdfSubtitle2
export const PdfSubTitle2 = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    const labelText = selectSubtitle60(state);
    const value = selectPdfSubtitle2(state);

    return {
      value: value,
      componentId: "PdfSubtitle2",
      label: labelText,
      placeholder: "PDF subtitle2",
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      onChange: (value: string) => {
        dispatch(setPdfSubtitle2(value));
      },
    };
  }
)(TextInput);
