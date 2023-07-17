import React, { Dispatch } from "react";
import "./Button.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
import { setPdfRefresh, setShowToolbar } from "../../features/pdf/pdfSlice";
import { selectRBtn12 } from "../../features/language/languageSlice";
type BtnVariant = "Primary" | "Secondary" | "MD" | "SM";
type Props = {
  onClick?: (prop?: any) => void;
  disabled?: boolean;
  children: React.ReactNode;
  componentId?: string;
  href?: string;
  variant?: BtnVariant[];
};

export const Button = ({
  onClick,
  disabled,
  children,
  componentId = "Button",
  href,
  variant = ["Primary"],
}: Props) => {
  const variants: string[] = variant.map((varian) => "Button" + varian);
  const compClassName = classNames(
    "Button",
    { ButtonDisabled: disabled },
    variants
  );

  return (
    <button
      id={componentId}
      className={compClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {href ? <Link to={href}>{children}</Link> : children}
    </button>
  );
};

export const DownloadPdfBtn = connect(
  (state: RootState, ownProps: { children: React.ReactNode }): Props => {
    return {
      componentId: "DownloadPdfBtn",
      children: ownProps.children,
      variant: ["Primary"],
    };
  }
)(Button);

export const PrintPdfBtn = connect(
  (state: RootState): Props => {
    return {
      componentId: "PrintPdfBtn",
      children: selectRBtn12(state),
      variant: ["Primary"],
    };
  },
  //-----mapDispatch
  (dispatch: Dispatch<any>) => {
    return {
      onClick: () => {
        dispatch(setShowToolbar(true));
        dispatch(setPdfRefresh());
      },
    };
  }
)(Button);
