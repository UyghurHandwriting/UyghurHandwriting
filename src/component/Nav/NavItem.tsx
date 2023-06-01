import * as React from "react";
import classnames from "classnames";

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
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryNavItem = React.forwardRef<
  HTMLLIElement,
  PrimaryNavItemProps
>(({ className, text, href, isActive, children, ...other }, ref) => {
  const componentClassName = classnames("primary-nav__item", className, {
    "is-active": isActive === true,
  });

  return (
    <li className={componentClassName} {...other} ref={ref}>
      <a className="primary-nav--link__underline" href={href}>
        <span className="primary-nav--text">{text}</span>
      </a>
      {children && (
        <div className="primary-nav__item-panel" hidden={!isActive}>
          {children}
        </div>
      )}
    </li>
  );
});

PrimaryNavItem.displayName = "PrimaryNavItem";
