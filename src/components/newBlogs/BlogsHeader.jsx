import { useTranslation } from "next-i18next";
import Image from "next/image";

const BlogsHeader = () => {
  const { t } = useTranslation("common");

  return (
    <header className="w-full flex relative justify-center items-center">
      <h1 className="absolute display-text text-white z-[5] text-center">
        {t("Real_Estate_Articles")}
      </h1>
      <Image
        src={"/blog-header.png"}
        className="w-full object-cover min-h-[100px] md:min-h-[290px] max-h-[100px] md:max-h-[290px]"
        alt="man with a pen writing some blogs..."
        width={500}
        height={500}
        loading="lazy"
        quality={80}
        blurDataURL="data:image/webp;base64,UklGRoIDAABXRUJQVlA4WAoAAAAgAAAAtgAAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgglAEAABASAJ0BKrcAtwA/EX63VqwnpSOldAt5gCIJZ27d1f7V/CtB5ANgE4nE4nEpU2jav/iwBFqtmJJnAOHBzADxgLTgkwQK0L4ynWZcjdX2nxySyq2MB2+Tt8YJqXUNkseMlrxYvfvLlUlY5G/TB0D3UDqRi26qfj4P3ttxbleysd7mLxvg7ab2/pu2LVhUMmm8EbOuE92Lsu32AAD+U+fI7CG7Dl7Dk2ugXOYzHJJeAREK69iIxwZqtBeDgrVnBn3CWvLAN9O5Rv/R/54iOzzaNQ4s95IQlpReabgeM8t5vu6fKKbDz3Un9/icDgqcvhGemSwyhEUyq/so9VrcZMv5T/8Hh4BMp9l88bah9mntzFOpBJiHQVRTqcncHkLZesPw7ZcBrCbPjT/3ZcIYhS2yuNZ7RhGbbVXoqDfhSvBWnkzMw7KG+NnKXE+C7xV1cfHIy6KD+OrL1FNsGHkC5c9pN4EbgMmOrH8mRNI8evQQXivy0iR9c/wATdjSWENlZHcK1J+x2uB+wFVcGMUQVbA9aRloAAAA"
        placeholder="blur"
      />
    </header>
  );
};
export default BlogsHeader;
