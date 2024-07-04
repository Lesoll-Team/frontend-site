import { SearchBarHome } from "@/Shared/search/SearchHome";
import { useTranslation } from "next-i18next";
import React, { memo } from "react";
const SearchModule = () => {
  const { t } = useTranslation("common");

  return (
    <div className="w-full   flex">
      <div
        className="w-full  flex flex-col  md:gap-y-[60px] items-center
      justify-center
        md:h-screen p-1 z-10
       lg:h-[600px]
        "
      >
        <div className="md:flex md:flex-col  gap-y-[3.27vh]   text-white ">
          <h1 className=" seo-hidden">{t("Home_Slogan_Seo")}</h1>
          <h2 className="w-full text-[24px] md:pb-0 pb-[32px] md:text-[48px] py-10 md:py-0 font-bold">
            {t("Home_Slogan_Title")}
          </h2>
          <p
            className="hidden md:flex
              text-[16px] md:text-[20px] text-justify
              font-light text-white
              "
          >
            {t("Home_Description")}
          </p>
        </div>
        <SearchBarHome />
      </div>
    </div>
  );
};

export default memo(SearchModule);
