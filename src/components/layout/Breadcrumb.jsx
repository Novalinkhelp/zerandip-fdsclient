import { Link, useLocation } from "react-router";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();

  // Skip empty paths and create breadcrumb segments
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  // Generate readable path names (transform kebab-case to Title Case)
  const formatPathName = (path) => {
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav
      className="flex items-center py-4 px-6 text-sm border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-wrap">
        <li className="flex items-center">
          <Link
            to="/"
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Home"
          >
            <Home size={16} />
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const url = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <li key={url} className="flex items-center">
              <ChevronRight size={14} className="mx-2 text-gray-400" />
              {isLast ? (
                <span className="font-medium text-gray-600" aria-current="page">
                  {formatPathName(segment)}
                </span>
              ) : (
                <Link
                  to={url}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {formatPathName(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
