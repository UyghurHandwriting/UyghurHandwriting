import React, { PropsWithChildren } from "react";
import "./VerticalTwoColumn.scss";
import classnames from "classnames";
type Props = {
  className?: string | undefined;
  reverse?: boolean;
  mobileReverse?: boolean;
  style?: React.CSSProperties;
} & PropsWithChildren;

export const VerticalTwoColumn = ({
  children,
  className,
  reverse = false,
  mobileReverse = true,
  style,
}: Props) => {
  const componentClassName = classnames("twoColumn", className, {
    reverse,
    mobileReverse,
  });

  return (
    <div className={componentClassName} style={{ ...style }}>
      {children}
    </div>
  );
};
