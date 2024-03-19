import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const ImageAndLogo = ({ cardDetails, isHome }) => {
    const language = useSelector((state) => state.GlobalState.languageIs);
    // const cardStyleCategory = " md:h-[174px] h-[145px] md:min-w-[480px] md:max-w-[480px]  min-w-[135px] max-w-[135px] flex"
    const cardHomeStyle = "h-[174px]  min-w-[400px] max-w-[480px] flex"

    return (
        <Link
            title={`${language ? cardDetails?.titleAr : cardDetails?.titleEn}`}
            key={cardDetails?._id}
            href={`/projects/${cardDetails?.slug}`}
            className={cardHomeStyle}
        >

            {cardDetails.projectLogo && <div className={`flex z-10  absolute  mt-[115px] left-[20px]`}>

                <div
                    className="  drop-shadow-md flex justify-center 
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
                className=" flex object-cover brightness-50 "
                loading="lazy"
                width={400}
                height={174}
                src={cardDetails?.thumbnail}
            />
        </Link>
    );
}

export default ImageAndLogo;
