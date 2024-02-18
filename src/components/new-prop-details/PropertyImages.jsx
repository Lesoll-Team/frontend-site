import Image from "next/image";
import FavBtn from "./FavBtn";
import ShareBtn from "./ShareBtn";

const PropertyImages = ({ propertyData }) => {
  console.log(propertyData);
  return (
    <section className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-3 justify-center items-center">
      <div className="col-span-3 md:col-span-2 row-span-2 h-full max-h-[150px] sm:max-h-[200px] md:max-h-full flex relative">
        <div className="absolute top-3 mx-3 flex items-center gap-2">
          <FavBtn />
          <ShareBtn />
        </div>
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData.title}
          src={propertyData.thumbnail}
          className="rounded-md  object-cover"
        />
      </div>
      <Image
        priority
        width={1400}
        height={1000}
        alt={propertyData.title}
        src={propertyData.album[0].image}
        className="rounded-md "
      />
      <Image
        priority
        width={1400}
        height={1000}
        alt={propertyData.title}
        src={propertyData.album[1].image}
        className="rounded-md "
      />

      <div className={`flex relative justify-center items-center`}>
        <span className="md:hidden absolute z-[2] text-white underline">
          asc
        </span>
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData.title}
          src={propertyData.album[2].image}
          className="rounded-md brightness-75 md:brightness-100 "
        />
      </div>

      <div className="flex relative items-center justify-center">
        <span className="underline absolute font-bold text-white z-[2]">
          Show all images
        </span>
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData.title}
          src={propertyData.album[3]?.image || "/image-placeholder.svg"}
          className="rounded-md md:block hidden brightness-50"
        />
      </div>
    </section>
  );
};
export default PropertyImages;
