import { formatDate } from "@/utils/FormateData";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

const BlogCard = ({ blog }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate } = formatDate(blog.createdAt);
  // function extractFirst200Characters(text) {
  //   // Remove HTML tags using a regular expression
  //   var cleanText = text.replace(/<[^>]*>/g, "");

  //   // Trim any extra whitespace
  //   cleanText = cleanText.trim();

  //   // Extract the first 200 characters
  //   var first200Characters = cleanText.substring(0, 200);

  //   return first200Characters;
  // }
  const description = useCallback((text) => {
    // Remove HTML tags using a regular expression
    var cleanText = text.replace(/<[^>]*>/g, "");

    // Trim any extra whitespace
    cleanText = cleanText.trim();

    // Extract the first 200 characters
    var first200Characters = cleanText.substring(0, 200);

    return first200Characters;
  });

  return (
    <div
      href={`/blog/${blog.slug.ar}`}
      className="flex md:flex-row flex-col rounded-md overflow-hidden md:rounded-none gap-y-[12px] md:gap-x-[32px] border-2 md:border-none"
    >
      <Image
        src={blog.BlogImage}
        alt={blog.title.ar}
        width={250}
        height={266}
        className="w-full max-h-[150px] object-cover md:w-fit md:max-w-[35%] md:max-h-fit"
      />
      <div className="flex flex-col justify-between gap-[22px] p-[8px] px-[10px]">
        {" "}
        <div className="space-y-[12px]">
          {blog?.category[0] && (
            <div className="lg-text py-[5px] px-[14px] bg-lightNeutral w-fit break-keep whitespace-nowrap">
              <span className="break-keep">
                {" "}
                {language
                  ? blog?.category[0]?.categoryNameAr
                  : blog?.category[0]?.categoryNameEn}
              </span>
            </div>
          )}

          <Link
            href={`/blog/${blog.slug.ar}`}
            className="font-bold line-clamp-1"
          >
            <h3 className="text-black ">
              {language ? blog.title.ar : blog.title.en}
            </h3>
          </Link>
          <p className="text-lightGreen sm-text font-semibold">
            {formattedDate}
          </p>
          <p className="line-clamp-2 ">
            {language
              ? description(blog.description.ar)
              : description(blog.description.en)}{" "}
            ...
          </p>
        </div>
        <Link
          href={`/blog/${blog.slug.ar}`}
          className="font-bold lg-text text-lightGreen underline"
        >
          {language ? "قراءة المزيد" : "Read more"}
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
