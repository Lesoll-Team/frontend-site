// components/PaginationPage.js
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import styles from "../../styles/Pagination.module.css";

const PaginationPage = ({ hrefRout, currentPage, totalPages }) => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      // Clean up event listeners or subscriptions if needed
    };
  }, [router, hrefRout]); // currentPage is not needed here

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1; // react-paginate starts indexing from 0
    router.push(`/${hrefRout}/${selectedPage}`);
  };
  return (
    <div dir="ltr" className={styles.pagination}>
      <ReactPaginate
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.paginationPage}
        activeClassName={styles.activePage}
        previousLabel={"back"}
        previousClassName={styles.paginationPrevious}
        nextLabel={"next"}
        nextClassName={styles.paginationNext}
        disabledClassName={styles.paginationDisabled}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default PaginationPage;
