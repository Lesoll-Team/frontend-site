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
          <div className=" bg-red-500 flex  grid-cols-2 justify-around ">
            <div className=" p-2 bg-blue-500 justify-center w-[60vw] gap-10 grid grid-cols-1 ">
            <div className="bg-yellow-500 grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
              {searchResult.searchResults.map((result) => (
                <SearchCard key={result._id} propertyDetails={result} />
              ))}
              {searchResult.searchResults.map((result) => (
                <SearchCard key={result._id} propertyDetails={result} />
              ))}
              {searchResult.searchResults.map((result) => (
                <SearchCard key={result._id} propertyDetails={result} />
              ))}
              {searchResult.searchResults.map((result) => (
                <SearchCard key={result._id} propertyDetails={result} />
              ))}
              </div>
              <div className="bg-black flex justify-center items-center">
                <Button onClick={handleLoadMore}>more</Button>
              </div>
            </div>

            <div className=" bg-red-200  w-[35vw] sticky top-0 h-[100dvh]">
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
