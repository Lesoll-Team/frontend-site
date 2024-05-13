import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ImageAndLogo = ({ cardDetails }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const cardHomeStyle = `
     md:w-[400px]
     w-full
     max-w-[400px]
  `;

  return (
    <Link
      title={`${language ? cardDetails?.titleAr : cardDetails?.titleEn}`}
      key={cardDetails?._id}
      href={`/projects/${cardDetails?.slug}`}
      className={cardHomeStyle}
    >
      <Image
        alt={`${language ? cardDetails?.titleAr : cardDetails?.titleEn}`}
        radius="none"
        className={` w-full md:h-[300px] h-[240px] object-cover `}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRpwCAABXRUJQVlA4WAoAAAAgAAAAgQAASAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggrgAAADAIAJ0BKoIASQA/OYy6Vj6ppaSu9JtT0CcJZwaIBSMK+wc3w9wolt0xI9Ih0LbkiT5jFlmthhD+F8hxABGWhxQgTBu00Rr2dekAAP7Buijbt3iTb3XRM+9ZH9VKf8BqKtCj/mCiaQXAzSZ67W/VLmHoF+JP2oYlAqrBmBbdrd0HIPeIbXwNBsJCv1zBilNhIfBfl2b4M3EoHpYin5k3gbvrzvFbLfhkozLlghBgAA=="
        quality={70}
        width={500}
        height={500}
        src={cardDetails?.thumbnail}
      />
    </Link>
  );
};

export default ImageAndLogo;
