import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchCard from "../realtyCard/RealtyCard";
import { Button } from "@nextui-org/react";
import { showMore } from "@/redux-store/features/searchSlice";
function SearchResult() {
  const dispatch = useDispatch();
  const searchResult = useSelector((state) => state.Search.searchResult);
  const handleLoadMore = () => {
    dispatch(showMore());
  };
  return (
    <div>
      {searchResult?.code === 200 ? (
        <div>
          <div className=" bg-red-500 flex  grid-cols-3 ">
            <div className=" p-2 flex flex-wrap justify-center w-[50vw] gap-10 h-[200dvh]">
              {searchResult.searchResults.map((result) => (
                <SearchCard key={result._id} propertyDetails={result} />
              ))}
              <div>
                <Button onClick={handleLoadMore}>more</Button>
              </div>
            </div>

            <div className=" bg-red-200  w-[50vw] sticky top-0 h-[100dvh]">
              <img
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1600,c_limit/GoogleMapTA.jpg"
                className="rounded-3xl  "
                loading="lazy"
                width={500}
              />
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
