// SearchResult.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import SearchCard from "../realtyCard/RealtyCard";
import ReactPaginate from "react-paginate";
import styles from "../../styles/paginations.module.css"; // Import the CSS module

import { setCurrentPage } from "@/redux-store/features/searchingSlice";

import { useRouter } from "next/router";
import { DotPulse } from "@uiball/loaders";
import { SearchBar } from "@/Shared/search/SearchBar";
import { TbVirusSearch } from "react-icons/tb";
import RealtyCard from "../realtyCard/RealtyCard";

import BestLinksInHome from "../linksInHome/BestLinksInHome";

// import LinksSearch from "../linksInHome/BestLinksInHome";

function SearchResult({
  reversedFilteredKeywords,
  PopularSearches,
  MostArea,
  MostGovernorate,
  Others,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.Searching.currentPage);
  const totalPages = useSelector((state) => state.Searching.totalPages);
  const language = useSelector((state) => state.GlobalState.languageIs);

  // const InputKeyword = useSelector((state) => state.Searching.setInputKeyword);
  const searchResult = useSelector((state) => state.Searching.searchResult);
  const searchingError = useSelector((state) => state.Searching.searchingError);
  const isSearching = useSelector((state) => state.Searching.isSearching);
  const handlePageChange = (selectedPage) => {
    dispatch(setCurrentPage(selectedPage + 1));
  };
  useEffect(() => {
    router.push(`/searching/${router.query.keyword}`);
  }, [currentPage]);
  return (
    <>
      {/* <div className="relative "> */}
      {!isSearching ? (
        <div className="grid  p-2 grid-cols-1 xl:grid-cols-5 ">
          <div
            className={`  flex flex-col sm:p-1 p-5  ${
              searchingError === "rejected" ? " " : "lg:col-span-4 "
            }  col-span-5 `}
          >
            <SearchBar reversedFilteredKeywords={reversedFilteredKeywords} />
            <div className=" flex flex-wrap justify-center gap-5  ">
              {searchResult?.searchResults.map((result) => (
                <RealtyCard key={result._id} propertyDetails={result} />
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
                          1- تأكد من الكلمات المستخدمة في البحث أو استخدم عبارات
                          أخرى أو حاول بحث بعبارات أخرى للحصول على المحتوى
                          المطلوب
                        </p>
                        <p className=" flex text-start  md:text-xl text-lg">
                          2- الحقل الاول مخصص للمناطق والمحافظات : تأكد من ادخال
                          اسم المنطقة/المحافظة بشكل صحيح
                        </p>
                        <p className=" flex text-start  md:text-xl text-lg">
                          3- الحقل الثانى مخصص للكلمات المفتاحية : تأكد من ادخال
                          الكلمات بشكل صحيح
                        </p>
                      </div>
                      <div>
                        <TbVirusSearch className="text-8xl text-lightGreen" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl md:text-3xl">NO SEARCH RESULTS</h3>
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
                          1- Double check your spelling, use more generic terms
                          or try different keywords to find what you’re looking
                          for
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
                  "flex justify-center items-center  my-5 " + styles.pagination
                }
              >
                <ReactPaginate
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={totalPages}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
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
          <div className=" xl:w-[300px] w-full flex flex-col  ">
            <BestLinksInHome
              PopularSearches={PopularSearches}
              MostArea={MostArea}
              MostGovernorate={MostGovernorate}
              Others={Others}
            />
            <div
              className="text-center w-[300px] border-5 p-2  border-lightGreen  h-[700px]    
             xl:block hidden sticky top-20
            "
            >
              <div className="mx-auto  flex justify-center w-[200px]">
                <h2 className="absolute w-[200px] animate-bounce flex-wrap text-center mt-[55px] text-lightGreen text-xl font-semibold md:text-xl lg:text-4xl	">
                  ليسول طريقك لبيتك
                </h2>
              </div>
              <img
                src="/sideImgSearch.jpg"
                alt="side in search page"
                className=" p-2 mt-[150px]"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center min-h-[92dvh] justify-center h-[50dvh] flex-col gap-3">
          <DotPulse size={50} speed={1.3} color="#309da0" />
          {/* } */}
        </div>
      )}
      {/* </div> */}
    </>
  );
}
export default SearchResult;
