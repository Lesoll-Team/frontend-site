import Image from "next/image";
import { useSelector } from "react-redux";

const Steps = ({ step = 1 }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full md:w-[80%] mx-auto space-y-2 ">
      <div className="flex justify-between items-center mb-16">
        <div className="relative text-center ">
          <Image
            alt="main info icon"
            width={80}
            height={80}
            src={"/add-steps/main-step-active.svg"}
          />
          <p className="text-center absolute font-bold  mt-1 w-full  text-lightGreen sm:text-base text-xs">
            {language ? (
              <span className="flex gap-1 flex-wrap md:flex-nowrap justify-center">
                <span>المعلومات </span>
                <span>الاساسية </span>
              </span>
            ) : (
              "Main Info"
            )}
          </p>
        </div>

        <hr
          className={`h-1  w-[30%] ${step > 1 ? "bg-lightGreen" : "bg-[#ccc]"}`}
        />

        <div className="relative ">
          <Image
            alt="details  icon"
            width={80}
            height={80}
            src={
              step > 1
                ? "/add-steps/details-step-active.svg"
                : "/add-steps/details-step-inactive.svg"
            }
          />
          <p
            className={`text-center absolute  mt-1 w-full sm:text-base text-xs ${
              step > 1
                ? "text-lightGreen font-bold"
                : "font-semibold text-lightGray"
            }`}
          >
            {language ? "التفاصيل" : "Details"}
          </p>
        </div>

        <hr
          className={`h-1  w-[30%] ${step > 2 ? "bg-lightGreen" : "bg-[#ccc]"}`}
        />

        <div className="relative ">
          <Image
            alt="price  icon"
            width={80}
            height={80}
            src={
              step > 2
                ? "/add-steps/price-step-active.svg"
                : "/add-steps/price-step-inactive.svg"
            }
          />
          <p className="text-center absolute font-semibold text-lightGray mt-1 w-full sm:text-base text-xs">
            {language ? "السعر" : "Price"}
          </p>
        </div>

        <hr
          className={`h-1  w-[30%] ${step > 3 ? "bg-lightGreen" : "bg-[#ccc]"}`}
        />

        <div className="relative ">
          <Image
            alt="imgs  icon"
            width={80}
            height={80}
            src={
              step > 3
                ? "/add-steps/imgs-step-active.svg"
                : "/add-steps/imgs-step-inactive.svg"
            }
          />
          <p className="text-center absolute font-semibold text-lightGray mt-1 w-full sm:text-base text-xs">
            {language ? "الصور" : "Images"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Steps;
