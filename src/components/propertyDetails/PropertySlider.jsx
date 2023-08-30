import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {ar} from "../../language/ar/common"
import {en} from "../../language/en/common"
export default function PropertyImgSlider({ images }) {
    // const [currentImage,setCurrentImage]=React.useState(images[0].url)
  return (
    <div className="  p-1 ">
      <Splide
        id="main-carousel"
        options={{
          rewind: true,
          // pagination: false,
        //   arrows: false,
          // lazyLoad: "sequential",
        }}
        aria-label="Main Carousel"
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              src={image.url}
              className="w-[100%] rounded-xl"
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
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img
              onClick={() => setCurrentImage(image.url)}
              src={image.url}
              className="w-[100%] thumbnail"
              alt={`Thumbnail ${index}`}
            />
          </SplideSlide>
        ))}
      </Splide> */}
    </div>
  );
}

/**
    <Carousel showArrows={true} className='w-11/12 '>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/035-1170x785.jpg" className='rounded-lg' />
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/036-592x444.jpg"  className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/045-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/030-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/012-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/008-592x444.jpg" className='rounded-lg'/>
    </div>
    <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/012-592x444.jpg" className='rounded-lg'/>
    </div>
      <div>
        <img loading='lazy' src="https://demo01.houzez.co/wp-content/uploads/2016/03/018-592x444.jpg" className='rounded-lg'/>
    </div> 
     <div>
        <img src="https://demo01.houzez.co/wp-content/uploads/2016/03/045-592x444.jpg" className='rounded-lg' loading='lazy'/>
    </div>
</Carousel> */
