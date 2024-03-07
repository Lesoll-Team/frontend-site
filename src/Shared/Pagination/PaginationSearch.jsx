import ReactPaginate from "react-paginate";
import styles from "../../styles/Pagination.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNumberPage,
  // updateAllStates,
} from "@/redux-store/features/category/categorySlice";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

const PaginationPage = ({ currentPage, totalPage }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePageClick = (data) => {
    dispatch(changeNumberPage(data.selected + 1));
  };

  const pageNumber = useSelector((state) => state.Category.pageNumber);

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: pageNumber || router.query.page },
    });
  }, [pageNumber]);

  // const dispatch = useDispatch();
  // const handlePageClick = (data) => {
  //   dispatch(changeNumberPage(data.selected + 1));
  // };
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

export default memo(PaginationPage);
