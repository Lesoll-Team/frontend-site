import React from "react";
// import {
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   // Image,
// } from "@nextui-org/react";
import { useSelector } from "react-redux";
import styles from "../../styles/blogs.module.css";
import Link from "next/link";
import Image from "next/image";
import SimilarBlogs from "./SimilarBlogs";

function BlogSinglePage({ BlogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(BlogData);
  return (
    <div className="py-10 md:container md:mx-auto mx-[20px]">
      <div className="relative ">
        <Image
          width={500}
          height={100}
          alt={BlogData.getBlogs.title.ar}
          className="w-full h-[381px] object-cover md:mb-[80px] mb-[20px] brightness-50"
          src={BlogData.getBlogs.BlogImage}
          priority
        />
        <div className="absolute flex items-center justify-center top-0 w-full h-[381px] ">
          <h1
            className="overflow-hidden text-white sm:text-xl font-bold text-xl py-5 md:text-2xl lg:text-3xl w-full  text-center rounded-2xl"
            // className="overflow-hidden text-lightGreen sm:text-xl font-bold text-xl py-5 md:text-2xl lg:text-3xl w-full  text-center rounded-2xl"
          >
            {language ? BlogData.getBlogs.title.ar : BlogData.getBlogs.title.en}
          </h1>
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-x-5 md:grid-cols-3 ">
        <div className="md:row-start-1 row-start-2 col-span-1">
          <div className="sticky top-20 ">
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col ">
                <span>2024/2/18</span>
                <span className="text-[25px]">مقالات مشابهة</span>
                <div className="relative w-full">
                  <hr className="border-t-3 w-full absolute  border-gray1 " />
                  <hr className="border-t-3 w-5/12 absolute  border-lightGreen " />
                </div>
              </div>
              <SimilarBlogs blog={BlogData} />
              <SimilarBlogs blog={BlogData} />
              <SimilarBlogs blog={BlogData} />
            </div>

            <div className=" w-full  ">
              <p>
                يمكنك التواصل مع فريقنا المتخصص من خلال كل وسائل التواصل المتاحة
                عبر:
              </p>

              <div className="flex gap-x-4 mt-3">
                <Link href="https://wa.me/+201032362898">
                  <img
                    src="https://img.icons8.com/?size=50&amp;id=16713&amp;format=png"
                    width="35px"
                    alt="whats app icon"
                  />
                </Link>
                <Link href="mailto: Info@Lesoll.com">
                  <img
                    src="https://img.icons8.com/?size=50&amp;id=OumT4lIcOllS&amp;format=png"
                    width="35px"
                    alt="mail icon"
                  />
                </Link>

                <Link
                  href="https://facebook.com/LesollRealestate/"
                  target="_blank"
                >
                  <img
                    src="https://img.icons8.com/?size=50&amp;id=118497&amp;format=png"
                    width="35px"
                    alt="facebook icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full col-span-2 ">
          <div
            dir={language ? "rtl" : "ltr"}
            className={` text-md sm:text-lg text-darkGray  ${styles.genericDiv}`}
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
