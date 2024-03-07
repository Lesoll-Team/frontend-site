import React, { memo } from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="absolute top-0 w-full z-0">
      {/* <div className="backdrop-grayscale-200  w-full select-none bg-black/40 absolute md:h-screen  h-[313px]" /> */}
      {/*md:h-full h-[313px]  md:h-full  h-[313px]*/}
      <Image
        src="/home/home-img-hero-section.jpg"
        alt="Hero Image"
        width={1440}
        height={681}
        className="object-cover flex w-full md:h-screen lg:h-[600px]  h-[313px] brightness-50 "
        radius="none"
        priority
      />
    </div>
  );
};

export default memo(HeroSection);
