import Link from "next/link";
import React, { memo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
function BestLinksInHome({
  PopularSearches,
  MostArea,
  Others,
  MostGovernorate,
}) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [toggleLinks, setToggleLinks] = useState(0);

  return (
    <section className="flex flex-wrap container mx-auto  gap-5  justify-center md:justify-between gap-y-5   py-5 pb-14">
      <div className="   max:w-[310px] w-full md:w-auto  ">
        <button
          onClick={() =>
            toggleLinks !== 1 ? setToggleLinks(1) : setToggleLinks(0)
          }
          className="flex mb-6 items-center justify-between  border-b-1 border-black md:border-none cursor-pointer md:cursor-default w-full"
        >
          <h3 className=" font-bold ">
            {language
              ? "الكلمات الأكثر استخداما"
              : "Most frequently used words"}
          </h3>
          <IoIosArrowBack
            className={`md:hidden block rotate-40 duration-150 ${
              toggleLinks == 1 && "-rotate-90"
            }`}
          />
        </button>
        {PopularSearches?.map((links, index) => (
          <div
            key={index}
            className={` my-3 w-auto  flex ${
              toggleLinks !== 1 && "hidden md:block"
            }`}
          >
            <Link href={links.name.keywords.ar} className="w-max line-clamp-1 ">
              <p className="text-gray2 line-clamp-1   ">
                {language ? links.name.title.ar : links.name.title.en}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className=" max:w-[310px] w-full md:w-auto">
        <button
          onClick={() =>
            toggleLinks !== 2 ? setToggleLinks(2) : setToggleLinks(0)
          }
          className="flex mb-6 items-center justify-between border-b-1 border-black md:border-none cursor-pointer md:cursor-default w-full"
        >
          <h3 className=" font-bold ">
            {language ? "العقارات الأكثر بحثاً" : "Most searched properties"}
          </h3>
          <IoIosArrowBack
            className={`md:hidden block rotate-40 duration-150 ${
              toggleLinks == 2 && "-rotate-90"
            }`}
          />
        </button>
        {MostGovernorate?.map((links, index) => (
          <div
            key={index}
            className={` my-3 w-auto  flex ${
              toggleLinks !== 2 && "hidden md:block"
            }`}
          >
            <Link href={links.name.keywords.ar} className="w-max line-clamp-1 ">
              <p className="text-gray2 line-clamp-1 ">
                {language ? links.name.title.ar : links.name.title.en}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="max:w-[310px] w-full md:w-auto">
        <button
          onClick={() =>
            toggleLinks !== 3 ? setToggleLinks(3) : setToggleLinks(0)
          }
          className="flex mb-6 items-center justify-between border-b-1 border-black md:border-none cursor-pointer md:cursor-default w-full"
        >
          <h3 className="font-bold">
            {language ? "عقارات تجارية أخرى" : "Other commercial properties"}
          </h3>
          <IoIosArrowBack
            className={`md:hidden block rotate-40 duration-150 ${
              toggleLinks == 3 && "-rotate-90"
            }`}
          />
        </button>
        {Others?.map((links, index) => (
          <div
            key={index}
            className={` my-3 w-auto  flex ${
              toggleLinks !== 3 && "hidden md:block"
            }`}
          >
            <Link href={links.name.keywords.ar} className="w-max line-clamp-1 ">
              <p className="text-gray2 line-clamp-1 ">
                {language ? links.name.title.ar : links.name.title.en}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className=" max:w-[310px] w-full md:w-auto">
        <button
          onClick={() =>
            toggleLinks !== 4 ? setToggleLinks(4) : setToggleLinks(0)
          }
          className="flex  mb-6 items-center  justify-between border-b-1 border-black md:border-none cursor-pointer md:cursor-default w-full"
        >
          <h3 className="font-bold">
            {language ? "مناطق الأكثر بحثاً" : "Most searched areas"}
          </h3>
          <IoIosArrowBack
            className={`md:hidden block rotate-40 duration-150 ${
              toggleLinks == 4 && "-rotate-90"
            }`}
          />
        </button>
        {MostArea?.map((links, index) => (
          <div
            key={index}
            className={` my-3 w-auto  flex ${
              toggleLinks !== 4 && "hidden md:block"
            }`}
          >
            <Link href={links.name.keywords.ar} className="w-max line-clamp-1">
              <p className="text-gray2 line-clamp-1 ">
                {language ? links.name.title.ar : links.name.title.en}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(BestLinksInHome);
