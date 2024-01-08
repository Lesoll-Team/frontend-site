import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

function BestLinksInHome({ PopularSearches, MostArea,Others, MostGovernorate }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  return (
    <section className="flex flex-wrap  md:text-start text-center   justify-center gap-y-5   py-5 pb-14">
      {/* <section className="overflow-hidden xl:justify-center justify-normal  flex flex-wrap gap-y-5 gap-x-10  py-5 pb-14"> */}
      <div className="w-[350px]  ">
        <h4 className="text-xl md:text-xl lg:text-2xl">
          {language ? "الكلمات الأكثر استخداما" : "Most frequently used words"}
        </h4>
        {PopularSearches.map((links, index) => (
          <div
            key={index}
            className="my-2 w-auto justify-center md:justify-normal flex"
          >
            <Link
              href={
                language
                  ? router.pathname === "/searching/[keyword]"
                    ? `${links.name.keywords.ar}`
                    : `searching/${links.name.keywords.ar}`
                  : router.pathname === "/searching/[keyword]"
                  ? `${links.name.keywords.ar}`
                  : `searching/${links.name.keywords.ar}`
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

      <div className="w-[350px] ">
        <h4 className="text-xl md:text-xl lg:text-2xl">
          {language ? "العقارات الأكثر بحثاً" : "Most searched properties"}
        </h4>
        {MostGovernorate.map((links, index) => (
          <div
            key={index}
            className="my-2 w-auto flex justify-center md:justify-normal"
          >
            <Link
              href={
                language
                  ? router.pathname === "/searching/[keyword]"
                    ? `${links.name.keywords.ar}`
                    : `searching/${links.name.keywords.ar}`
                  : router.pathname === "/searching/[keyword]"
                  ? `${links.name.keywords.ar}`
                  : `searching/${links.name.keywords.ar}`
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

      <div className="w-[350px] ">
        <h4 className="text-xl md:text-xl lg:text-2xl">
          {language ? "عقارات تجارية اخري" : "Other commercial real estate"}
        </h4>
        {Others.map((links, index) => (
          <div
            key={index}
            className="my-2 w-auto flex justify-center md:justify-normal"
          >
            <Link
              href={
                language
                  ? router.pathname === "/searching/[keyword]"
                    ? `${links.name.keywords.ar}`
                    : `searching/${links.name.keywords.ar}`
                  : router.pathname === "/searching/[keyword]"
                  ? `${links.name.keywords.ar}`
                  : `searching/${links.name.keywords.ar}`
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

      <div className="w-[350px] ">
        <h4 className="text-xl md:text-xl lg:text-2xl">
          {language ? "مناطق الأكثر بحثاً" : "Most searched areas"}
        </h4>
        {MostArea.map((links, index) => (
          <div
            key={index}
            className="my-2 w-auto flex justify-center md:justify-normal"
          >
            <Link
              href={
                language
                  ? router.pathname === "/searching/[keyword]"
                    ? `${links.name.keywords.ar}`
                    : `searching/${links.name.keywords.ar}`
                  : router.pathname === "/searching/[keyword]"
                  ? `${links.name.keywords.ar}`
                  : `searching/${links.name.keywords.ar}`
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
    </section>
  );
}

export default BestLinksInHome;
