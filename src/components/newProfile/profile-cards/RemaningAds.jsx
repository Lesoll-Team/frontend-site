import ReactModal from "@/Shared/ui/ReactModal";
import { useUser } from "@/Shared/UserContext";
import Link from "next/link";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { useSelector } from "react-redux";

const RemaningAds = () => {
  const { data } = useUser();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(true);
  return data?.packageSubscribe ? (
    <div className="flex items-start gap-2 text-darkGray">
      <div className="w-[16px] mt-1">
        <FiInfo />
      </div>
      <p>
        {language
          ? `تابع المتبقى لديك من الإعلانات المجانية والمدفوهة`
          : `Track your remaining free and paid advertisements.`}
        <span className="mx-1 underline text-lightGreen">
          <button onClick={toggleModal}>
            {language ? "معرفة المزيد" : "Know more."}
          </button>
        </span>
      </p>
      <InfoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  ) : (
    <div className="flex items-start gap-2 text-darkGray">
      <div className="w-[16px] mt-1">
        <FiInfo />
      </div>
      <p>
        {language
          ? `متبقى لديك ${data?.propertyDefaultNumber} اعلانات مجانية لزيادة عدد الإعلانات يمكنك الإشتراك بأحد الباقات,`
          : `You have ${data?.propertyDefaultNumber} free ads left you can to increase the number of advertisements, you can subscribe to one of the packages. `}
        <span className="mx-1 underline text-lightGreen">
          <Link href={"/prices"}>
            {language ? "إشترك الأن" : "Subscribe now."}
          </Link>
        </span>
      </p>
    </div>
  );
};

export default RemaningAds;

const InfoModal = ({ isOpen, setIsOpen }) => {
  const { data } = useUser();
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
      <div className="md:w-[650px] sm:w-[500px] w-[90vw] pt-7 pb-5  space-y-6">
        <h3 className="text-center">
          {language
            ? "المتبقى من الإعلانات المجانيه والمدفوعة"
            : "Remaining free and paid advertisements."}
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-[90%] mx-auto">
          <div className="border-2 flex flex-col justify-center items-center gap-4 w-full py-3 rounded-md">
            <p className="font-bold text-lightGreen text-xl">
              {data?.propertyDefaultNumber}
            </p>
            <p className="text-xl">
              {language ? "إعلانات مجانية متبقية" : "Remaining free ads."}
            </p>
          </div>
          <div className="border-2 flex flex-col justify-center items-center gap-4 w-full py-3 rounded-md">
            <p className="font-bold text-lightGreen text-xl">
              {data?.packagePropertyNumber}
            </p>
            <p className="text-xl">
              {language ? "إعلانات مميزة متبقية" : "Remaining featured ads."}
            </p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
