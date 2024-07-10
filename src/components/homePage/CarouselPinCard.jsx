import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Navigation, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const CarouselPinCard = ({ users }) => {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: ".swiper-button-next-custom",
          nextEl: " .swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        spaceBetween={15}
        modules={[Navigation, Pagination, FreeMode]}
        freeMode={true}
        slidesPerView={1}
        breakpoints={{
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          650: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
      >
        {users.map((user) => (
          <SwiperSlide key={user._id}>
            <Link
              href={`/view-profile/${user.username}`}
              className="bg-[#FFFFFF]  w-[200px] h-[155px] border-1.5 border-[#CCCCCC] flex flex-col items-center justify-center rounded-[1.04vw]"
            >
              <Image
                src={user.avatarUrl || "/user-avatar-placeholder.png"}
                alt={user.fullname}
                width={65}
                height={65}
                className="rounded-full"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAREC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAAAAAACaWs6DWmsaug2Ma1oKIoAAAAAAAACVWbQS1m0tYtUa01jTQdJVlc5WpQdJV1iVdBpWVQAQFEAaAAY6arHQMWsWtdMVQ01kBuVqVzjcBuVqMRqA0rKoKIAogDYAJXPp0rn0Dn0xXSsVRhQBY1GY1AbjUZjUBVRUAAAAGwASsVus0HOsWOljNijnhjeGAkjUhIsgLFhIoCggAAAA2AAzWkoMWM2N2JgMYY1i4DOLIuLgGKYoIKgCKAgANgAAAzRUBMMVQTFFBFAEFQEAAABoAAAEAAAAUAAAEABAAAB//9k="
              />
              <h2 className="font-semibold text-black capitalize lg-text font-noto ">
                {user.fullname}
              </h2>
              <p> عدد العقارات {user.count} </p>
            </Link>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-custom  pt-10 bottom-2 flex items-center justify-center w-full  text-center"></div>
      </Swiper>
      <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#CCCCCC] text-white p-2 rounded-full">
        <FaArrowLeft size={20} />
      </div>
      <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#CCCCCC] text-white p-2 rounded-full">
        <FaArrowRight size={20} />
      </div>
    </div>
  );
};

export default CarouselPinCard;
