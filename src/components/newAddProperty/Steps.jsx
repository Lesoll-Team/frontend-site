// Importing necessary modules
import Image from "next/image";
import { useSelector } from "react-redux";

// Steps component definition
const Steps = ({ step = 1, setStep, watch }) => {
  // Redux selector to get the language from global state
  const language = useSelector((state) => state.GlobalState.languageIs);
  const isForInvestment = watch("offer") === "For Investment";
  const isStepAboveOne = step > 1;
  const isStepAboveTwo = step > 2;
  const isStepAboveThree = step > 3;
  const detailsStepLogic = () => {
    if (isForInvestment) {
      if (step > 2) {
        return "button";
      } else {
        return "submit";
      }
    }
  };
  return (
    <div className="w-full md:w-[80%] mx-auto space-y-2 ">
      <div className="flex justify-between items-center mb-16">
        {/* Main Info Step */}
        <div
          type="button"
          // onClick={() => setStep(1)}
          className="relative text-center "
        >
          <Image
            alt="main info icon"
            width={80}
            height={80}
            src={"/add-steps/main-step-active.svg"}
          />
          {/* Conditional rendering of text based on language */}
          <p className="text-center absolute font-bold mt-1 w-full text-lightGreen sm:text-base text-xs">
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

        {/* Horizontal line separating steps */}
        <hr
          className={`h-1 ${isForInvestment ? " w-[48%]" : " w-[30%]"} ${
            isStepAboveOne ? "bg-lightGreen" : "bg-[#ccc]"
          }`}
        />

        {/* Price Step */}
        {/* Conditional rendering based on offer type */}
        {!isForInvestment && (
          <>
            <div
              // onClick={() => {
              //   if (isStepAboveOne) {
              //     setStep(1);
              //   }
              // }}
              type="button"
              className="relative "
            >
              <Image
                alt="price icon"
                width={80}
                height={80}
                src={
                  isStepAboveOne
                    ? "/add-steps/price-step-active.svg"
                    : "/add-steps/price-step-inactive.svg"
                }
              />
              {/* Conditional rendering of text based on step */}
              <p
                className={`text-center absolute mt-1 w-full sm:text-base text-xs ${
                  isStepAboveOne
                    ? "text-lightGreen font-bold"
                    : "font-semibold text-lightGray"
                }`}
              >
                {language ? "السعر" : "Price"}
              </p>
            </div>
            {/* Horizontal line separating steps */}
            <hr
              className={`h-1 w-[30%] ${
                isStepAboveTwo ? "bg-lightGreen" : "bg-[#ccc]"
              }`}
            />
          </>
        )}

        {/* Details Step */}
        <div
          // type={detailsStepLogic()}
          // onClick={() => {
          //   if (isForInvestment) {
          //     console.log(step);
          //     step > 1 && setStep(2);
          //   }
          // }}
          type="button"
          className="relative "
        >
          <Image
            alt="details icon"
            width={80}
            height={80}
            src={
              isForInvestment
                ? isStepAboveOne
                  ? "/add-steps/details-step-active.svg"
                  : "/add-steps/details-step-inactive.svg"
                : isStepAboveTwo
                ? "/add-steps/details-step-active.svg"
                : "/add-steps/details-step-inactive.svg"
            }
          />
          {/* Conditional rendering of text based on step */}
          <p
            className={`text-center absolute mt-1 w-full sm:text-base text-xs ${
              isStepAboveTwo
                ? "text-lightGreen font-bold"
                : "font-semibold text-lightGray"
            }`}
          >
            {language ? "التفاصيل" : "Details"}
          </p>
        </div>
        {/* Horizontal line separating steps */}
        <hr
          className={`h-1 ${isForInvestment ? " w-[48%]" : " w-[30%]"} ${
            isForInvestment
              ? isStepAboveTwo
                ? "bg-lightGreen"
                : "bg-[#ccc]"
              : isStepAboveThree
              ? "bg-lightGreen"
              : "bg-[#ccc]"
          }`}
        />

        {/* Images Step */}
        <div className="relative ">
          <Image
            alt="imgs icon"
            width={80}
            height={80}
            src={
              isForInvestment
                ? isStepAboveTwo
                  ? "/add-steps/imgs-step-active.svg"
                  : "/add-steps/imgs-step-inactive.svg"
                : isStepAboveThree
                ? "/add-steps/imgs-step-active.svg"
                : "/add-steps/imgs-step-inactive.svg"
            }
          />
          {/* Conditional rendering of text based on step */}
          <p
            className={`text-center absolute mt-1 w-full sm:text-base text-xs ${
              isForInvestment
                ? isStepAboveTwo
                  ? "text-lightGreen font-bold"
                  : "font-semibold text-lightGray"
                : isStepAboveThree
                ? "text-lightGreen font-bold"
                : "font-semibold text-lightGray"
            }`}
          >
            {language ? "الصور" : "Images"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Steps;
