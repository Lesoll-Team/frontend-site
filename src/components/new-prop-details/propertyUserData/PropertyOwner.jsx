import { cn } from "@/utils/cn";
import Image from "next/image";
import { useSelector } from "react-redux";
import ContactLinks from "./ContactLinks";

const PropertyOwner = ({ propertyData, className }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div
      className={cn(
        "bg-lightNeutral md:bg-white gap-4 flex md:flex-col items-center md:justify-center p-5 rounded md:border ",
        className
      )}
    >
      <Image
        alt={propertyData.user?.fullname}
        src={propertyData.user?.avatarUrl || "/user-avatar-placeholder.png"}
        width={70}
        height={70}
        className="rounded-full object-cover"
      />
      <div className="md:text-center">
        <p className="line-clamp-1 text-darkGray font-bold text-sm md:text-xl">
          {propertyData.user?.fullname}
        </p>
        <div className="font-medium flex gap-1 flex-wrap md:justify-center">
          <p className="font-medium">5 {language ? "إعلانات" : "Properties"}</p>
          <p className="text-blue-600 underline">
            {language ? "رؤية جميع الإعلانات" : "See all properties"}
          </p>
        </div>
      </div>
      <ContactLinks propertyData={propertyData} />
    </div>
  );
};
export default PropertyOwner;
