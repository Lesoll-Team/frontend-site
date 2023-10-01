// SearchResult.js

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../realtyCard/RealtyCard";
// import { GrFormNext } from "@nextui-org/react";
import ReactPaginate from "react-paginate";
import styles from "../../styles/paginations.module.css"; // Import the CSS module

import {
  setCurrentPage,
  propertyFromSearch,
  // setInputKeywords,
} from "@/redux-store/features/searchSlice";
import ShowMapSearch from "@/Shared/map/ShowMapSearch";
import { SearchBar } from "@/Shared/search/SearchBar";
// import { GrFormNext } from "react-icons/gr";

function SearchResult() {
  // const language = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.Search.currentPage);
  const totalPages = useSelector((state) => state.Search.totalPages);
  const InputKeyword = useSelector((state) => state.Search.setInputKeyword);
  const searchResultSearch = useSelector((state) => state.Search.searchResult);
  const [searchResult, setSearchResult] = useState(null);

  const handlePageChange = (selectedPage) => {
    dispatch(setCurrentPage(selectedPage + 1));
  };

  useEffect(() => {
    // Trigger the propertyFromSearch action when the component mounts
    dispatch(propertyFromSearch({ InputKeywords: InputKeyword, page: currentPage }));
  }, [dispatch, InputKeyword, currentPage]);

  useEffect(() => {
    setSearchResult(searchResultSearch);
  }, [currentPage, dispatch, searchResultSearch]);
  return (
    <div className="relative">
      {searchResult?.code === 200 ? (
        <div className="grid grid-cols-3">
          <div className="flex flex-col lg:col-span-2  col-span-3  ">
            <SearchBar />

            <div className=" flex flex-wrap justify-center  gap-10">
              {searchResult.searchResults.map((result) => (
                <SearchCard key={result._id} propertyDetails={result} />
              ))}
            </div>
            <div
              className={
                "flex justify-center items-center  m-4 " + styles.pagination
              }
            >
              <ReactPaginate
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalPages}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                onPageChange={(data) => handlePageChange(data.selected)}
                containerClassName={styles.paginationContainer} // Use the styles from the CSS module
                pageClassName={styles.paginationPage}
                activeClassName={styles.activePage}
                previousLabel={"back"}
                previousClassName={styles.paginationPrevious}
                nextLabel={"next"}
                nextClassName={styles.paginationNext}
                disabledClassName={styles.paginationDisabled}
                
              />
            </div>
          </div>

          <div className={`lg:block hidden sticky  top-20 h-[91vh] `}>
            {searchResult?.searchResults && (
              <ShowMapSearch
                className=""
                searchResult={searchResult?.searchResults}
              />
            )}
          </div>
        </div>
      ) : (
        <div>
          <SearchBar />
          <div className="w-full p-36 text-2xl text-default-500 text-center">
            Not found property
          </div>
        </div>
      )}
    </div>
  );
}
export default SearchResult;
