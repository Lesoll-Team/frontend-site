import ReactPaginate from "react-paginate";
import styles from "../../styles/Pagination.module.css";
import styles from "@/styles/Pagination.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginationPage = ({ handlePageChange, currentPage, totalPages }) => {
  return (
    <div dir="ltr" className={styles.pagination}>
      <ReactPaginate
        breakLabel={<span className="rounded px-2 border-2 h-fit"> ...</span>}
        breakClassName={"break-me"}
        pageCount={totalPages}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={(data) => handlePageChange(data.selected)}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.paginationPage}
        activeClassName={styles.activePage}
        previousLabel={
          <FaAngleLeft className="text-2xl font-medium text-baseGray" />
        }
        previousClassName={styles.paginationPrevious}
        nextLabel={
          <FaAngleRight className="text-2xl font-medium text-baseGray" />
        }
        nextClassName={styles.paginationNext}
        disabledClassName={styles.paginationDisabled}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default PaginationPage;
