import { formatDate } from "@/utils/FormateData";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const BlogCard = ({ blog }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate } = formatDate(blog.createdAt);
  const description = useCallback((text) => {
    // Remove HTML tags using a regular expression
    let cleanText = text.replace(/<[^>]*>/g, "");
    cleanText = cleanText.trim();
    let first200Characters = cleanText.substring(0, 200);
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
        className="w-full md:w-[250px] h-[200px] md:min-h-[200px] md:max-h-[200px] object-cover md:min-w-[250px] md:max-w-[250px] "
        loading="lazy"
        quality={40}
        blurDataURL="data:image/webp;base64,UklGRoIDAABXRUJQVlA4WAoAAAAgAAAAtgAAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgglAEAABASAJ0BKrcAtwA/EX63VqwnpSOldAt5gCIJZ27d1f7V/CtB5ANgE4nE4nEpU2jav/iwBFqtmJJnAOHBzADxgLTgkwQK0L4ynWZcjdX2nxySyq2MB2+Tt8YJqXUNkseMlrxYvfvLlUlY5G/TB0D3UDqRi26qfj4P3ttxbleysd7mLxvg7ab2/pu2LVhUMmm8EbOuE92Lsu32AAD+U+fI7CG7Dl7Dk2ugXOYzHJJeAREK69iIxwZqtBeDgrVnBn3CWvLAN9O5Rv/R/54iOzzaNQ4s95IQlpReabgeM8t5vu6fKKbDz3Un9/icDgqcvhGemSwyhEUyq/so9VrcZMv5T/8Hh4BMp9l88bah9mntzFOpBJiHQVRTqcncHkLZesPw7ZcBrCbPjT/3ZcIYhS2yuNZ7RhGbbVXoqDfhSvBWnkzMw7KG+NnKXE+C7xV1cfHIy6KD+OrL1FNsGHkC5c9pN4EbgMmOrH8mRNI8evQQXivy0iR9c/wATdjSWENlZHcK1J+x2uB+wFVcGMUQVbA9aRloAAAA"
        placeholder="blur"
      />
      <div className="flex flex-col justify-between gap-[22px]  px-[10px]">
        <div className="space-y-[10px]">
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
