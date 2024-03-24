import { memo } from "react";
import ImageAndLogo from "./special-card/ImageAndLogo";
import TitleCard from "./special-card/TitleCard";
import UnitsTypeProject from "./special-card/UnitsTypeProject";
import SocialAndPriceProject from "./special-card/SocialAndPriceProject";

const SpecialCard = ({ cardDetails, isHome }) => {
  const cardHomeStyle = ` min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px]  bg-white flex flex-col md:block overflow-hidden  rounded-md  drop-shadow-md  relative`
  // const cardStyleCategory = "md:max-w-[400px] md:h-[355px] h-[145px]  flex   md:block overflow-hidden rounded-md bg-white drop-shadow-md  relative"max-w-[400px] md:min-w-[380px] min-w-[300px]

  return (
    <div
      className={cardHomeStyle}
    >
      <ImageAndLogo isHome={isHome} cardDetails={cardDetails} />

      <div className="px-[20px] py-[20px] w-full h-full flex flex-col 
      md:gap-y-[12px]
      gap-y-[8px]
      "
      >
        <TitleCard cardDetails={cardDetails} />
        <UnitsTypeProject cardDetails={cardDetails} />
        <SocialAndPriceProject cardDetails={cardDetails} />

      </div>

    </div>
  );
};
export default memo(SpecialCard);
