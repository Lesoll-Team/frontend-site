import Image from "next/image";
import FavBtn from "./FavBtn";
import ShareBtn from "./ShareBtn";
import { useMemo, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useSelector } from "react-redux";
const PropertyImages = ({ propertyData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  // to cmbine the thumbnail and the subImages in ine array to use in lightbox
  const subImages = useMemo(() => {
    return propertyData.album.map((image, index) => {
      return { link: image.image, id: index + 1 };
    });
  }, []);
  const images = [{ link: propertyData.thumbnail, id: 0 }, ...subImages];

  // lightbox logic
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightbox = (index) => {
    setLightboxIsOpen(true);
    setLightboxIndex(index);
  };
  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  // used to contro conditional redering and layout of images and text on images
  const showMoreImages = propertyData.album.length > 4;
  const imagesLessThanFour = propertyData.album.length < 4;

  return (
    <section className="grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-3 justify-center items-center max-h-[550px]">
      <div className="col-span-3 md:col-span-2 row-span-2 h-full max-h-[150px] sm:max-h-[200px] md:max-h-full flex relative">
        <div className="absolute top-3 mx-3 flex items-center gap-2">
          <FavBtn />
          <ShareBtn />
        </div>
        <div
          role="button"
          onClick={() => openLightbox(0)}
          className="flex rounded-md w-full h-full overflow-hidden"
        >
          <Image
            priority
            width={1400}
            height={1000}
            alt={propertyData.title}
            src={propertyData.thumbnail}
            className="rounded-md  object-cover"
          />
        </div>
      </div>
      <div
        role="button"
        onClick={() => openLightbox(1)}
        className="flex w-full rounded-md h-full overflow-hidden"
      >
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData.title}
          src={propertyData.album[0].image}
          className="rounded-md object-cover"
        />
      </div>
      <div
        role="button"
        onClick={() => openLightbox(2)}
        className="flex w-full h-full overflow-hidden"
      >
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData.title}
          src={propertyData.album[1].image}
          className="rounded-md object-cover"
        />
      </div>

      <div
        role="button"
        onClick={() => openLightbox(3)}
        className={`flex relative rounded-md justify-center items-center w-full h-full overflow-hidden ${
          imagesLessThanFour && "md:col-span-2"
        }`}
      >
        {showMoreImages && (
          <span className="md:hidden absolute z-[2] text-white underline">
            asc
          </span>
        )}
        <Image
          priority
          width={1400}
          height={1000}
          alt={propertyData.title}
          src={propertyData.album[2].image}
          className="rounded-md brightness-75 object-cover md:brightness-100 "
        />
      </div>

      {!imagesLessThanFour && (
        <div className="  md:flex hidden relative items-center justify-center overflow-hidden rounded-md w-full h-full">
          {showMoreImages && (
            <span className="underline absolute lg:text-xl font-medium text-white text-center z-[2]">
              {language ? "مشاهدة جميع الصور" : "Show all images"}{" "}
            </span>
          )}
          <Image
            role="button"
            onClick={() => openLightbox(4)}
            priority
            width={1400}
            height={1000}
            alt={propertyData.title}
            src={propertyData.album[3]?.image || "/image-placeholder.svg"}
            className="rounded-md brightness-50"
          />
        </div>
      )}

      {lightboxIsOpen && (
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
