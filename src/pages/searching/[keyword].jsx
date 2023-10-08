// import React, { useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import PaginationSearch from "@/Shared/Pagination/PaginationSearch";
// import { useRouter } from "next/router";
// import { dataFoundFromSearch } from "@/redux-store/features/searchingSlice";

// export default function Searching() {
//   const router = useRouter();
//   const dispatch = useDispatch();
// //   const [searchResult, setSearchResult] = useState([]);
//   const currentPage = useSelector((state)=>state.Searching.currentPage);
//   const searchingResult = useSelector((state)=>state.Searching.searchResult);
//   useEffect(() => {
//     const searchDataFound = () => {
//       dispatch(dataFoundFromSearch({keyword: router.query.keyword,page: currentPage,}));
//     //   setSearchResult(searchData);
//     };
//     searchDataFound();
//   }, [router]);

//   console.log(searchingResult);
//   return (
//     <>
//       <div>
//         sdsdsd
//         {console.log(router.query.keyword)}
//         <PaginationSearch
//           hrefRout={router.query.keyword}
//           currentPage={currentPage}
//           totalPages={searchingResult?.totalPages}
//         />
//       </div>
//     </>
//   );
// }
