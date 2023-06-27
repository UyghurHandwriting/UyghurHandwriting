import React from "react";
import "./Button.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../app/store";
type BtnVariant = "Primary" | "Secondary" | "MD" | "SM";
type Props = {
  onClick?: () => void;
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

