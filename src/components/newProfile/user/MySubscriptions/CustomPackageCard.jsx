import useBuyPackage from "@/Hooks/useBuyPackage";
import { useMemo } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const CustomPackageCard = ({ data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const ButtonsBuyPackage = useBuyPackage({ id: data?._id });
  const packagePer = useMemo(() => {
    if (data.expireDate === "month") {
      return language ? "شهر" : "month";
    } else if (data.type === "year") {
      return language ? "سنة" : "year";
    }
  }, [data, language]);
  return (
    <div className="px-3 py-6 lg:px-5 lg:py10 border-1 rounded bg-white drop-shadow-sm flex flex-col gap-6 relative overflow-hidden">
      <CustomTag />
      <div className="flex lg:flex-row flex-col items-start justify-between gap-3 lg:gap-10">
        <div className=" w-full lg:w-1/2   ">
          <div className="flex flex-col items-center gap-6 lg:px-0 px-3 lg:py-0 py-3">
            <p className="font-bold text-center text-[#202020]">
              {language ? data?.PaymentAr : data?.PaymentEn}
            </p>
            <div className="flex items-center flex-col">
              {" "}
              <p className="font-bold">{data.price}</p>
              <p>
                {language ? "جنية" : "Egp"} {packagePer && " / " + packagePer}
              </p>
            </div>
            <hr className="h-[1px] w-[80%]" />
            <ButtonsBuyPackage className="w-[80%] lg:block hidden text-white bg-[#202020] py-3 rounded">
              {language ? "إشتراك" : "Subscripe"}
            </ButtonsBuyPackage>
          </div>
        </div>
        <div className="w-full lg:w-1/2  space-y-5  ">
          <p>{language ? data?.descriptionAr : data?.descriptionEn}</p>
          <div className="space-y-5 lg:max-w-[90%]">
            {data?.newService.map((el) => {
              return <SingleService service={el} />;
            })}
          </div>
        </div>
        <ButtonsBuyPackage className="w-full mt-2 lg:hidden block text-white bg-[#202020] py-3 rounded">
          {language ? "إشتراك" : "Subscripe"}
        </ButtonsBuyPackage>
      </div>
    </div>
  );
};

export default CustomPackageCard;

const SingleService = ({ service }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="flex gap-3 items-center">
      <div className="w-[16px]">
        <IoMdCheckmarkCircleOutline className="text-xl" />
      </div>
      <p className="font-semibold font-noto">
        {language ? service.ar : service.en}
      </p>
    </div>
  );
};

const CustomTag = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div
      className={`absolute  -top-2 bg-gradient-to-l from-darkGreen to-lightGreen font-bold  ${language ? "-left-12 -rotate-45" : "-right-12 rotate-45"} text-white  px-10 pb-2 pt-8`}
    >
      {language ? "مخصصة" : "Custom"}
    </div>
  );
};
