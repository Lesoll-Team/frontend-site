import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import { memo } from "react";
import { useSelector } from "react-redux";

const SimilarBlogs = ({ blog }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const formattedDate = (dateString, language) => {
    const date = new Date(dateString);
    const locale = language ? "ar-EG" : "en-US";
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString(locale, options);
    return formattedDate;
  };
  return (
    <div className="   flex flex-col gap-y-[15px] ">
      {blog.map((_, i) => (
        <Link
          href={language ? blog[i]?.slug?.slug.ar : blog[i]?.slug?.slug.en}
          key={blog[i]?._id}
          className="flex   "
        >
          <Image
            src={blog[i]?.slug?.BlogImage}
            width={100}
            height={100}
            alt="similar image"
            className="md:h-[85px] md:w-[100px] h-[60px] w-[60px]"
          />
          <div
            className={` flex flex-col text-justify justify-around ${language ? "pr-[16px]" : "pl-[16px]"} `}
          >
            <span className="lg-text text-gray2 line-clamp-2 font-semibold">
              {language ? blog[i]?.slug?.title.ar : blog[i]?.slug?.title.en}
            </span>
            <span className="sm-text text-[#309DA0]">
              {formattedDate(blog[i]?.createdAt, language)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default memo(SimilarBlogs);
