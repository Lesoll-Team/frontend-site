import ReactPaginate from "react-paginate";
import styles from "../../styles/Pagination.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateAllStates } from "@/redux-store/features/category/categorySlice";

const PaginationPage = ({ currentPage, totalPage }) => {
  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    dispatch(
      updateAllStates({
        pageNumber: data.selected + 1,
      })
    );
  };
  return (
    <div dir="ltr" className={styles.pagination}>
      <ReactPaginate
        pageCount={totalPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={styles.paginationContainer}
        pageClassName={styles.paginationPage}
        activeClassName={styles.activePage}
        previousLabel={
          <IoIosArrowBack className=" px-2 text-2xl w-full h-full" />
        }
        previousClassName={styles.paginationPrevious}
        nextLabel={
          <IoIosArrowBack className="rotate-180 px-2 text-2xl w-full h-full" />
        }
        nextClassName={styles.paginationNext}
        disabledClassName={styles.paginationDisabled}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default PaginationPage;
