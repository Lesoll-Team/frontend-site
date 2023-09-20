import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
// import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
// import "@splidejs/splide/dist/css/splide.min.css";
// import "@splidejs/splide/dist/css/splide-core.min.css";

export default function PropertyImgSlider({ images }) {
  const [newImages, setNewImages] = useState([]);
  // const [thumbnailImage, setThumbnailImage] = useState("");
  
  // console.log(thumbnailImage);
  useEffect(() => {
    const thumbnail = [{ image: images?.thumbnail, _id: Math.random() }];
    setNewImages(thumbnail.concat(images?.album));
  }, [images]);

  return (
    <div dir="ltr" className="">
      <Splide
        id="main-carousel"
        options={{
          rewind: true,
        }}
        // onMoved={(splide, newIndex) => {
        //   console.log("moved", newIndex);
        //   console.log("length", splide.length);
        // }}
        aria-label="Main Carousel"
      >
        {newImages.map((image) => (
          <SplideSlide onClick={() => console.log(image._id)} key={image._id}>
            <img
              src={image.image}
              className="w-full rounded-xl"
              alt={`Image `}
            />
          </SplideSlide>
        ))}
      </Splide>
      {/* <Splide
        id="thumbnails"
        options={{
          fixedWidth: 100,
          gap: 10,
          rewind: true,
          pagination: false,
        }}
        aria-label="Thumbnails Carousel"
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
      </Splide> */}
    </div>
  );
}
