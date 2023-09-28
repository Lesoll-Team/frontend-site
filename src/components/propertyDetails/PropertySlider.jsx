import React, { useCallback, useEffect, useState } from "react";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import the styles
import { Image } from "@nextui-org/react";

import useEmblaCarousel from "embla-carousel-react";

export default function PropertyImgSlider({ images }) {
  const [newImages, setNewImages] = useState([]);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [displayedImg, setDisplayedImg] = useState("");
  useEffect(() => {
    const thumbnail = [{ image: images?.thumbnail, _id: Math.random() }];
    setNewImages(thumbnail.concat(images?.album));
  }, [images]);
  useEffect(() => {
    setDisplayedImg(newImages[0]);
  }, [newImages]);
  const openLightbox = (index) => {
    setLightboxIsOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);
  return (
    //   <div
    //   dir="ltr"
    //   className="animate-appearance-in bg-white drop-shadow-lg p-5 border  rounded-lg"
    // >
    <div dir="ltr" className="animate-appearance-in bg-white">
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {newImages.map((img, index) => (
              <div className="embla__slide" key={index}>
                <Image
                  onClick={() => {
                    openLightbox(index);
                  }}
                  classNames=" w-full h-full"
                  loading="lazy"
                  className="embla__slide__img"
                  src={img?.image}
                  alt="Your alt text"
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {newImages.map((img, index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={img?.image}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={newImages[lightboxIndex].image}
          nextSrc={newImages[(lightboxIndex + 1) % newImages.length].image}
          prevSrc={
            newImages[(lightboxIndex + newImages.length - 1) % newImages.length]
              .image
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + newImages.length - 1) % newImages.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % newImages.length)
          }
        />
      )}
    </div>
  );
}

const Thumb = (props) => {
  const { selected, imgSrc, index, onClick } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        className="embla-thumbs__slide__button"
        type="button"
      >
        <div className="embla-thumbs__slide__number">
          <span>{index + 1}</span>
        </div>
        <img
          className="embla-thumbs__slide__img"
          src={imgSrc}
          alt="Your alt text"
        />
      </button>
    </div>
  );
};
