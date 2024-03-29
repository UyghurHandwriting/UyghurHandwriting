import React, { useEffect, useRef } from "react";
import "./TextAreaMain.scss";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { DirectionStyle, LanguageKeys } from "../../app/types";
import {
  selectPdfLanguage,
  selectPdfRefresh,
  selectPdfText,
  setPdfRefresh,
  setPdfText,
} from "../../features/pdf/pdfSlice";
import { getPdfTextDirection } from "../../utils/pdf/getPdfTextDirection";
import { isUndefined } from "lodash";
import { getSamplePdfText } from "../../utils/pdf/getSamplePdfText";

type Props = {};

export const TextAreaMain = (props: Props) => {
  const dispatch = useDispatch();
  const pdfLanguage: LanguageKeys = useSelector(selectPdfLanguage);
  const textDirection: DirectionStyle = getPdfTextDirection(pdfLanguage);
  const componentClassName: string = classNames("textAreaMain", textDirection);
  const textValue = (() => {
    const text = useSelector(selectPdfText);
    if (isUndefined(text)) {
      dispatch(setPdfText(getSamplePdfText(pdfLanguage)));
    }
    return text;
  })();
  const typingTimeout = useRef<number | undefined>(undefined);
  const refresh = useSelector(selectPdfRefresh);

  const forceUpdate = () => {
    dispatch(setPdfRefresh());
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value: string = event.target.value;
    dispatch(setPdfText(value));

    //reset timeout on text change
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    typingTimeout.current = window.setTimeout(forceUpdate, 3000);
  };

  //clearTimeout on change of pdf.forceRefresh
  useEffect(() => {
    clearTimeout(typingTimeout.current);

    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
    };
  }, [refresh]);

  return (
    <textarea
      value={textValue}
      //TODO: maybe spell check is only false when it is not english
      spellCheck="false"
      onChange={handleTextChange}
      className={componentClassName}
    />
  );
};
