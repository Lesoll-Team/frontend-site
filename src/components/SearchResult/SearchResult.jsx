// SearchResult.js

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../realtyCard/RealtyCard";
import ReactPaginate from "react-paginate";
import styles from "../../styles/paginations.module.css"; // Import the CSS module

import {
  setCurrentPage,
  propertyFromSearch,
} from "@/redux-store/features/searchSlice";
import ShowMapSearch from "@/Shared/map/ShowMapSearch";
import { SearchBar } from "@/Shared/search/SearchBar";
import { FaMapMarked } from "react-icons/fa";
import { DotPulse } from "@uiball/loaders";
// import { GrFormNext } from "react-icons/gr";

function SearchResult() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.Search.currentPage);
  const totalPages = useSelector((state) => state.Search.totalPages);
  const InputKeyword = useSelector((state) => state.Search.setInputKeyword);
  const searchResultSearch = useSelector((state) => state.Search.searchResult);
  const [searchResult, setSearchResult] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const handlePageChange = (selectedPage) => {
    dispatch(setCurrentPage(selectedPage + 1));
  };
  useEffect(() => {
    dispatch(
      propertyFromSearch({ InputKeywords: InputKeyword, page: currentPage })
    );
  }, [InputKeyword, currentPage]);

  useEffect(() => {
    setSearchResult(searchResultSearch);
  }, [currentPage, searchResultSearch]);
// console.log(searchResult);
  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            setShowMap((prevState) => !prevState);
            // console.log(showMap);
          }}
          className="z-[100] block lg:hidden fixed bottom-5 bg-lightOrange rounded-full text-white mx-auto left-[10px] p-5"
        >
          <FaMapMarked />
        </button>
        { searchResult?.searchResults?.length > 0 ? (
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

            <div
              className={`lg:block hidden md:sticky  md:top-20 h-[93vh] absolute top-0 w-screen $`}
            >
              {" "}
              {searchResult?.searchResults && (
                <ShowMapSearch
                  className=""
                  searchResult={searchResult?.searchResults}
                />
              )}
            </div>
            {showMap && (
              <div className="lg:hidden block">
                <div
                  className={`fixed top-0 left-0 w-full h-[100vh] n${
                    showMap ? "block" : "hidden"
                  }`}
                >
                  {searchResult?.searchResults && (
                    <ShowMapSearch
                      className=""
                      searchResult={searchResult?.searchResults}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        ) :!searchResult ? (
          <div>
            <SearchBar pageSaleOption={InputKeyword?.offer}/>
            {/* <div className="w-full p-36 text-2xl text-default-500 text-center ">
              Not found property
            </div> */}
            <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <DotPulse size={50} speed={1.3} color="#309da0" />
        </div>
          </div>
        ):(
          <>
          <SearchBar pageSaleOption={InputKeyword?.offer}/>
            <div className="w-full p-36 text-2xl text-default-500 text-center ">
              Not found property
            </div>
            </>
        )}
      </div>
    </>
  );
}
export default SearchResult;
