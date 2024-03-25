import { memo } from "react";
import ImageAndLogo from "./special-card/ImageAndLogo";
import TitleCard from "./special-card/TitleCard";
import UnitsTypeProject from "./special-card/UnitsTypeProject";
import SocialAndPriceProject from "./special-card/SocialAndPriceProject";

const SpecialCard = ({ cardDetails, isHome }) => {
  const cardHomeStyle = `
     bg-white
     md:w-[400px]
     w-full
     max-w-[400px]
     drop-shadow-md 
     flex flex-col
     overflow-hidden
  `;

  return (
    <div className={cardHomeStyle}>
      <ImageAndLogo isHome={isHome} cardDetails={cardDetails} />
      <div
        className="px-[20px] py-[20px] w-full h-full flex flex-col 
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
// ` min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px]  bg-white flex flex-col md:block overflow-hidden  rounded-md  drop-shadow-md  relative`;
