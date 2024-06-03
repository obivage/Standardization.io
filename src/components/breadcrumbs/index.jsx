import React from "react";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";

import "./breadcrumbs.css";

const BreadCrumbs = ({ crumbs }) => {
  return (
    <nav className="BreadcrumbsContainer">
      <ol className="BreadcrumbsList">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li className="BreadcrumbsItem">
              {crumb.path ? (
                <Link href={crumb.path}>
                  <span className="BreadcrumbsLink">{crumb.name}</span>
                </Link>
              ) : (
                <span className="BreadcrumbsLast">{crumb.name}</span>
              )}
            </li>
            {index < crumbs.length - 1 && (
              <Icon icon={chevronRight} className="chevronRight" />
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
