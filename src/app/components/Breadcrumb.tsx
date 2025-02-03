import React from "react";

// Icons
import { RiArrowRightSLine } from "react-icons/ri";

interface BreadcrumbProps {
  breadcrumbs: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  return (
    <nav>
      <ol className="flex text-white">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb} className="flex items-center">
            <span className="cursor-pointer text-xs hover:border-b hover:border-white line-clamp-1 text-ellipsis">
              {breadcrumb}
            </span>
            {index < breadcrumbs.length - 1 && <RiArrowRightSLine size={16} />}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
