import ReactModal from "@/Shared/ui/ReactModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const GetPackagesModal = ({ isOpend, setIsOpend }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <ReactModal modalIsOpen={isOpend} setModalIsOpen={setIsOpend}>
      <div className="max-w-[80vw] md:max-w-[700px] md:min-w-[600px]  w-full py-5 justify-center items-center flex flex-col md:px-10 gap-6">
        <Image
          src={"/payment-offer.svg"}
          width={400}
          height={400}
          className="object-cover px-4"
        />
        <div className="space-y-2 text-center">
          <h3 className="text-black font-bold">
            {language
              ? "ميز إعلانك وحقق أعلى نسب مشاهدة الآن!"
              : "Feature your ad and achieve the highest view rates now!"}
          </h3>
          <p>
            {language
              ? "لتصدر إعلانك في المقدمة وزيادة نسب مشاهداته، اشترك الآن في باقاتنا الحصرية! استمتع بعروض خاصة ومميزات رائعة لن تجدها في أي مكان آخر."
              : "To get your ad to the top and increase its views, subscribe now to our exclusive packages! Enjoy special offers and fantastic features you won't find anywhere else."}
          </p>
        </div>
        <Link
          onClick={() => setIsOpend(false)}
          href={"/prices"}
          className="py-1.5 px-2 sm:px-4 sm:py-2 w-full max-w-[150px] text-center bg-lightGreen rounded-md text-white"
        >
          {language ? "اشترك الان" : "Subscribe now"}
        </Link>
      </div>
    </ReactModal>
  );
};

export default GetPackagesModal;
