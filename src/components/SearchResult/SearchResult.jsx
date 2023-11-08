// SearchResult.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../realtyCard/RealtyCard";
import ReactPaginate from "react-paginate";
import styles from "../../styles/paginations.module.css"; // Import the CSS module

import { setCurrentPage } from "@/redux-store/features/searchingSlice";
import ShowMapSearch from "@/Shared/map/ShowMapSearch";
import { FaMapMarked } from "react-icons/fa";
import { useRouter } from "next/router";
import { DotPulse } from "@uiball/loaders";
import { SearchBar } from "@/Shared/search/SearchBar";
import { TbVirusSearch } from "react-icons/tb";

function SearchResult({ reversedFilteredKeywords }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.Searching.currentPage);
  const totalPages = useSelector((state) => state.Searching.totalPages);
  const language = useSelector((state) => state.GlobalState.languageIs);

  // const InputKeyword = useSelector((state) => state.Searching.setInputKeyword);
  const searchResult = useSelector((state) => state.Searching.searchResult);
  const searchingError = useSelector((state) => state.Searching.searchingError);
  const isSearching = useSelector((state) => state.Searching.isSearching);
  const [showMap, setShowMap] = useState(false);
  const handlePageChange = (selectedPage) => {
    dispatch(setCurrentPage(selectedPage + 1));
  };
  useEffect(() => {
    router.push(`/searching/${router.query.keyword}`);
  }, [currentPage]);
  return (
    <>
      <div className="relative ">
        <button
          onClick={() => {
            setShowMap((prevState) => !prevState);
            // console.log(showMap);
          }}
          className="z-[100] block lg:hidden fixed bottom-5 bg-lightOrange rounded-full text-white mx-auto left-[10px] p-5"
        >
          <FaMapMarked />
        </button>
        {!isSearching ? (
          <div className="grid grid-cols-3 ">
            <div
              className={`  flex flex-col ${
                searchingError === "rejected" ? " " : "lg:col-span-2 "
              }  col-span-3 `}
            >
              <SearchBar reversedFilteredKeywords={reversedFilteredKeywords} />

              <div className=" flex flex-wrap justify-center  gap-10">
                {searchResult?.searchResults.map((result) => (
                  <SearchCard key={result._id} propertyDetails={result} />
                ))}
              </div>
              {searchingError == "rejected" ? (
                <div className="w-full  min-h-[75dvh] text-2xl text-default-500 text-center ">
                  {language ? (
                    <div>
                      <h3 className="text-2xl md:text-3xl">لا توجد نتائج </h3>
                      <div
                        className={` justify-around bg-sky-100 rounded-xl py-10 px-4 items-center md:flex-row flex-col flex m-10`}
                      >
                        <div
                          className={`
                                md:items-start 
                           flex flex-col items-center justify-center`}
                        >
                          <h4 className="font-semibold mb-3 text-lightGreen text-xl md:text-3xl">
                            لتحسين البحث
                          </h4>
                          <p className=" flex  text-start  md:text-xl text-lg">
                            1- تأكد من الكلمات المستخدمة في البحث أو استخدم
                            عبارات أخرى أو حاول بحث بعبارات أخرى للحصول على
                            المحتوى المطلوب
                          </p>
                          <p className=" flex text-start  md:text-xl text-lg">
                            2- الحقل الاول مخصص للمناطق والمحافظات : تأكد من
                            ادخال اسم المنطقة/المحافظة بشكل صحيح
                          </p>
                          <p className=" flex text-start  md:text-xl text-lg">
                            3- الحقل الثانى مخصص للكلمات المفتاحية : تأكد من
                            ادخال الكلمات بشكل صحيح
                          </p>
                        </div>
                        <div>
                          <TbVirusSearch className="text-8xl text-lightGreen" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl md:text-3xl">
                        NO SEARCH RESULTS
                      </h3>
                      <div
                        className={` justify-around bg-sky-100 rounded-xl py-10 px-4 items-center md:flex-row flex-col flex m-10`}
                      >
                        <div
                          className={`
                                md:items-start 
                           flex flex-col items-center justify-center`}
                        >
                          <h4 className="font-semibold mb-3 text-lightGreen text-xl md:text-3xl">
                            To Enhance your search
                          </h4>
                          <p className=" flex  text-start  md:text-xl text-lg">
                            1- Double check your spelling, use more generic
                            terms or try different keywords to find what you’re
                            looking for
                          </p>
                          <p className=" flex text-start  md:text-xl text-lg">
                            2- The first field is dedicated to regions and
                            governorates: Make sure to enter the name of the
                            region/governorate correctly
                          </p>
                          <p className=" flex text-start  md:text-xl text-lg">
                            3- The second field is dedicated to keywords: Make
                            sure you enter the words correctly
                          </p>
                        </div>
                        <div>
                          <TbVirusSearch className="text-8xl text-lightGreen" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
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
                    // currentPage={currentPage}
                    forcePage={currentPage - 1}
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
              )}
            </div>

            <div
              className={`  lg:block hidden md:sticky  md:top-20 ${
                searchingError === "rejected" ? "" : "h-[93vh]"
              }  absolute top-0 w-screen $`}
            >
              {searchResult?.searchResults && (
                <ShowMapSearch
                  className=""
                  searchResult={searchResult?.searchResults}
                />
              )}
            </div>
            {showMap && (
              <div className="lg:hidden block  ">
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
        ) : (
          <div className="flex items-center min-h-[92dvh] justify-center h-[50dvh] flex-col gap-3">
            <DotPulse size={50} speed={1.3} color="#309da0" />
            {/* } */}
          </div>
        )}
      </div>
    </>
  );
}
export default SearchResult;
