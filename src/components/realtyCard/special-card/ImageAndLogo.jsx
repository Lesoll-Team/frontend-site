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
