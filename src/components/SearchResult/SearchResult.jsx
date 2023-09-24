import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../realtyCard/RealtyCard";
import { Button } from "@nextui-org/react";
import {
  propertyFromSearch,
  showMore,
} from "@/redux-store/features/searchSlice";
import SearchMap from "./SearchMap";
// import ShowMap from "@/Shared/map/ShowMap";
import ShowMapSearch from "@/Shared/map/ShowMapSearch";
function SearchResult() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.Search.page);
  const InputKeywords = useSelector((state) => state.Search.setInputKeyword);
  const searchResultSearch = useSelector((state) => state.Search.searchResult);
  const [searchResult, setSearchResult] = useState(null);
  const [showMap, SetShowMap] = useState(false);

  const handleLoadMore = () => {
    dispatch(showMore());
    dispatch(propertyFromSearch({ InputKeywords, page }));
  };
  useEffect(() => {
    setSearchResult(searchResultSearch);

    // console.log(searchResult?.searchResults);
    // console.log(searchResultSearch);
  }, [handleLoadMore, page, dispatch]);
  return (
    <div className="relative">
      {/* <button className="bg-darkGreen text-white sticky top-3   mx-auto w-[300px] z-[100] p-2">
        view map
      </button> */}
      {searchResult?.code === 200 ? (
        <div>
          <div className="grid  md:grid-cols-1 lg:grid-cols-2 justify-around relative h-fit">
            <div className=" p-2 mt-5 justify-center  gap-10 grid grid-cols-1 max-h-fit">
              <div className=" grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 2xl:flex 2xl:flex-wrap grid-cols-1  gap-7 gap-x-10 justify-center justify-items-center">
                {searchResult.searchResults.map((result) => (
                  <SearchCard key={result._id} propertyDetails={result} />
                ))}
              </div>
              {page >= searchResult.totalPages ? null : (
                <div className=" flex justify-center items-center">
                  <Button onClick={handleLoadMore}>more</Button>
                </div>
              )}
            </div>
            {/* map */}
            <div
              className={`lg:block hidden sticky top-20 h-[91vh] ${
                showMap && "block"
              }`}
            >
              {/* <SearchMap searchResult={searchResult} /> */}
              {searchResult?.searchResults && (
                <ShowMapSearch
                  className=""
                  searchResult={searchResult?.searchResults}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full p-36 text-2xl text-default-500 text-center">
          Not found property
        </div>
      )}
    </div>
  );
}

export default SearchResult;
