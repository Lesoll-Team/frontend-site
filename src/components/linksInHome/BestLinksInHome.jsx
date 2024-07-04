import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { memo, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
function BestLinksInHome({
  PopularSearches,
  MostArea,
  Others,
  MostGovernorate,
}) {
  const language = getLangBoolean();
  const [toggleLinks, setToggleLinks] = useState(0);
  const { t } = useTranslation("common");

  return (
    <section className="flex flex-wrap container mx-auto md:min-h-[488px] gap-5  justify-center md:justify-between gap-y-5   py-5 pb-14">
      <div className="   max:w-[310px] w-full md:w-auto  ">
        <button
          onClick={() =>
            toggleLinks !== 1 ? setToggleLinks(1) : setToggleLinks(0)
          }
          className="flex mb-6 items-center justify-between  border-b-1 border-black md:border-none cursor-pointer md:cursor-default w-full"
        >
          <h3 className=" font-bold ">{t("Link_Most_Frequently")}</h3>
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
          <h3 className=" font-bold ">{t("Link_Most_Searched")}</h3>
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
          <h3 className="font-bold">{t("Link_Other_Commercial")}</h3>
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
          <h3 className="font-bold">{t("Link_Most_Areas")}</h3>
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
