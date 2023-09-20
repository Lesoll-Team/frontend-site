import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../realtyCard/RealtyCard";
import { Button } from "@nextui-org/react";
import { propertyFromSearch, showMore } from "@/redux-store/features/searchSlice";
function SearchResult() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.Search.page);
  const InputKeywords = useSelector((state) => state.Search.setInputKeyword);
  const searchResultSearch = useSelector((state) => state.Search.searchResult);
  const [searchResult, setSearchResult] = useState(null)

  const handleLoadMore = () => {
    dispatch(showMore());
    dispatch(propertyFromSearch({ InputKeywords, page }));

  };
  useEffect(() => {
    setSearchResult(searchResultSearch)

    // console.log(searchResult);
  }, [handleLoadMore,page,dispatch])
  return (
    <div>
      {searchResult?.code === 200 ? (
        <div>
          <div className="  grid-cols-2 justify-around ">
            <div className=" p-2 justify-center  gap-10 grid grid-cols-1 ">
              <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-5 gap-4 justify-items-center">
                {searchResult.searchResults.map((result) => (
                  <SearchCard key={result._id} propertyDetails={result} />
                ))}
              </div>
{page>=searchResult.totalPages?null:
  (              <div className=" flex justify-center items-center">
                <Button onClick={handleLoadMore}>more</Button>
              </div>)
}
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
