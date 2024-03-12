import React from "react";

import { useSelector } from "react-redux";
import styles from "../../styles/blogs.module.css";
import Image from "next/image";
import SimilarBlogs from "./SimilarBlogs";

function BlogSinglePage({ BlogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const formattedDate = (dateString, language) => {
    const date = new Date(dateString);
    const locale = language ? "ar-EG" : "en-US";
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString(locale, options);
    return formattedDate;
  };

  return (
    <div className="py-10 md:container md:mx-auto mx-[20px]">
      <div className="relative ">
        <Image
          width={500}
          height={100}
          alt={BlogData.getBlogs.title.ar}
          className="w-full h-[381px] object-cover md:mb-[80px] mb-[10px] brightness-50"
          src={BlogData.getBlogs.BlogImage}
          priority
        />
        <div className="absolute flex items-center justify-center top-0 w-full h-[381px] ">
          <h1 className="overflow-x-hidden text-white  font-bold  w-full  text-center ">
            {language ? BlogData.getBlogs.title.ar : BlogData.getBlogs.title.en}
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:gap-x-[73px] md:grid-cols-3 ">
        <div className="md:row-start-1 md:pt-0 pt-[40px] row-start-2 col-span-1">
          <div className="sticky top-24 ">
            <div className="flex flex-col gap-y-[20px] ">
              <div className="flex flex-col md:gap-y-[0.8vw] xl:gap-y-[0.5vw] gap-y-[0.5vw] ">
                <span className=" md:block hidden lg-text">
                  {formattedDate(BlogData?.getBlogs.createdAt, language)}
                </span>
                <h3 className="">
                  {language ? "مقالات مشابهة" : "Similar Blogs"}
                </h3>
                <div className="relative w-full">
                  <hr className="border-t-2 w-full absolute  border-[#cccccc] " />
                  <hr className="border-t-2 w-5/12 absolute  border-lightGreen " />
                </div>
              </div>
              <SimilarBlogs blog={BlogData?.mostVisit} />
            </div>
          </div>
        </div>
        <div className="w-full col-span-2  ">
          <span className=" md:hidden block pb-2  text-gray1 lg-text">
            {language
              ? `بتاريخ : ${formattedDate(
                  BlogData?.getBlogs.createdAt,
                  language
                )}`
              : `Date : ${formattedDate(
                  BlogData?.getBlogs.createdAt,
                  language
                )}`}
          </span>
          <div
            dir={language ? "rtl" : "ltr"}
            className={` text-md sm:text-lg text-darkGray font-noto  ${styles.genericDiv}`}
            dangerouslySetInnerHTML={
              language
                ? { __html: BlogData.getBlogs.description.ar }
                : { __html: BlogData.getBlogs.description.en }
            }
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(BlogSinglePage);
