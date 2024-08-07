import React, { memo, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { Pagination, FreeMode, Navigation, Keyboard } from "swiper/modules";
import RealtyCard from "../realtyCard/RealtyCard";
import SkeletonCard from "../realtyCard/SkeletonCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PinPropertiesTitle from "./PinPropertiesTitle";

const CarouselPinPropertiesCard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef();
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pinProperties = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/payment-user/pin-property-homepage?page=1&limit=10`,
        );
        const properties = await pinProperties.json();
        setProperties(properties.getPropertys);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch properties", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (properties.length <= 0) {
    return;
  }
  return (
    <div dir="rtl" className=" relative">
      {!loading ? (
        <PinPropertiesTitle />
      ) : (
        <div className="bg-gray-100 animate-pulse w-72 p-5"> </div>
      )}

      {!loading ? (
        <Swiper
          className="md:px-10"
          ref={swiperRef}
          nested={true}
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          onSlideChange={() => {
            if (swiperRef.current.swiper.activeIndex !== 0) {
              setIsStart(false);
            } else setIsStart(true);
          }}
          spaceBetween={10}
          slidesPerView={1.2}
          freeMode={false}
          navigation={{
            prevEl: ".swiper-button-next-property",
            nextEl: ".swiper-button-prev-property",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          modules={[Pagination, FreeMode, Navigation, Keyboard]}
          breakpoints={{
            1700: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1480: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            750: {
              slidesPerView: 2.2,
            },
            430: {
              slidesPerView: 1.5,
            },
            280: {
              slidesPerView: 1.5,
            },
          }}
        >
          {properties.map((property) => (
            <SwiperSlide key={property._id}>
              <RealtyCard
                cardID={property._id}
                propertyDetails={property}
                withVertical
              />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination-custom  pt-10 bottom-2 flex items-center justify-center w-full  text-center"></div>
        </Swiper>
      ) : (
        <div className=" md:container md:mx-auto mx-[20px] flex  justify-between gap-10 overflow-hidden ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      <div className="swiper-button-prev-property absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#CCCCCC] text-white p-2 rounded-full">
        <FaArrowLeft size={20} />
      </div>
      <div
        className={`swiper-button-next-property absolute right-0 top-1/2 transform -translate-y-1/2 z-10 ${!isStart ? "bg-[#CCCCCC] " : " hidden "} text-white p-2 rounded-full`}
      >
        <FaArrowRight size={20} />
      </div>
    </div>
  );
};
export default memo(CarouselPinPropertiesCard);
