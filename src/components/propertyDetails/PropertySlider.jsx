import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
export default function PropertyImgSlider({ images }) {
  // const [currentImage,setCurrentImage]=React.useState(images[0].url)
  const [newImages, setNewImages] = useState([]);
  // console.log("img",images);
  useEffect(() => {
    const thumbnail = [{ image: images?.thumbnail, _id: Math.random() }];
    setNewImages(thumbnail.concat(images?.album));
  }, [images]);
  // console.log(newImages);
  return (
    <div dir="ltr" className="  p-1 ">
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
              className="w-[100%] rounded-xl"
              alt={`Image `}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
