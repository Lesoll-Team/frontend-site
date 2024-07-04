import { getLangBoolean } from "@/utils/getLangBoolean";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const SimilarBlogs = ({ blog }) => {
  const language = getLangBoolean();

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
          className="flex"
        >
          <Image
            src={blog[i]?.slug?.BlogImage}
            width={100}
            height={100}
            alt="similar image"
            className="md:h-[85px]  md:w-[100px] h-[60px] w-[60px]"
            loading="lazy"
            quality={40}
            blurDataURL="data:image/webp;base64,UklGRoIDAABXRUJQVlA4WAoAAAAgAAAAtgAAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgglAEAABASAJ0BKrcAtwA/EX63VqwnpSOldAt5gCIJZ27d1f7V/CtB5ANgE4nE4nEpU2jav/iwBFqtmJJnAOHBzADxgLTgkwQK0L4ynWZcjdX2nxySyq2MB2+Tt8YJqXUNkseMlrxYvfvLlUlY5G/TB0D3UDqRi26qfj4P3ttxbleysd7mLxvg7ab2/pu2LVhUMmm8EbOuE92Lsu32AAD+U+fI7CG7Dl7Dk2ugXOYzHJJeAREK69iIxwZqtBeDgrVnBn3CWvLAN9O5Rv/R/54iOzzaNQ4s95IQlpReabgeM8t5vu6fKKbDz3Un9/icDgqcvhGemSwyhEUyq/so9VrcZMv5T/8Hh4BMp9l88bah9mntzFOpBJiHQVRTqcncHkLZesPw7ZcBrCbPjT/3ZcIYhS2yuNZ7RhGbbVXoqDfhSvBWnkzMw7KG+NnKXE+C7xV1cfHIy6KD+OrL1FNsGHkC5c9pN4EbgMmOrH8mRNI8evQQXivy0iR9c/wATdjSWENlZHcK1J+x2uB+wFVcGMUQVbA9aRloAAAA"
            placeholder="blur"
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
