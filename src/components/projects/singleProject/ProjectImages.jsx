import Image from "next/image";
import FavBtn from "@/components/new-prop-details/FavBtn";
import ShareBtn from "@/components/new-prop-details/ShareBtn";
import { useMemo, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
const ProjectImages = ({ propertyData, fav = true, query, slug }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const { windowWidth } = useWindowWidth();
  // to cmbine the thumbnail and the subImages in ine array to use in lightbox
  const subImages = useMemo(() => {
    return propertyData.album.map((image, index) => {
      return { link: image.image, id: index + 1 };
    });
  }, [propertyData]);
  //   const images = [{ link: propertyData.thumbnail, id: 0 }, ...subImages];
  const images = useMemo(() => {
    if (windowWidth < 768) {
      return subImages;
    } else {
      return [{ link: propertyData.thumbnail, id: 0 }, ...subImages];
    }
  }, [windowWidth, propertyData]);
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
        <div
          onClick={() => openLightbox(0)}
          className="flex rounded-md w-full drop-shadow-md h-full overflow-hidden relative min-h-[155px] bg-gray-300 md:brightness-100 "
        >
          <div className="md:hidden absolute w-full h-full bg-black bg-opacity-50 gap-1 px-4 flex flex-col  justify-center">
            <h3 className="text-white text-[19px] font-semibold">
              {language ? propertyData.titleAr : propertyData.titleEn}
            </h3>
            <div className="space-y-2">
              <p className="text-xs text-white font-light">
                {language ? "أسعار تبدأ من:" : "Starrting from:"}
              </p>
              <p className=" text-white font-bold">
                {propertyData.priceFrom} {language ? "ج.م" : "Egp"}
              </p>
            </div>
            <div
              className={`absolute md:hidden block bottom-3 ${language ? "left-3" : "right-3"}`}
            >
              {propertyData.projectLogo && (
                <Image
                  src={propertyData.projectLogo}
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] object-cover rounded-full"
                  alt="company logo"
                />
              )}
            </div>
          </div>
          <Image
            width={1400}
            height={1000}
            alt={propertyData?.title || propertyData?.titleAr}
            src={images[0].link}
            className=" object-cover"
            placeholder="blur"
            loading="lazy"
            quality={80}
            blurDataURL="data:image/webp;base64,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"
          />
        </div>
      </div>
      <div
        onClick={() => openLightbox(1)}
        className="flex w-full rounded-md max-h-[100px] md:max-h-full bg-gray-300 drop-shadow-md h-full overflow-hidden items-stretch"
      >
        <Image
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={images[1].link}
          className="object-cover "
          placeholder="blur"
          loading="lazy"
          quality={80}
          blurDataURL="data:image/webp;base64,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"
        />
      </div>
      <div
        onClick={() => openLightbox(2)}
        className="flex w-full h-full drop-shadow-md max-h-[100px] md:max-h-full overflow-hidden bg-gray-300 rounded-md items-stretch"
      >
        <Image
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={images[2].link}
          className=" object-cover"
          placeholder="blur"
          loading="lazy"
          quality={80}
          blurDataURL="data:image/webp;base64,UklGRswIAABXRUJQVlA4WAoAAAAgAAAAbAMAAQIASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg3gYAALCZAJ0BKm0DAgI+7XaxVS0zryMhUdoicB2JaW7haArzXQAXmdneF5vSN+f0AKzhAwcjkH9wYjbuhMIMHWyrUw7Kjkcg/uDIQMHK/93Qwe+4q/HBQdyu4eWCObSFhLf/gRah7Ms8j20bIpCHS0WD/d6PST62sp6Sf1Nxf3ej0k/qbhYAgJe86xmq9gUDLE3F/d6PRwG0npJ++RihKkoO5tJ6Sf1Nxfz4ZaDbFZblxgP93o9JOmyaEcrkYoSnnYfcjFCk3pJ/U3F/d6PST+pQv+YmgWz3o9JOmwWZP41sPuRihKedh9yMUJTzss2k9JP6m4v7vRLSf0hneqxNwqEp52H3IxQlPOw+5GKEp52H3IxQlSUHc2k9JP6m4v7vR5ocepIt72QKEp52H3IxQlPOw+5GKEp52H3IxQlPIk+5GKEp6JP6m4v7vIVv/GtYdyMUJTzsPuRihKedh9yMUJTzsPuRigy9pR0/jWw+5GKEqRsobSOT+nJCd75GKEp52H3IxQlPOw+5GKEp52HzMdjsdjs8pqEpxY7HZ5TUJTzsPuRihJe6w7kYoSnnYfcjFCU87D7kYoSnnYLPmOxihZ3vsCM3cIIkfjDvglVstS9uB4PoFGN1n/jWw+49cJTzsPuRihKedh9yMUJTzsPuRidlGKjcKJA8tlWph2U21ZT+jDJjsdjsdjsdmMRJ/Gth2aMUJTzsPuRihKedh8zHYxQzHAo+XKjkcg/uDIQg+oXpo0+7mpqxfyzJ/Gth9yMUJTzsPuRdz5jsYoZjgeDHYhxyD+4MhAwcjkH4CBb3yMUJTzsPuRihKedgs+Y7GKGY0y6wsDUGIccg/uDIQMHI5B90Yk+5GKEp52H3IxQlOLHY7GKGY0y6n9bKoD2RqYdlRyOQf3BkHj0QLe+RihKedh9yMTsoxUbhPZl1hWYKtRnWIyEDByOQf3BkIF6VYv5Zk/jWw+5GKEe2k+Y03NkUIm0utbrSsq1MOyo5HIP7gxFn6MI/jWw+5GKEe2k9nOPrj42aQLajOsRkIGDkcg/uDIQMHpH+70ekT+NbBaCrXsxLiwh5bKoD2RqYdlRyOQf3BkIG+0sKMsDfdarJBOWt2aQLajOsRkIGDkcg/uDIQMGKfEkQrnc09D45tP067IgTBIreTyD+4MhAwcjkH9wTgY4ExstJ/UFkQAdvsTETMVPIPxrSsq1MOyo5HIP7gyFTE3F/d6PSJ/Gtgs+k92nsIGDHF6dsEjzKtTDsqORvVGbi/u9HnPU4sCJiBy9e2UGITFTyD8a0rKtTDsqORyD+4MhbxNxf3ejZWYwDEgSjEFKFIreJda3WlZVqYdlRyOQf3BkKmF2L+70ekn8KSp8voULXOdQUyo5FHFpdbKtTDsqORyD+3g2sX93k0Rf8tiQag4GaeBoZ4DPs2LvHmO9LEE2NvHmO9LEE2WMxqP7enu9HpJ/U10X2B9OAGGaOmxt48x3pYgmxt48x3pYgnLa/CgZqus7eWiwf7vRr2RXEhQtMAliHHIP7gyEDByOQf1rK3rZV0zHuCM1A/Ym4vC/l31aSctlWph2VHI5B/cGKmji0utnxle1Zir/m2SJRqbrSsq1MOyo5HIP7gyEDOaQNy0Vw9Duxuzt/aqI4a3WlZVqYdlRyOQf3BhgAAP75Ury/VCWPqWhkCQ5gWtlmjZFmjZFmz9g85+oDC/DFh3gTfHCeujefzmsNldXRQJEBMG+c8aOyt6+fIEtanM5dE3khPcoj6gr1YSPARtoeW5YxF44OvlTRmkVTzkkpC9Tu2fbEwG54NA7MafhLqjZew8nu/jN9LYA2MIioO8JMHH0xcK1sHBJwphHiZJRYxOMtlW4Iidwba1uCVv5MWh5FvVXuDhBNgb4+b789ZdHfy3TkAQsmtDwrg6kB2RTK0XX6ofn5b9rgijBjzKDSSOPTcplS0Bvs+NOUtTgm3xkqaROiGLHyLYys8gHY+lXllRxcLcNipzbd9UD3Ei117QoIJ58V9O11U+JeFat5NQN4z+h2ZP2cnDWvYAeuEqAcy82FQA+ppVl9k8DpK5CWVBKbMq1OHf8t9jeQBetCQLTcdyrXBXvO5bTTeQDo5NQNmG3EqoYbotJyWgfAXiK44sf+Ecz8bIfDjABHSMi2aiFm0ViSUYQAkgLwW9aNA+3cCALz3zWBhE5C64AAnxLG+u8atHoBlA3zWqezTMhAFARiDAyGNIj2oCyoBZcRVf4ka6Ot1TAtghrsxFW65MVlhJZeZxEBvej+56GVqs7aQI7KARG32153ck+qX4TeMdPHCHuXLt7bYQHBgroHhNBfCiTNIcSFBgoHS0vNnwv3QAF6Ks2gpwAAAA=="
        />
      </div>

      <div
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
          width={1400}
          height={1000}
          alt={propertyData?.title || propertyData?.titleAr}
          src={images[3].link}
          className="rounded-md brightness-75 object-cover bg-gray-300 md:brightness-100 "
          placeholder="blur"
          loading="lazy"
          quality={80}
          blurDataURL="data:image/webp;base64,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"
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
            width={1400}
            height={1000}
            alt={propertyData?.title || propertyData?.titleAr}
            src={images[4].link}
            className="rounded-md brightness-50 object-cover"
            placeholder="blur"
            loading="lazy"
            quality={80}
            blurDataURL="data:image/webp;base64,UklGRswIAABXRUJQVlA4WAoAAAAgAAAAbAMAAQIASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg3gYAALCZAJ0BKm0DAgI+7XaxVS0zryMhUdoicB2JaW7haArzXQAXmdneF5vSN+f0AKzhAwcjkH9wYjbuhMIMHWyrUw7Kjkcg/uDIQMHK/93Qwe+4q/HBQdyu4eWCObSFhLf/gRah7Ms8j20bIpCHS0WD/d6PST62sp6Sf1Nxf3ej0k/qbhYAgJe86xmq9gUDLE3F/d6PRwG0npJ++RihKkoO5tJ6Sf1Nxfz4ZaDbFZblxgP93o9JOmyaEcrkYoSnnYfcjFCk3pJ/U3F/d6PST+pQv+YmgWz3o9JOmwWZP41sPuRihKedh9yMUJTzss2k9JP6m4v7vRLSf0hneqxNwqEp52H3IxQlPOw+5GKEp52H3IxQlSUHc2k9JP6m4v7vR5ocepIt72QKEp52H3IxQlPOw+5GKEp52H3IxQlPIk+5GKEp6JP6m4v7vIVv/GtYdyMUJTzsPuRihKedh9yMUJTzsPuRigy9pR0/jWw+5GKEqRsobSOT+nJCd75GKEp52H3IxQlPOw+5GKEp52HzMdjsdjs8pqEpxY7HZ5TUJTzsPuRihJe6w7kYoSnnYfcjFCU87D7kYoSnnYLPmOxihZ3vsCM3cIIkfjDvglVstS9uB4PoFGN1n/jWw+49cJTzsPuRihKedh9yMUJTzsPuRidlGKjcKJA8tlWph2U21ZT+jDJjsdjsdjsdmMRJ/Gth2aMUJTzsPuRihKedh8zHYxQzHAo+XKjkcg/uDIQg+oXpo0+7mpqxfyzJ/Gth9yMUJTzsPuRdz5jsYoZjgeDHYhxyD+4MhAwcjkH4CBb3yMUJTzsPuRihKedgs+Y7GKGY0y6wsDUGIccg/uDIQMHI5B90Yk+5GKEp52H3IxQlOLHY7GKGY0y6n9bKoD2RqYdlRyOQf3BkHj0QLe+RihKedh9yMTsoxUbhPZl1hWYKtRnWIyEDByOQf3BkIF6VYv5Zk/jWw+5GKEe2k+Y03NkUIm0utbrSsq1MOyo5HIP7gxFn6MI/jWw+5GKEe2k9nOPrj42aQLajOsRkIGDkcg/uDIQMHpH+70ekT+NbBaCrXsxLiwh5bKoD2RqYdlRyOQf3BkIG+0sKMsDfdarJBOWt2aQLajOsRkIGDkcg/uDIQMGKfEkQrnc09D45tP067IgTBIreTyD+4MhAwcjkH9wTgY4ExstJ/UFkQAdvsTETMVPIPxrSsq1MOyo5HIP7gyFTE3F/d6PSJ/Gtgs+k92nsIGDHF6dsEjzKtTDsqORvVGbi/u9HnPU4sCJiBy9e2UGITFTyD8a0rKtTDsqORyD+4MhbxNxf3ejZWYwDEgSjEFKFIreJda3WlZVqYdlRyOQf3BkKmF2L+70ekn8KSp8voULXOdQUyo5FHFpdbKtTDsqORyD+3g2sX93k0Rf8tiQag4GaeBoZ4DPs2LvHmO9LEE2NvHmO9LEE2WMxqP7enu9HpJ/U10X2B9OAGGaOmxt48x3pYgmxt48x3pYgnLa/CgZqus7eWiwf7vRr2RXEhQtMAliHHIP7gyEDByOQf1rK3rZV0zHuCM1A/Ym4vC/l31aSctlWph2VHI5B/cGKmji0utnxle1Zir/m2SJRqbrSsq1MOyo5HIP7gyEDOaQNy0Vw9Duxuzt/aqI4a3WlZVqYdlRyOQf3BhgAAP75Ury/VCWPqWhkCQ5gWtlmjZFmjZFmz9g85+oDC/DFh3gTfHCeujefzmsNldXRQJEBMG+c8aOyt6+fIEtanM5dE3khPcoj6gr1YSPARtoeW5YxF44OvlTRmkVTzkkpC9Tu2fbEwG54NA7MafhLqjZew8nu/jN9LYA2MIioO8JMHH0xcK1sHBJwphHiZJRYxOMtlW4Iidwba1uCVv5MWh5FvVXuDhBNgb4+b789ZdHfy3TkAQsmtDwrg6kB2RTK0XX6ofn5b9rgijBjzKDSSOPTcplS0Bvs+NOUtTgm3xkqaROiGLHyLYys8gHY+lXllRxcLcNipzbd9UD3Ei117QoIJ58V9O11U+JeFat5NQN4z+h2ZP2cnDWvYAeuEqAcy82FQA+ppVl9k8DpK5CWVBKbMq1OHf8t9jeQBetCQLTcdyrXBXvO5bTTeQDo5NQNmG3EqoYbotJyWgfAXiK44sf+Ecz8bIfDjABHSMi2aiFm0ViSUYQAkgLwW9aNA+3cCALz3zWBhE5C64AAnxLG+u8atHoBlA3zWqezTMhAFARiDAyGNIj2oCyoBZcRVf4ka6Ot1TAtghrsxFW65MVlhJZeZxEBvej+56GVqs7aQI7KARG32153ck+qX4TeMdPHCHuXLt7bYQHBgroHhNBfCiTNIcSFBgoHS0vNnwv3QAF6Ks2gpwAAAA=="
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
export default ProjectImages;
