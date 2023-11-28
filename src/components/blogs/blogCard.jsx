import React from "react";
import {  Image } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";

function BlogCard({ blogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="gap-10 flex flex-wrap justify-center  ">
      {blogData.map((item) => (
        <div key={item._id} className="w-[350px]  border  h-[450px]">
          <div className=" w-[350px]   mx-auto">
            <Link
              title={language ? item.title.ar : item.title.en}
              href={`/blog/${language ? item.slug.ar : item.slug.en}`}
            >
              <Image
                width="100%"
                height="100%"
                radius="none"
                alt={language ? item.title.ar : item.title.en}
                className="w-[350px] h-[300px] object-cover"
                src={item.BlogImage}
              />
            </Link>
          </div>

          <div className=" ">
            <div className="">
              <h2 className="text-lightGreen sm:text-lg line-clamp-1 flex-wrap text-sm text-md md:text-xl lg:text-2xl ">
                {language ? item.title.ar : item.title.en}
                {language ? item.title.ar : item.title.en}
              </h2>
            </div>
            <div className="">
              <p className="text-default-500 sm:text-lg line-clamp-2 flex-wrap text-sm  md:text-medium lg:text-lg ">
                {language ? item.description.ar : item.description.en}
                {language
                  ? item.description.ar
                  : item.description.en}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(BlogCard);
