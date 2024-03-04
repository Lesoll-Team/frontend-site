import React, { useEffect, useState } from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { LiaEdit } from "react-icons/lia";

function BlogCard({ blogData }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (
      (userInfo && userInfo?.isAdmin === true) ||
      userInfo?.supAdmin === true
    ) {
      setIsAdmin(true);
    }
  }, [userInfo]);
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
          <div className="m-2">
            <div className="my-2">
              <Link
                title={language ? item.title.ar : item.title.en}
                href={`/blog/${language ? item.slug.ar : item.slug.en}`}
              >
                <h2 className="text-lightGreen sm:text-lg line-clamp-1 flex-wrap text-sm text-md md:text-xl lg:text-2xl ">
                  {language ? item.title.ar : item.title.en}
                </h2>
              </Link>
            </div>
            <div className="my-2 mb-3">
              <p className="text-default-500 sm:text-lg line-clamp-2 flex-wrap text-sm  md:text-medium lg:text-lg ">
                {language ? item.metaDescription.ar : item.metaDescription.en}
              </p>
            </div>
            <div className=" flex justify-center items-center ">
              <Link
                title={language ? item.title.ar : item.title.en}
                href={`/blog/${language ? item.slug.ar : item.slug.en}`}
                className="text-blue-600 underline  flex items-center"
              >
                <div className="mx-2">
                  <BsBoxArrowInDownRight />
                </div>
                {language ? "قراءة المزيد" : "read more"}
              </Link>
              {isAdmin ? (
                <Link
                  title={language ? item.title.ar : item.title.en}
                  href={`/dashboard/blog/edit-blog/${
                    language ? item.slug.ar : item.slug.en
                  }`}
                  className="mx-5"
                >
                  <LiaEdit className="text-2xl" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default React.memo(BlogCard);
