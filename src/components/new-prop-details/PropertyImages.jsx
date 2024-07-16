import Image from "next/image";
import FavBtn from "./FavBtn";
import ShareBtn from "./ShareBtn";
import { memo, useMemo, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import TimeAge from "./TimeAge";

const PropertyImages = ({ propertyData, fav = true, query, slug }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();

  const subImages = useMemo(() => {
    return propertyData.album.map((image, index) => {
      return { link: image.image, id: index + 1 };
    });
  }, [propertyData]);
  const images = [{ link: propertyData.thumbnail, id: 0 }, ...subImages];

  // lightbox logic
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const openLightbox = (index) => {
    router.push(`${slug}?images=true`);
    setLightboxIndex(index);
  };
  const closeLightbox = () => {
    if (query?.images) router.back();
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
        <div className="flex rounded-md w-full drop-shadow-md h-full overflow-hidden bg-gray-300 relative ">
          <Image
            onClick={() => openLightbox(0)}
            width={1400}
            height={1000}
            alt={propertyData?.title || propertyData?.titleAr}
            src={propertyData?.thumbnail}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRvICAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBAEAAHAMAJ0BKoIAggA/OZC+WD6ppiOrEbsr0CcJZ27dfv8LaHrX8AY9QFUqDOPC7Kvl1mCFaUaFfBUUyI611LIlqlJJf3Phjq1OrXmRMug/OVpRyl+fbjeXT4DPgQEEEpMiI/mvfQ+9gHa8vFS58AD+6TF+T9cj7oWbmByEIF0Bq51Yg0gemEjfK1gDevGbbuLojM91eE0MzH9ZFXiw7WRzNpfOaeUhRRU51eG8kvsWktxYblds0cIR2FK7De+XvgVML9DZgNKxGLbsfPZM8+TZrGY6iIuFOMeBD5emVSb9cxgFWtDuAEeKwV6Drb1kzA+iTfpHP8lQ9Wr6AKH4igADZRHLgAAA"
            className=" object-cover"
          />
          {/*time here  */}
          <TimeAge createdAt={propertyData?.createdAt} />
        </div>
      </div>
      <div className="flex w-full rounded-md max-h-[100px] md:max-h-full bg-gray-300 drop-shadow-md h-full overflow-hidden items-stretch">
        <Image
          onClick={() => openLightbox(1)}
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={propertyData?.album[0]?.image || "/no-img-placeholder.png"}
          className="object-cover "
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRvICAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBAEAAHAMAJ0BKoIAggA/OZC+WD6ppiOrEbsr0CcJZ27dfv8LaHrX8AY9QFUqDOPC7Kvl1mCFaUaFfBUUyI611LIlqlJJf3Phjq1OrXmRMug/OVpRyl+fbjeXT4DPgQEEEpMiI/mvfQ+9gHa8vFS58AD+6TF+T9cj7oWbmByEIF0Bq51Yg0gemEjfK1gDevGbbuLojM91eE0MzH9ZFXiw7WRzNpfOaeUhRRU51eG8kvsWktxYblds0cIR2FK7De+XvgVML9DZgNKxGLbsfPZM8+TZrGY6iIuFOMeBD5emVSb9cxgFWtDuAEeKwV6Drb1kzA+iTfpHP8lQ9Wr6AKH4igADZRHLgAAA"
        />
      </div>
      <div className="flex w-full h-full drop-shadow-md max-h-[100px] md:max-h-full overflow-hidden bg-gray-300 rounded-md items-stretch">
        <Image
          onClick={() => openLightbox(2)}
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={propertyData?.album[1]?.image || "/no-img-placeholder.png"}
          className=" object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRvICAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBAEAAHAMAJ0BKoIAggA/OZC+WD6ppiOrEbsr0CcJZ27dfv8LaHrX8AY9QFUqDOPC7Kvl1mCFaUaFfBUUyI611LIlqlJJf3Phjq1OrXmRMug/OVpRyl+fbjeXT4DPgQEEEpMiI/mvfQ+9gHa8vFS58AD+6TF+T9cj7oWbmByEIF0Bq51Yg0gemEjfK1gDevGbbuLojM91eE0MzH9ZFXiw7WRzNpfOaeUhRRU51eG8kvsWktxYblds0cIR2FK7De+XvgVML9DZgNKxGLbsfPZM8+TZrGY6iIuFOMeBD5emVSb9cxgFWtDuAEeKwV6Drb1kzA+iTfpHP8lQ9Wr6AKH4igADZRHLgAAA"
        />
      </div>

      <div
        className={`flex relative drop-shadow-md max-h-[100px] md:max-h-full rounded-md justify-center  w-full h-full overflow-hidden bg-gray-300 items-stretch ${
          imagesLessThanFour && "md:col-span-2"
        }`}
      >
        {showMoreImages && (
          <button
            onClick={() => openLightbox(3)}
            className="md:hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center z-[2] text-white underline"
          >
            {language
              ? `+${images.length - 4} صورة`
              : `+${images.length - 4} Images`}
          </button>
        )}
        <Image
          onClick={() => openLightbox(3)}
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={propertyData?.album[2]?.image || "/no-img-placeholder.png"}
          className="rounded-md brightness-75 object-cover bg-gray-300 md:brightness-100 "
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRvICAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBAEAAHAMAJ0BKoIAggA/OZC+WD6ppiOrEbsr0CcJZ27dfv8LaHrX8AY9QFUqDOPC7Kvl1mCFaUaFfBUUyI611LIlqlJJf3Phjq1OrXmRMug/OVpRyl+fbjeXT4DPgQEEEpMiI/mvfQ+9gHa8vFS58AD+6TF+T9cj7oWbmByEIF0Bq51Yg0gemEjfK1gDevGbbuLojM91eE0MzH9ZFXiw7WRzNpfOaeUhRRU51eG8kvsWktxYblds0cIR2FK7De+XvgVML9DZgNKxGLbsfPZM8+TZrGY6iIuFOMeBD5emVSb9cxgFWtDuAEeKwV6Drb1kzA+iTfpHP8lQ9Wr6AKH4igADZRHLgAAA"
        />
      </div>

      {!imagesLessThanFour && (
        <div className=" drop-shadow-md md:flex hidden relative justify-center overflow-hidden rounded-md w-full h-full bg-gray-300 items-stretch">
          {showMoreImages && (
            <button
              onClick={() => openLightbox(4)}
              className="underline cursor-pointer absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:text-xl font-medium text-white text-center z-[2]"
            >
              {language ? "مشاهدة جميع الصور" : "Show all images"}{" "}
            </button>
          )}
          <Image
            onClick={() => openLightbox(4)}
            width={1400}
            height={1000}
            alt={propertyData?.title || propertyData?.titleAr}
            src={propertyData.album[3]?.image || "/no-img-placeholder.png"}
            className="rounded-md brightness-50 object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRvICAABXRUJQVlA4WAoAAAAgAAAAgQAAgQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBAEAAHAMAJ0BKoIAggA/OZC+WD6ppiOrEbsr0CcJZ27dfv8LaHrX8AY9QFUqDOPC7Kvl1mCFaUaFfBUUyI611LIlqlJJf3Phjq1OrXmRMug/OVpRyl+fbjeXT4DPgQEEEpMiI/mvfQ+9gHa8vFS58AD+6TF+T9cj7oWbmByEIF0Bq51Yg0gemEjfK1gDevGbbuLojM91eE0MzH9ZFXiw7WRzNpfOaeUhRRU51eG8kvsWktxYblds0cIR2FK7De+XvgVML9DZgNKxGLbsfPZM8+TZrGY6iIuFOMeBD5emVSb9cxgFWtDuAEeKwV6Drb1kzA+iTfpHP8lQ9Wr6AKH4igADZRHLgAAA"
          />
        </div>
      )}

      {query?.images && (
        <Lightbox
          mainSrc={images[lightboxIndex]?.link || "/no-img-placeholder.png"}
          nextSrc={images[(lightboxIndex + 1) % images.length].link}
          prevSrc={
            images[(lightboxIndex + images.length - 1) % images.length].link
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + images.length - 1) % images.length,
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
export default memo(PropertyImages);
