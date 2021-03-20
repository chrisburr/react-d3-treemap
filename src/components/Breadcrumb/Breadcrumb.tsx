import "./Breadcrumb.css";

import * as React from "react";
import classnames from "classnames";

export interface IBreadcrumbProps {
  /**
   * Collection of breadcrumbs to render
   */
  items: IBreadcrumbItem[];
  className?: string;
}

export interface IBreadcrumbItem {
  /**
   * Text to display to the user for the breadcrumb
   */
  text: string;
  /**
   * Arbitrary unique string associated with the breadcrumb
   */
  key: string;
  /**
   * Callback issued when the breadcrumb is selected.
   */
  onClick?: (
    ev?: React.MouseEvent<HTMLElement>,
    item?: IBreadcrumbItem
  ) => void;
  /**
   * Url to navigate to when this breadcrumb is clicked.
   */
  href?: string;
}

export const Breadcrumb: React.FunctionComponent<IBreadcrumbProps> = ({
  className,
  items
}) => {
  if (!items) {
    return null;
  }

  return (
    <div className={classnames("TreeMap__breadcrumb", className)}>
      {items.map((item: IBreadcrumbItem, index: number) => (
        <div key={index}>
          <a
            className="TreeMap__breadcrumbItem"
            id={item.key}
            key={item.key}
            onClick={item.onClick ? ev => item.onClick(ev, item) : undefined}
            href={item.href}
          >
            {item.text}
          </a>
          {index < items.length - 1 ? <span className="TreeMap__breadcrumbSeparator">/</span> : null}
        </div>
      ))}
    </div>
  );
};
