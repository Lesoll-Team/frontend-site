import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const PriceHeader = () => {
   const language = useSelector((state) => state.GlobalState.languageIs);

   return (
      <div className="relative flex sm:min-h-[400px] sm:max-h-[400px] min-h-[130px] max-h-[130px]  justify-center items-center ">
         <Image
            className="w-full object-cover sm:min-h-[400px] sm:max-h-[400px] min-h-[130px] max-h-[130px] "
            src={"/price/header-price.svg"}
            alt="header price "
            width={200}
            height={100}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRgQFAABXRUJQVlA4WAoAAAAgAAAAkgMAsQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggFgMAAJBAAJ0BKpMDsgA/OZjDXC8qJyQktClx4CcJaW7ggOAqz1JczEr0X9gQpfg5KSxAyE/HgwclJuAME/HhBgndZ+NI0AtA1rhVHJSWIGQoVxw256QMhP4HpTDwYOcCEDBylwRfLEr8rYRFJ3/nenXI3dBCvIB5nNks5ny1lEbfoNvwFLamKQod95s5vjymieVQbKCMbyXi99I4AXPAnTsWo2vtdgWPuSepn8+AZVJ8xfk4SrXuVGDmMa27sdlxVijzVpU9N2KNpY6X+hx5iFhvIT9j37CbXdKxuIy9rokOjOmu+FF4fI0BUPumLtm/TbhnC+XZxJcDsr3J16fByiuG3ViBqiV/SbaGvlyeayFOxrQ6cK9CEGxs199VZJCKTLXjlQ2PGMfjwYOSksQwq8RQYe8u0vHHBRBztYCGHzbxHYEpm/6sTitqnslZIa8IVzI4OSktZFkdG0o6rc9viLtLx16SgplVOs+kHwsvXc6j17pS9dEkCyRN5AAKPACXDWpH/MFUkAA2KkCLiQTJvHHEgkgmkTq2Gx943CMp/RHl6Zh2Bmc2pWCEhpTFnh4JwR9Z7KMpnD5ld8yvUPqPxzKaOhz0M6eETbK1ALzhkM33Y5H8QY/ZO0GMO1Ah7cBJGHLKsvJZPvUA2IGOysuEsygo5xk/JFcIGQn48qVPU8Tj/QLq2TiPwJfoxl7833qP8ADx/xKnOjrfRwQJFAYkknWL7S7dBsKsdnR4fmqShpT9yIz2KjVQhxlaS2VyvkMElwMamcCkUIgi5Y/a4mdhl2pGkyQjZypvWElPy/hIZD65zRWgE18WPuojBW+oU08vkpWUG+otWTo7sTtn+Yxqq/gkStAxVGDrNZKOJyeXx2h2hfdevxkgqYBaGKYfp0RlneBEAJ4P5fhPBhDJgGWZ8LsACptC2VKfVPh4b9B8Vk6HQmCX3moLyUAaCDVsPDwIuD0pREmDXe0mOs7ETnupSLAnrjTGebVovKtaasoJTUD/dza4MeRaypVmQarioo1ptm+9gh0BGW3zBDbIzwMxLGi6WHM+cn2IgAA="
         />
         {/* H1 title is hidden but we use it because of SEO */}
         <h1 className="text-white seo-hidden ">
            {language
               ? "باقات متنوعة للعقارات على ليسول: ابدأ رحلتك العقارية هنا"
               : "Diverse Property Packages on Lesool: Begin Your Real Estate Journey Here"}
         </h1>
         <h2 className="text-white absolute text-[24px] md:text-[28px] font-bold">
            {language ? "الباقات" : "payment"}
         </h2>
      </div>
   );
};

export default PriceHeader;
