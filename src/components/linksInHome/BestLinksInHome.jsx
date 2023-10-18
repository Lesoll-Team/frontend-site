// import {
//   propertyFromSearch,
//   setInputKeywords,
// } from "@/redux-store/features/searchSlice";
import Link from "next/link";
// import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

function BestLinksInHome({ PopularSearches, MostArea, MostGovernorate }) {

  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <Fragment>
      <section className="container mx-auto flex flex-wrap gap-5 gap-x-10 justify-between items-start py-5 pb-14 ">
        <div className=" w-[350px] ">
          <h4>الأكثر بحثاً</h4>
          {PopularSearches.map((links, index) => (
            <div key={index} className=" my-2 w-auto  flex   ">
              <Link
                href={language?`searching/${links.name.keywords.ar}`:`searching/${links.name.keywords.en}`}
                className=" w-max ">
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
                href={language?`searching/${links.name.keywords.ar}`:`searching/${links.name.keywords.en}`}
                className=" w-max ">
                <h6 className="text-lightGreen">
                  {language ? links.name.title.ar : links.name.title.en}
                </h6>
              </Link>
            </div>
          ))}
        </div>

        <div className=" w-[350px] ">
          {/* {PopularSearches.map} */}
          <h4>المناطق الأكثر شعبية</h4>
          {MostGovernorate.map((links, index) => (
            <div key={index} className=" my-2 w-auto  flex">
              <Link
                href={language?`searching/${links.name.keywords.ar}`:`searching/${links.name.keywords.en}`}
                className=" w-max ">
                <h6 className="text-lightGreen">
                  {language ? links.name.title.ar : links.name.title.en}
                </h6>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default BestLinksInHome;
