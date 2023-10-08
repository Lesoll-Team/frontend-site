import { propertyFromSearch, setInputKeywords } from "@/redux-store/features/searchSlice";
import Link from "next/link";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

function BestLinksInHome({ PopularSearches, MostArea, MostGovernorate }) {
    const dispatch=useDispatch()

  const language = useSelector((state) => state.GlobalState.languageIs);
// const GetInputKeywords=useSelector((state)=>state.Search.setInputKeyword)
  const handlePopularSearch = (popularSearchKeyword) => {
    dispatch(propertyFromSearch({ InputKeywords:popularSearchKeyword, page: 1 }));
    dispatch(setInputKeywords(popularSearchKeyword));
  };
  const handleMostArea = (areaKeyword) => {
    dispatch(propertyFromSearch({ InputKeywords:areaKeyword, page: 1 }));
    dispatch(setInputKeywords(areaKeyword));
  };
  const handleMostGovernorate = (governorateKeyword) => {
    dispatch(propertyFromSearch({ InputKeywords:governorateKeyword, page: 1 }));
    dispatch(setInputKeywords(governorateKeyword));
  };
  return (
    <Fragment>
      <section className="container mx-auto flex flex-wrap gap-5 gap-x-10 justify-between items-start py-5 pb-14 ">
        <div className=" w-[350px] ">
          <h4>الأكثر بحثاً</h4>
          {PopularSearches.map((links, index) => (
            <div key={index} className=" my-2 w-auto  flex   ">
              <Link
                href={"/search"}
                className=" w-max "
                onClick={() => handlePopularSearch(links.name.keywords)}
              >
                <h6 className="text-lightGreen  ">
                  {language ? links.name.title.ar : links.name.title.en}
                </h6>
              </Link>
              
            </div>
          ))}
        </div>

        <div className=" w-[350px] ">
          {/* {PopularSearches.map} */}
          <h4 className="">الأماكن الأكثر بحثاً</h4>
          {MostArea.map((links, index) => (
            <div key={index} className=" my-2 w-auto  flex">
              <Link
                href={"/search"}
                className=" w-max "
                onClick={() => handleMostArea(links.name.keywords)}
              >
                <h6 className="text-lightGreen">
                  {language ? links.name.title.ar : links.name.title.en}
                </h6>
              </Link>
              {/* 
              <span>{links.name.keywords.en}</span> */}
            </div>
          ))}
        </div>

        <div className=" w-[350px] ">
          {/* {PopularSearches.map} */}
          <h4>المناطق الأكثر شعبية</h4>
          {MostGovernorate.map((links, index) => (
            <div key={index} className=" my-2 w-auto  flex">
              <Link
                href={"/search"}
                className=" w-max "
                onClick={() => handleMostGovernorate(links.name.keywords)}
              >
                <h6 className="text-lightGreen">
                  {language ? links.name.title.ar : links.name.title.en}
                </h6>
              </Link>
              {/* <span>{links.name.keywords.offer}</span>
              <span>{links.name.keywords.unitType}</span>
              <span>{links.name.keywords.keywords}</span> */}
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default BestLinksInHome;
