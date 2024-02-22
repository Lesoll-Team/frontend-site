import { formatDate } from "@/utils/FormateData";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

const BlogCard = ({ blog }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate } = formatDate(blog.createdAt);
  function extractFirst200Characters(text) {
    // Remove HTML tags using a regular expression
    var cleanText = text.replace(/<[^>]*>/g, "");

    // Trim any extra whitespace
    cleanText = cleanText.trim();

    // Extract the first 200 characters
    var first200Characters = cleanText.substring(0, 200);

    return first200Characters;
  }
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
    <div className="flex md:flex-row flex-col gap-y-[12px] md:gap-x-[32px] border-2 md:border-none">
      <Image
        src={blog.BlogImage}
        alt={blog.title.ar}
        width={250}
        height={266}
        className="w-full max-h-[150px] object-cover md:w-fit md:max-h-fit"
      />
      <div className="flex flex-col justify-between gap-[22px] p-[8px] px-[10px]">
        {" "}
        <div className="space-y-[12px]">
          <div className="py-[5px] px-[14px] bg-lightNeutral w-fit">
            {"العقارات السكنية"}
          </div>
          <Link
            href={`/blog/${blog.slug.ar}`}
            className="text-sm md:text-xl font-bold line-clamp-1"
          >
            {language ? blog.title.ar : blog.title.en}
          </Link>
          <p className="text-lightGreen text-base font-semibold">
            {formattedDate}
          </p>
          <p className="line-clamp-2 text-xl">
            {language
              ? description(blog.description.ar)
              : description(blog.description.en)}{" "}
            ...
          </p>
        </div>
        <Link
          href={`/blog/${blog.slug.ar}`}
          className="font-bold text-lightGreen underline"
        >
          {language ? "قراءة المزيد" : "Read more"}
        </Link>
      </div>
    </div>
  );
};
export default BlogCard;
