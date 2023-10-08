// // components/PaginationPage.js
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import ReactPaginate from "react-paginate";
// import styles from "../../styles/Pagination.module.css";
// // import { foundKeyword } from "@/utils/searchAPI";
// import { useDispatch } from "react-redux";
// import { dataFoundFromSearch } from "@/redux-store/features/searchingSlice";

// const PaginationSearch = ({ hrefRout, currentPage, totalPages }) => {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     return () => {
//       // Clean up event listeners or subscriptions if needed
//     };
//   }, [router, hrefRout]); // currentPage is not needed here

//   const handlePageClick = (data) => {
//     const selectedPage = data.selected + 1; // react-paginate starts indexing from 0
//     // foundKeyword(hrefRout,selectedPage)
//     dispatch(dataFoundFromSearch(hrefRout, currentPage));

//     router.push(`/searching/${hrefRout}`);
//   };
//   return (
//     <div dir="ltr" className={styles.pagination}>
//       <ReactPaginate
//         breakLabel={"..."}
//         breakClassName={"break-me"}
//         pageCount={totalPages}
//         pageRangeDisplayed={3}
//         marginPagesDisplayed={1}
//         onPageChange={handlePageClick}
//         containerClassName={styles.paginationContainer}
//         pageClassName={styles.paginationPage}
//         activeClassName={styles.activePage}
//         previousLabel={"back"}
//         previousClassName={styles.paginationPrevious}
//         nextLabel={"next"}
//         nextClassName={styles.paginationNext}
//         disabledClassName={styles.paginationDisabled}
//         forcePage={currentPage - 1}
//       />
//     </div>
//   );
// };

// export default PaginationSearch;


