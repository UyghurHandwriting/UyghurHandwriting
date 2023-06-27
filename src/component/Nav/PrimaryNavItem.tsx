import * as React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

export interface PrimaryNavItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * Child node(s) that can be nested inside component as a menu
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * URL or a URL fragment string that the hyperlink points to
   */
  href?: string;
  /**
   * Set to true when the primary nav item is the active page
   */
  isActive?: boolean;
  /**
   * Link text string
   */
  text?: string;

  componentId?: string;

  textStyle?: React.CSSProperties;

  textClassName?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryNavItem = React.forwardRef<
  HTMLLIElement,
  PrimaryNavItemProps
>(
  (
    {
      componentId,
      className,
      text,
      href,
      isActive,
      children,
      textStyle,
      textClassName,
      ...other
    },
    ref
  ) => {
    const componentClassName = classnames("primary-nav__item", className, {
      "is-active": isActive === true,
    });

    const textElementClassName = classnames(
      "primary-nav__item-text",
      textClassName
    );

    return (
      <li id={componentId} className={componentClassName} {...other} ref={ref}>
        <Link
          id={componentId + "-a-tag"}
          className="primary-nav--link__underline"
          to={href ?? "#"}
        >
          <span className={textElementClassName} style={{ ...textStyle }}>
            {text}
          </span>
        </Link>
        {children && (
          <div className="primary-nav__item-panel" hidden={!isActive}>
            {children}
          </div>
        )}
      </li>
    );
  }
);

PrimaryNavItem.displayName = "PrimaryNavItem";
