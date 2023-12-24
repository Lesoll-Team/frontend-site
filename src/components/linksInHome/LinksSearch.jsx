import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

function LinksSearch({ PopularSearches, MostArea, MostGovernorate, Others }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <section className="overflow-hidden xl:justify-center justify-normal  flex flex-wrap gap-y-5 gap-x-10  py-5 pb-14">
      <div className="w-[350px] ">
        <h4 className="text-xl md:text-xl font-semibold lg:text-2xl">
          {language ? "الكلمات الأكثر استخداما" : "Most frequently used words"}
        </h4>
        {PopularSearches.map((links, index) => (
          <div key={index} className="my-2 w-auto flex">
            <Link
              href={
                language
                  ? `${links.name.keywords.ar}`
                  : `${links.name.keywords.en}`
              }
              className="w-max line-clamp-1"
            >
              <h6 className="text-default-900 line-clamp-1 text-base md:text-md lg:text-lg">
                {language ? links.name.title.ar : links.name.title.en}
              </h6>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-[350px]">
        <h4 className="text-xl md:text-xl font-semibold lg:text-2xl">
          {language ? "مناطق الأكثر بحثاً" : "Most searched areas"}
        </h4>
        {MostArea.map((links, index) => (
          <div key={index} className="my-2 w-auto flex">
            <Link
              href={
                language
                  ? `${links.name.keywords.ar}`
                  : `${links.name.keywords.en}`
              }
              className="w-max line-clamp-1"
            >
              <h6 className="text-default-900 text-base md:text-md line-clamp-1 lg:text-lg">
                {language ? links.name.title.ar : links.name.title.en}
              </h6>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-[350px]">
        <h4 className="text-xl md:text-xl lg:text-2xl font-semibold">
          {language ? "عقارات تجارية اخري" : "Other commercial real estate"}
        </h4>
        {Others.map((links, index) => (
          <div key={index} className="my-2 w-auto flex">
            <Link
              href={
                language
                  ? `${links.name.keywords.ar}`
                  : `${links.name.keywords.en}`
              }
              className="w-max line-clamp-1"
            >
              <h6 className="text-default-900 line-clamp-1 text-base md:text-md lg:text-lg">
                {language ? links.name.title.ar : links.name.title.en}
              </h6>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-[350px]">
        <h4 className="text-xl md:text-xl lg:text-2xl font-semibold">
          {language ? "عقارات تجارية اخري" : "Other commercial real estate"}
        </h4>
        {MostGovernorate.map((links, index) => (
          <div key={index} className="my-2 w-auto flex">
            <Link
              href={
                language
                  ? `${links.name.keywords.ar}`
                  : `${links.name.keywords.en}`
              }
              className="w-max line-clamp-1"
            >
              <h6 className="text-default-900 line-clamp-1 text-base md:text-md lg:text-lg">
                {language ? links.name.title.ar : links.name.title.en}
              </h6>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LinksSearch;
