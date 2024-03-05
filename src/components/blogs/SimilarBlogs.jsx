import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import { memo } from "react";
import { useSelector } from "react-redux";

const SimilarBlogs = ({ blog }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(blog);
  const formattedDate = (dateString, language) => {
    const date = new Date(dateString);
    const locale = language ? "ar-EG" : "en-US";
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString(locale, options);
    return formattedDate;
  };
  return (
    <div className=" p-1 ">
      {blog.map((_, i) => (
        <Link
          href={language ? blog[i]?.slug?.slug.ar : blog[i]?.slug?.slug.en}
          key={blog[i]?._id}
          className="flex  p-1 "
        >
          <Image
            src={blog[i]?.slug?.BlogImage}
            width={100}
            height={100}
            alt="similar image"
            className="h-[100px] w-[100px]"
          />
          <div className=" flex flex-col justify-center px-[16px]">
            <span className="text-[20px]">
              {language ? blog[i]?.slug?.title.ar : blog[i]?.slug?.title.en}
            </span>
            <span className="text-[20px] text-[#309DA0]">
              {formattedDate(blog[i]?.createdAt, language)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default memo(SimilarBlogs);
