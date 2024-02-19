import { cn } from "@/utils/cn";
import Image from "next/image";
import { useSelector } from "react-redux";
import ContactLinks from "./ContactLinks";

const PropertyOwner = ({ propertyData, className }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      className={cn(
        "bg-lightNeutral md:bg-white gap-6 md:gap-7 flex md:flex-col items-center md:justify-center  p-3 md:px-5 md:py-10  rounded md:border ",
        className
      )}
    >
      <Image
        alt={propertyData.user?.fullname}
        src={propertyData.user?.avatarUrl || "/user-avatar-placeholder.png"}
        width={70}
        height={70}
        className="rounded-full object-cover w-[43px] h-[43px] md:w-[80px] md:h-[80px]"
      />
      <div className="md:text-center">
        <p className="line-clamp-1 text-darkGray font-bold text-sm md:text-xl">
          {propertyData.user?.fullname}
        </p>
        <div className="font-medium flex gap-2 flex-wrap md:justify-center items-center">
          <p className="font-medium">5 {language ? "إعلانات" : "Properties"}</p>
          <p className="text-linkColor md:text-base text-sm underline">
            {language ? "رؤية جميع الإعلانات" : "See all properties"}
          </p>
        </div>
      </div>
      <ContactLinks propertyData={propertyData} />
    </div>
  );
};
export default PropertyOwner;
