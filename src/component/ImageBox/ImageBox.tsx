import React, { CSSProperties } from "react";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { Dispatch } from "@reduxjs/toolkit";
import { languagesIcon } from "../../app/img";
import "./ImageBox.scss";
import { setLangOptionOpen } from "../../features/language/languageSlice";
interface ComponentProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
}
interface ComponentDispatch {
  handleClick?: (prop?: any) => void;
}
type Props = ComponentProps & ComponentDispatch;

export const ImageBox = ({
  src,
  alt,
  className,
  style = {},
  handleClick = () => {},
}: Props) => {
  const handleImgClick = () => {
    handleClick();
  };

  return (
    <div className="ImgBox-container">
      <img
        onClick={handleImgClick}
        src={src}
        alt={alt}
        className={className}
        style={style}
      />
    </div>
  );
};

export const LanguageIcon = connect(
  //-----mapProps
  (state: RootState, ownProps: {}): ComponentProps => {
    return {
      src: languagesIcon,
      alt: "site languages",
      className: "LanguageIconImage pointer",
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      handleClick: () => {
        dispatch(setLangOptionOpen());
      },
    };
  },
  (stateProps: ComponentProps, dispatchProps: ComponentDispatch): Props => {
    const { src, alt, className } = stateProps;
    const { handleClick } = dispatchProps;
    return { src, alt, className, handleClick };
  }
)(ImageBox);
