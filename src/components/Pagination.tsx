// src/components/Pagination.tsx

import { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log("Going to next page:", currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      console.log("Going to previous page:", currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  useEffect(() => {
    console.log("Pagination - Current Page:", currentPage);
    console.log("Pagination - Total Pages:", totalPages);
  }, [currentPage, totalPages]);

  console.log("totalPages", totalPages);

  return (
    <div>
      <button disabled={currentPage === 1} onClick={handlePreviousPage}>
        Previous
      </button>

      <span>{`Page ${currentPage} of ${totalPages}`}</span>

      <button disabled={currentPage === totalPages} onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
}
