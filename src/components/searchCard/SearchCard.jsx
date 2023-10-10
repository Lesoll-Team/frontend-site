// // SearchResult.js

// import React, { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import SearchCard from "../realtyCard/RealtyCard";
// import ReactPaginate from "react-paginate";
// import styles from "../../styles/paginations.module.css"; // Import the CSS module

// import {
//   setCurrentPage,
//   propertyFromSearch,
// } from "@/redux-store/features/searchSlice";
// import ShowMapSearch from "@/Shared/map/ShowMapSearch";
// import { SearchBar } from "@/Shared/search/SearchBar";
// import { FaMapMarked } from "react-icons/fa";
// // import { GrFormNext } from "react-icons/gr";

// function SearchCardResult() {
//   const dispatch = useDispatch();
//   const currentPage = useSelector((state) => state.Search.currentPage);
//   const totalPages = useSelector((state) => state.Search.totalPages);
//   const InputKeyword = useSelector((state) => state.Search.setInputKeyword);
//   const searchResultSearch = useSelector((state) => state.Search.searchResult);
//   const [searchResult, setSearchResult] = useState(null);
//   const [showMap, setShowMap] = useState(false);
//   const handlePageChange = (selectedPage) => {
//     dispatch(setCurrentPage(selectedPage + 1));
//   };
//   useEffect(() => {
//     dispatch(
//       propertyFromSearch({ InputKeywords: InputKeyword, page: currentPage })
//     );
//   }, [InputKeyword, currentPage]);

//   useEffect(() => {
//     setSearchResult(searchResultSearch);
//   }, [currentPage, searchResultSearch]);

//   return (
//     <>
//       <SearchBar />

//       <div className=" flex flex-wrap justify-center  gap-10">
//         {/* {searchResult.searchResults.map((result) => (
//           <SearchCard key={result._id} propertyDetails={result} />
//         ))} */}
//       </div>
//     </>
//   );
// }
// export default SearchCardResult;
