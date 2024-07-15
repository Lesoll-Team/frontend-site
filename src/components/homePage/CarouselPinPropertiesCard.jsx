import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/free-mode";

// import { Navigation, FreeMode } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RealtyCard from "../realtyCard/RealtyCard";
import SkeletonCard from "../realtyCard/SkeletonCard";

const CarouselPinPropertiesCard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return (
    <div className="relative">
      {!loading ? (
        <Swiper
          // navigation={{
          //   prevEl: ".swiper-button-next-custom",
          //   nextEl: ".swiper-button-prev-custom",
          // }}
          // centeredSlides={true}
          // watchSlidesProgress={true}
          spaceBetween={10}
          // modules={[Navigation, FreeMode]}
          // freeMode={true}
          slidesPerView={1}
          breakpoints={{
            1600: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            430: {
              slidesPerView: 1,
              spaceBetween: 5,
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
        </Swiper>
      ) : (
        <div className=" md:container md:mx-auto mx-[20px] flex  justify-between gap-10 overflow-hidden ">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      {/* <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#CCCCCC] text-white p-2 rounded-full">
        <FaArrowLeft size={20} />
      </div>
      <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#CCCCCC] text-white p-2 rounded-full">
        <FaArrowRight size={20} />
      </div> */}
    </div>
  );
};

export default CarouselPinPropertiesCard;
