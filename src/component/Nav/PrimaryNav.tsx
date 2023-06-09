import * as React from "react";
import classnames from "classnames";
import { nanoid } from "nanoid";
import "./PrimaryNav.scss";
export interface PrimaryNavProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * aria-label for `nav` element to describe Breadcrumbs navigation to screen readers
   */
  ariaLabel?: string;
  /**
   * Child node(s) that can be nested inside component. `Modal.Header`, `Modal.Body`, and `Modal.Footer` are the only permissible children of the Modal
   */
  children?: React.ReactNode;
  /**
   * CSS class names that can be appended to the component.
   */
  className?: string;
  /**
   * HTML id for the component
   */
  id?: string;
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryNav = ({
  className,
  children,
  id,
  ariaLabel,
  ...other
}: PrimaryNavProps) => {
  const [idVar, setId] = React.useState<string>();

  React.useEffect(() => {
    setId(id || nanoid());
  }, [id]);

  const componentClassName = classnames("primary-nav", className);

  return (
    <nav
      role="navigation"
      title="Primary navigation"
      id={idVar}
      aria-label={ariaLabel}
      className={componentClassName}
      {...other}
    >
      <ul className="primary-nav__list">{children}</ul>
    </nav>
  );
};
