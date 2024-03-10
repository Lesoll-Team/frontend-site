import { FaEye, FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import SectionContainer from "../SectionContainer";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";

const MainPorpInfo = ({ propertyDetails }) => {
  const openDirectionsInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${propertyDetails.getProperty.address.latitude},${propertyDetails.getProperty.address.longitude}`;
    window.open(url, "_blank");
  };
  return (
    <SectionContainer>
      <div className=" w-full space-y-3">
        <div className="flex items-center justify-between">
          <div className="p-1 px-3 bg-gray-100 flex items-center gap-1 rounded-lg">
            <FaEye className="text-cyan-600" />
            <p>{propertyDetails.getViewPage}</p>
          </div>
          <div className="p-1 px-3 bg-gray-100 flex items-center gap-1 rounded-lg">
            <FaHeart className="text-red-500" />
            <p>{propertyDetails.favoritesTotal}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className=" text-xl font-semibold">
            السعر{" "}
            <span className="text-lightGreen">
              {propertyDetails.getProperty.price.toLocaleString("ar", "Eg")}
            </span>
          </p>
          <p className="text-lightOrange font-bold">
            {propertyDetails?.getProperty.offer === "For Sale"
              ? "للبيع"
              : propertyDetails?.getProperty.offer === "For Rent"
              ? "للإيجار"
              : "للإستثمار"}
          </p>
        </div>

        <p className="text-xl xl:text-3xl font-semibold text-">
          {propertyDetails.getProperty.title}
        </p>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-lightOrange" />
          <p>
            {propertyDetails.getProperty.address.governrate},{" "}
            {propertyDetails.getProperty.address.region}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Avatar src={propertyDetails.getProperty.user.avatarUrl} />
            <Link
              className="text-lg font-medium"
              href={`/dashboard/user-details/${propertyDetails.getProperty.user.username}`}
            >
              {propertyDetails.getProperty.user.fullname}
            </Link>
          </div>
          <button
            onClick={openDirectionsInGoogleMaps}
            className="px-4 py-1 bg-darkGreen flex items-center gap-2 text-white rounded-md "
          >
            <FaLocationDot className="" />
            الموقع
          </button>
        </div>
        {/* <p>{propertyDetails.getProperty.description}</p> */}
      </div>
    </SectionContainer>
  );
};
export default MainPorpInfo;
