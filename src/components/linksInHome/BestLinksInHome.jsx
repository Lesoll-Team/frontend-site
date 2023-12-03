import Link from "next/link";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";

function BestLinksInHome({ PopularSearches, MostArea, MostGovernorate }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <section className="overflow-hidden xl:justify-center justify-normal  flex flex-wrap gap-y-5 gap-x-10  py-5 pb-14">
      <div className="w-[350px] ">
        <h4 className="text-xl md:text-xl lg:text-2xl">
          الكلمات الأكثر استخداما
        </h4>
        {PopularSearches.map((links, index) => (
          <div key={index} className="my-2 w-auto flex">
            <Link
              href={
                language
                  ? `searching/${links.name.keywords.ar}`
                  : `searching/${links.name.keywords.en}`
              }
              className="w-max line-clamp-1"
            >
              <h6 className="text-lightGreen line-clamp-1 text-base md:text-md lg:text-lg">
                {language ? links.name.title.ar : links.name.title.en}
              </h6>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-[350px]">
        <h4 className="text-xl md:text-xl lg:text-2xl">الأماكن الأكثر بحثاً</h4>
        {MostArea.map((links, index) => (
          <div key={index} className="my-2 w-auto flex">
            <Link
              href={
                language
                  ? `searching/${links.name.keywords.ar}`
                  : `searching/${links.name.keywords.en}`
              }
              className="w-max line-clamp-1"
            >
              <h6 className="text-lightGreen text-base md:text-md line-clamp-1 lg:text-lg">
                {language ? links.name.title.ar : links.name.title.en}
              </h6>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-[350px]">
        <h4 className="text-xl md:text-xl lg:text-2xl">المناطق الأكثر شعبية</h4>
        {MostGovernorate.map((links, index) => (
          <div key={index} className="my-2 w-auto flex">
            <Link
              href={
                language
                  ? `searching/${links.name.keywords.ar}`
                  : `searching/${links.name.keywords.en}`
              }
              className="w-max line-clamp-1"
            >
              <h6 className="text-lightGreen line-clamp-1 text-base md:text-md lg:text-lg">
                {language ? links.name.title.ar : links.name.title.en}
              </h6>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestLinksInHome;
