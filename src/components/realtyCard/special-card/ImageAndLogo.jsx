import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ImageAndLogo = ({ cardDetails, isHome }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // const cardStyleCategory = " md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"
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
     md:h-[300px]
     h-[240px]
     object-cover
     `}
        loading="lazy"
        width={500}
        height={500}
        src={cardDetails?.thumbnail}
      />
    </Link>
  );
};

export default ImageAndLogo;
//   `
//     min-h-[240px] max-h-[240px]  min-w-[320px] max-w-[320px] flex
//     md:min-h-[300px] md:max-h-[300px]  md:min-w-[400px] md:max-w-[400px] flex
//     `;
// {cardDetails.projectLogo &&
//     <div className={`flex z-10  absolute  md:mt-[245px] mt-[190px] left-[20px]`}>

//         <div
//             className="
//         bg-red-200
//         drop-shadow-md flex justify-center
//          w-[38px] h-[38px]
//           items-center
// rounded-full  text-center overflow-hidden cursor-pointer">
//             <Image src={cardDetails.projectLogo} width={100}
//                 loading="lazy" className="object-cover w-[38px] h-[38px] " height={50} alt={cardDetails.titleAr} />
//         </div>
//     </div>
// }

// " flex  md:min-h-[300px]   md:min-w-[400px] md:max-w-[400px] min-h-[240px] max-h-[240px]  min-w-[320px] max-w-[320px]  object-cover"
