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

// components/PaginationPage.js
// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import Link from "next/link";
// import { Button } from "@nextui-org/react";
// import {
//   MdOutlineArrowForwardIos,
//   MdOutlineArrowBackIos,
// } from "react-icons/md";
// import styles from "../../styles/Pagination.module.css";

// const PaginationPage = ({ hrefRout, currentPage, totalPages }) => {
//   const router = useRouter();

//   const handlePageChange = (newPage) => {
//     router.push(`/${hrefRout}/${newPage}`);
//   };

//   useEffect(() => {
//     return () => {
//       // Clean up event listeners or subscriptions if needed
//     };
//   }, [router, hrefRout]); // currentPage is not needed here

//   const goToPrevPage = () => {
//     const newPage = parseInt(currentPage) - 1;
//     handlePageChange(newPage);
//   };

//   const goToNextPage = () => {
//     const newPage = parseInt(currentPage) + 1;
//     handlePageChange(newPage);
//   };

//   return (
//     <div dir="ltr" className={styles.pagination}>
//       {currentPage > 1 && (
//         <Button
//           className="bg-lightGreen hover:bg-lightGreenHover"
//           onClick={goToPrevPage}
//         >
//           <span className={styles.paginationLink}>
//             <div className="flex text-white">
//               <MdOutlineArrowBackIos /> <MdOutlineArrowBackIos />
//             </div>
//           </span>
//         </Button>
//       )}
//       <div className="flex">
//         <div className={styles.buttonNumber}>{currentPage}</div>
//       </div>
//       {currentPage < totalPages && (
//         <Button
//           className="bg-lightGreen hover:bg-lightGreenHover"
//           onClick={goToNextPage}
//         >
//           <span className={styles.paginationLink}>
//             <div className="flex text-white ">
//               <MdOutlineArrowForwardIos /> <MdOutlineArrowForwardIos />
//             </div>
//           </span>
//         </Button>
//       )}
//     </div>
//   );
// };

// export default PaginationPage;

// // import React from "react";
// // import Link from "next/link";
// // import styles from "../../styles/Pagination.module.css";
// // import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
// // import { Button } from "@nextui-org/react";
// // import { useSelector } from "react-redux";
// // import ReactPaginate from "react-paginate";

// // const PaginationPage = ({ hrefRout, currentPage, totalPages, onPageChange }) => {
// //   // const language = useSelector((state) => state.GlobalState.languageIs);
// //   return (
// //     <div dir="ltr" className={styles.pagination}>
// //       <ReactPaginate
// //         previousLabel={"previous"}
// //         nextLabel={"next"}
// //         breakLabel={"..."}
// //         breakClassName={"break-me"}
// //         pageCount={totalPages}
// //         marginPagesDisplayed={2}
// //         pageRangeDisplayed={5}
// //         onPageChange={onPageChange}
// //         containerClassName={styles.paginationContainer}
// //         pageClassName={styles.paginationPage}
// //         activeClassName={styles.activePage}
// //         previousClassName={styles.paginationPrevious}
// //         nextClassName={styles.paginationNext}
// //         disabledClassName={styles.paginationDisabled}
// //         forcePage={currentPage - 1}
// //       />

// //       {/* You can keep the previous and next buttons if you want */}
// //       {currentPage > 1 && (
// //         <Link href={`/rent/${parseInt(currentPage) - 1}`}>
// //           <Button className="bg-lightGreen hover:bg-lightGreenHover">
// //             <span className={styles.paginationLink}>
// //               <div className="flex text-white">
// //                 <MdOutlineArrowBackIos /> <MdOutlineArrowBackIos />
// //               </div>
// //             </span>
// //           </Button>
// //         </Link>
// //       )}

// //       {currentPage < totalPages && (
// //         <Link href={`/${hrefRout}/${parseInt(currentPage) + 1}`}>
// //           <Button className="bg-lightGreen hover:bg-lightGreenHover">
// //             <span className={styles.paginationLink}>
// //               <div className="flex text-white ">
// //                 <MdOutlineArrowForwardIos /> <MdOutlineArrowForwardIos />
// //               </div>
// //             </span>
// //           </Button>
// //         </Link>
// //       )}
// //     </div>
// //   );
// // };

// // export default PaginationPage;

// import Link from "next/link";
// import styles from "../../styles/Pagination.module.css";
// import {
//   MdOutlineArrowForwardIos,
//   MdOutlineArrowBackIos,
// } from "react-icons/md";
// import { Button } from "@nextui-org/react";
// import { useSelector } from "react-redux";
// const paginationPage = ({ hrefRout, currentPage, totalPages }) => {

//   // const language = useSelector((state) => state.GlobalState.languageIs);
//   return (
//     <div dir="ltr" className={styles.pagination}>
//     {currentPage > 1 && (
//       <Link href={`/${hrefRout}/${parseInt(currentPage) - 1}`} passHref>
//         <Button className="bg-lightGreen hover:bg-lightGreenHover">
//           <span className={styles.paginationLink}>
//             <div className="flex text-white">
//               <MdOutlineArrowBackIos /> <MdOutlineArrowBackIos />
//             </div>
//           </span>
//         </Button>
//       </Link>
//     )}
//     <div className="flex">
//       <div className={styles.buttonNumber}>{currentPage}</div>
//     </div>
//     {currentPage < totalPages && (
//       <Link href={`/${hrefRout}/${parseInt(currentPage) + 1}`} passHref>
//         <Button className="bg-lightGreen hover:bg-lightGreenHover">
//           <span className={styles.paginationLink}>
//             <div className="flex text-white ">
//               <MdOutlineArrowForwardIos /> <MdOutlineArrowForwardIos />
//             </div>
//           </span>
//         </Button>
//       </Link>
//     )}
//   </div>
//   );
// };

// export default paginationPage;
