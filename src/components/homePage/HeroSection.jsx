import React, { memo } from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="absolute top-0 w-full z-0">
      <Image
        src="/home/home-img-hero-section3.webp"
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
