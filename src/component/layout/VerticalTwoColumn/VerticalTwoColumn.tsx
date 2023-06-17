import React, { PropsWithChildren } from "react";
import "./VerticalTwoColumn.scss";
import classnames from "classnames";
type Props = {
  className?: string | undefined;
  reverse?: boolean;
  mobileReverse?: boolean;
} & PropsWithChildren;

export const VerticalTwoColumn = ({
  children,
  className,
  reverse = false,
  mobileReverse = true,
}: Props) => {
  const componentClassName = classnames("twoColumn", className, {
    reverse,
    mobileReverse,
  });

  return <div className={componentClassName}>{children}</div>;
};
