import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const ImageAndLogo = ({ cardDetails, isHome }) => {
    const language = useSelector((state) => state.GlobalState.languageIs);
    // const cardStyleCategory = " md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"
    const cardHomeStyle = `
    min-h-[240px] max-h-[240px]  min-w-[320px] max-w-[320px] flex
    md:min-h-[300px] md:max-h-[300px]  md:min-w-[400px] md:max-w-[400px] flex
    `

    return (
        <Link
            title={`${language ? cardDetails?.titleAr : cardDetails?.titleEn}`}
            key={cardDetails?._id}
            href={`/projects/${cardDetails?.slug}`}
            className={cardHomeStyle}
        >

            {cardDetails.projectLogo &&
                <div className={`flex z-10  absolute  md:mt-[245px] mt-[190px] left-[20px]`}>

                    <div
                        className=" 
                    bg-red-200
                    drop-shadow-md flex justify-center 
                     w-[38px] h-[38px]
                      items-center 
            rounded-full  text-center overflow-hidden cursor-pointer">
                        <Image src={cardDetails.projectLogo} width={100}
                            loading="lazy" className="object-cover w-[38px] h-[38px] " height={50} alt={cardDetails.titleAr} />
                    </div>
                </div>
            }
            <Image
                alt={`${language ? cardDetails?.titleAr : cardDetails?.titleEn}`}
                radius="none"
                className=" flex  md:min-h-[300px] md:max-h-[300px]  md:min-w-[400px] md:max-w-[400px] min-h-[240px] max-h-[240px]  min-w-[320px] max-w-[320px]  object-cover"
                loading="lazy"
                width={320}
                height={240}
                src={cardDetails?.thumbnail}
            />
        </Link>
    );
}

export default ImageAndLogo;
