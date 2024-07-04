import { getLangBoolean } from "@/utils/getLangBoolean";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageAndLogo = ({ cardDetails }) => {
  const language = getLangBoolean();

  const cardHomeStyle = `md:w-[400px] w-full max-w-[400px]`;

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
        className={`
     w-full
     object-cover
     `}
        priority
        width={500}
        height={500}
        src={cardDetails?.thumbnail}
      />
    </Link>
  );
};

export default ImageAndLogo;
