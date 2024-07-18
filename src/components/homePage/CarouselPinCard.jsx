import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Navigation, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import ProfileCardSkeleton from "./ProfileCardSkeleton ";

const CarouselPinCard = () => {
  const swiperRef = useRef();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pinProfile = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/payment-user/pin-profile-home?limit=${10}&page=${1}`,
        );
        const profile = await pinProfile.json();
        setUsers(profile.getProfiles);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch properties", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div dir="rtl" className="relative md:mx-0 mx-[15px] px-10">
      {loading ? (
        <div className=" md:container md:mx-auto mx-[20px] flex  justify-between gap-10 overflow-hidden ">
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
        </div>
      ) : (
        <Swiper
          ref={swiperRef}
          onReachEnd={() => {
            console.log("end reach");
          }}
          onSlideChange={() => {
            if (swiperRef.current.swiper.activeIndex !== 0) {
              setIsStart(false);
            } else setIsStart(true);
          }}
          navigation={{
            prevEl: ".swiper-button-next-custom",
            nextEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          spaceBetween={10}
          modules={[Navigation, Pagination, FreeMode]}
          freeMode={true}
          slidesPerView={1.2}
          breakpoints={{
            1700: {
              slidesPerView: 5.5,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
            1100: {
              slidesPerView: 3.5,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 2.7,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 1.6,
              spaceBetween: 10,
            },
            400: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
          }}
        >
          {users.map((user) => (
            <SwiperSlide key={user._id}>
              <Link
                href={`/view-profile/${user.username}?page=1`}
                className="bg-[#FFFFFF]  w-[200px] h-[155px] border-1.5 border-[#CCCCCC] flex flex-col space-y-4 items-center justify-center rounded-[1.04vw]"
              >
                <Image
                  src={user.avatarUrl || "/user-avatar-placeholder.png"}
                  alt={user.fullname}
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-[65px] h-[65px] bg-red-300 "
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAREC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAAAAAACaWs6DWmsaug2Ma1oKIoAAAAAAAACVWbQS1m0tYtUa01jTQdJVlc5WpQdJV1iVdBpWVQAQFEAaAAY6arHQMWsWtdMVQ01kBuVqVzjcBuVqMRqA0rKoKIAogDYAJXPp0rn0Dn0xXSsVRhQBY1GY1AbjUZjUBVRUAAAAGwASsVus0HOsWOljNijnhjeGAkjUhIsgLFhIoCggAAAA2AAzWkoMWM2N2JgMYY1i4DOLIuLgGKYoIKgCKAgANgAAAzRUBMMVQTFFBFAEFQEAAABoAAAEAAAAUAAAEABAAAB//9k="
                />
                <h2 className="font-semibold text-black text-center capitalize line-clamp-1 lg-text font-noto ">
                  {user.fullname}
                </h2>
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination-custom  pt-10 bottom-2 flex items-center justify-center w-full  text-center"></div>
        </Swiper>
      )}
      <button
        className={` swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#CCCCCC]  text-white p-2 rounded-full`}
      >
        <FaArrowLeft size={20} />
      </button>

      <button
        className={`swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 ${!isStart ? "bg-[#CCCCCC] " : " hidden "} text-white p-2 rounded-full`}
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
};

export default CarouselPinCard;
