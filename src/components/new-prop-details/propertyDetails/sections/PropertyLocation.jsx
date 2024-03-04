import Image from "next/image";
import { MdOutlineAddLocation } from "react-icons/md";
import { useSelector } from "react-redux";

const PropertyLocation = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const openDirectionsInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${propertyData?.address.latitude},${propertyData?.address.longitude}`;
    window.open(url, "_blank");
  };
  const address =
    propertyData.address.governrate + "," + propertyData.address.region;
  return (
    <section className="md:space-y-[32px] space-y-[16px]">
      <div className=" space-y-1">
        <h3 className="text-sm sm:text-3xl ">
          {language ? "موقع العقار" : "Property Location"}
        </h3>
        <p className="text-baseGray sm:text-xl">{address}</p>
      </div>
      <div className="relative">
        <button
          onClick={openDirectionsInGoogleMaps}
          className="py-1 px-2 sm:py-2 sm:px-3 flex gap-2 items-center text-start absolute bottom-5 sm:bottom-10 bg-white text-blue-500 text-sm sm:text-base lg:text-xl underline"
        >
          {language ? "الموقع على الخريطة" : "Location on the map"}

          <MdOutlineAddLocation className="sm:text-2xl" />
        </button>
        <Image
          src={"/map-placeholder.svg"}
          height={303}
          width={798}
          alt="map image"
          className="w-full object-cover  "
        />
      </div>
    </section>
  );
};
export default PropertyLocation;
