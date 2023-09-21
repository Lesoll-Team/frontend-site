import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the styles
export default function PropertyImgSlider({ images }) {
  const [newImages, setNewImages] = useState([]);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const thumbnail = [{ image: images?.thumbnail, _id: Math.random() }];
    setNewImages(thumbnail.concat(images?.album));
  }, [images]);

  const openLightbox = (index) => {
    setLightboxIsOpen(true);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div dir="ltr" className="">
      <Splide
        id="main-carousel"
        options={{
          rewind: true,
        }}
        aria-label="Main Carousel"
      >
        {newImages.map((image, index) => (
          <SplideSlide key={image._id}>
            <img
              src={image.image}
              className="w-full rounded-xl"
              alt={`Image ${image.image}`}
              onClick={() => openLightbox(index)}
            />
          </SplideSlide>
        ))}
      </Splide>

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={newImages[lightboxIndex].image}
          nextSrc={newImages[(lightboxIndex + 1) % newImages.length].image}
          prevSrc={newImages[(lightboxIndex + newImages.length - 1) % newImages.length].image}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setLightboxIndex((lightboxIndex + newImages.length - 1) % newImages.length)}
          onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % newImages.length)}
        />
      )}
    </div>
  );
}

// import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
// import "@splidejs/splide/dist/css/splide.min.css";
// import "@splidejs/splide/dist/css/splide-core.min.css";
/* <Splide
        id="thumbnails"
        options={{
          fixedWidth: 100,
          gap: 10,
          rewind: true,
          pagination: false,
        }}
        aria-label="Thumbnails Carousel"
                // onMoved={(splide, newIndex) => {
        //   console.log("moved", newIndex);
        //   console.log("length", splide.length);
        // }}
      >
        {newImages.map((image, index) => (
          <SplideSlide key={index}>
            <img
              onClick={()=> setThumbnailImage(image._id)}
              src={image.image}
              className="w-[100%] thumbnail"
              alt={`Thumbnail ${index}`}
            />
          </SplideSlide>
        ))}
      </Splide> */
