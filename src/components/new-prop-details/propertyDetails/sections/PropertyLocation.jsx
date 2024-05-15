import Image from "next/image";
import { MdOutlineAddLocation } from "react-icons/md";
import { useSelector } from "react-redux";

const PropertyLocation = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const openDirectionsInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${propertyData?.address.name}`;
    window.open(url, "_blank");
  };
  const address =
    propertyData.address.governrate + "," + propertyData.address.region;
  return (
    <section className="md:space-y-[32px] space-y-[16px]  p-2">
      <div className=" space-y-4">
        <h2 className=" ">{language ? "موقع العقار" : "Property Location"}</h2>
        <p className="text-baseGray sm:text-xl">{address}</p>
      </div>
      <div className="relative flex overflow-hidden  max-h-[200px] md:max-h-[303px] w-full ">
        <button
          onClick={openDirectionsInGoogleMaps}
          className="py-1 px-2 sm:py-2 sm:px-3 flex gap-2 items-center text-start absolute bottom-5 sm:bottom-10 bg-white text-blue-500 text-sm sm:text-base lg:text-xl underline"
        >
          {language ? "الموقع على الخريطة" : "Location on the map"}

          <MdOutlineAddLocation className="sm:text-2xl" />
        </button>
        <Image
          src={"/map.svg"}
          height={200}
          width={400}
          onClick={openDirectionsInGoogleMaps}
          alt="map image"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRq4DAABXRUJQVlA4WAoAAAAgAAAAiQIAwwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggwAEAADAmAJ0BKooCxAA/zebwc7+3sqygCAPwOYlpbuFoIVxv5+sh8dgAT2Ae+2UDLxcnIe+2TkPfbJyHvtoguJLtiPzyitkLzjyX6zaQ3BlZ+6mjTe/e5gzgwLpdw1dt/t7VnCwb33SfomF6De36u752Lge8nqQsfbueg3vuQ7G1Kfuu67lsl2vF2aKUF8G99yn/4KRQTid3e3OjlRw3mW7sC5E4oJxQO1vpSCEJqAdpUFBUDRVAKgTl6C/g98Ak+frLJsnxOvzOGr7Dd+Dhj/Wc70JBc7JWXPz3w1IHuwVgsqkqSek/RLlRq6Upgiz4JDuVfDv0M4oJxQTm3m3rrsb74PO8M09A+iVMfoI5xQTieFd6C9BvfdH4QfUogk5D976inf4tQbnC4nFBOKCaVBdX74TfcXoLe/s5nCsAAP71ydXsUnK6OTInLeTmVxWZaoL+oVg0Ravoc2GClHAsVCB6I4UeyK+jZOWj54O7u11KFDAISo7ryxxFG/ga55AhDYTxiAWntgZzE/ibGSurye/q1tWtiVea3xBScDXtk6DsEdW5IhtZsJh49g9vwoNc/ERW1w1HudgSNJxcihOtAIAgAAA="
          loading="lazy"
          className=" object-cover  cursor-pointer w-auto h-auto"
        />
      </div>
    </section>
  );
};
export default PropertyLocation;
