import { ChevronLeft, ChevronRight } from "lucide-react";

const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = startPage + maxVisiblePages - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="px-6 py-4 bg-gray-50 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 rounded-b-xl w-full">
      <div className="text-sm text-gray-600 mb-4 sm:mb-0 font-medium">
        <span className="text-gray-500">Showing page</span>{" "}
        <span className="text-gray-900 font-semibold">{currentPage}</span>{" "}
        <span className="text-gray-500">of</span>{" "}
        <span className="text-gray-900 font-semibold">{totalPages}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="flex items-center px-3.5 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-all shadow-sm"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Previous
        </button>
        <div className="hidden md:flex gap-2 mx-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() =>
                typeof page === "number" ? onPageChange(page) : null
              }
              disabled={page === "..."}
              className={`min-w-[38px] h-[38px] flex items-center justify-center rounded-md text-sm cursor-pointer font-medium transition-all ${
                currentPage === page
                  ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-100"
                  : page === "..."
                  ? "text-gray-400 cursor-default"
                  : "text-gray-700 hover:bg-white hover:border-blue-300 border border-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="flex items-center px-3.5 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 cursor-pointer hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
