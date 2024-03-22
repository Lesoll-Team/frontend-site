import Image from "next/image";
import FavBtn from "./FavBtn";
import ShareBtn from "./ShareBtn";
import { useMemo, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const PropertyImages = ({ propertyData, fav = true, query, slug }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();

  // to cmbine the thumbnail and the subImages in ine array to use in lightbox
  const subImages = useMemo(() => {
    return propertyData.album.map((image, index) => {
      return { link: image.image, id: index + 1 };
    });
  }, []);
  const images = [{ link: propertyData.thumbnail, id: 0 }, ...subImages];

  // lightbox logic
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightbox = (index) => {
    router.push(`${slug}?images=true`);
    setLightboxIndex(index);
  };
  const closeLightbox = () => {
    router.push(`${slug}?images=`);
  };

  // used to contro conditional redering and layout of images and text on images
  const showMoreImages = propertyData.album.length > 4;
  const imagesLessThanFour = propertyData.album.length < 4;

  return (
    <section className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-3 justify-center items-center max-h-[550px]">
      <div className="col-span-3 md:col-span-2 row-span-2 h-full max-h-[150px] sm:max-h-[200px] md:max-h-full flex relative">
        {fav && (
          <div className="absolute top-4 mx-4 z-[5] flex items-center gap-2">
            <FavBtn id={propertyData._id} />
            <ShareBtn propertyData={propertyData} />
          </div>
        )}
        <div
          role="button"
          onClick={() => openLightbox(0)}
          className="flex rounded-md w-full drop-shadow-md h-full overflow-hidden bg-gray-300 "
        >
          <Image
            priority
            width={1400}
            height={1000}
            alt={propertyData?.title || propertyData?.titleAr}
            src={propertyData?.thumbnail}
            className=" object-cover"
          />
        </div>
      </div>
      <div
        role="button"
        onClick={() => openLightbox(1)}
        className="flex w-full rounded-md max-h-[100px] md:max-h-full bg-gray-300 drop-shadow-md h-full overflow-hidden items-stretch"
      >
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={propertyData?.album[0]?.image}
          className="object-cover "
        />
      </div>
      <div
        role="button"
        onClick={() => openLightbox(2)}
        className="flex w-full h-full drop-shadow-md max-h-[100px] md:max-h-full overflow-hidden bg-gray-300 rounded-md items-stretch"
      >
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={propertyData?.album[1]?.image}
          className=" object-cover"
        />
      </div>

      <div
        role="button"
        onClick={() => openLightbox(3)}
        className={`flex relative drop-shadow-md max-h-[100px] md:max-h-full rounded-md justify-center  w-full h-full overflow-hidden bg-gray-300 items-stretch ${
          imagesLessThanFour && "md:col-span-2"
        }`}
      >
        {showMoreImages && (
          <span className="md:hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center z-[2] text-white underline">
            {language
              ? `+${images.length - 4} صورة`
              : `+${images.length - 4} Images`}
          </span>
        )}
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={propertyData?.album[2]?.image}
          className="rounded-md brightness-75 object-cover bg-gray-300 md:brightness-100 "
        />
      </div>

      {!imagesLessThanFour && (
        <div
          onClick={() => openLightbox(4)}
          className=" drop-shadow-md md:flex hidden relative justify-center overflow-hidden rounded-md w-full h-full bg-gray-300 items-stretch"
        >
          {showMoreImages && (
            <span className="underline cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-xl font-medium text-white text-center z-[2]">
              {language ? "مشاهدة جميع الصور" : "Show all images"}{" "}
            </span>
          )}
          <Image
            role="button"
            priority
            width={1400}
            height={1000}
            alt={propertyData?.title || propertyData?.titleAr}
            src={propertyData.album[3]?.image || "/image-placeholder.svg"}
            className="rounded-md brightness-50 object-cover"
          />
        </div>
      )}

      {query?.images && (
        <Lightbox
          mainSrc={images[lightboxIndex].link}
          nextSrc={images[(lightboxIndex + 1) % images.length].link}
          prevSrc={
            images[(lightboxIndex + images.length - 1) % images.length].link
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % images.length)
          }
        />
      )}
    </section>
  );
};
export default PropertyImages;
