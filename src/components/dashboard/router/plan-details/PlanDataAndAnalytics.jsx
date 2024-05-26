import { PiCrownSimpleFill } from "react-icons/pi";
import PlanAnalytics from "./PlanAnalytics";
import { useFormatNewData } from "@/Hooks/useFormatTime";

const PlanDataAndAnalytics = ({ planDetails, allDataPlan }) => {
  const created = useFormatNewData({
    date: planDetails?.createdAt,
    lang: false,
  });
  console.log("planDetails>>:>:>:", planDetails);
  return (
    <div className="w-full  py-10 md:container md:mx-auto mb-14  justify-items-center items-center relative   grid xl:grid-cols-3 grid-cols-1 p-5">
      {/*simple card */}
      <div className="  w-full flex flex-col  bg-[#282c34] rounded-md  relative pt-16 p-[30px]">
        <div className="absolute top-1 left-1  flex justify-between w-full p-4">
          <PiCrownSimpleFill className="text-[#ffd700] text-5xl  left-2 -rotate-45" />
          <span className="text-white">created:- {created}</span>
        </div>
        {planDetails?.offer && (
          <s className=" w-full flex justify-end md:text-[1em] text-[0.8em] font-bold text-red-300 ">
            <span>{planDetails?.offerPrice + " EGP "}</span>
          </s>
        )}
        <div className=" w-full flex justify-between   md:text-[1.5em] text-[1em] font-bold text-white border-b-2 mb-6">
          <span>{planDetails?.PaymentEn}</span>
          <span>{planDetails?.price + " EGP "}</span>
        </div>
        {/**planDetails.offer */}
        <div className="grid grid-cols-1 gap-1 px-4 md:text-[1.3em] text-[1em]">
          <div className=" w-full flex justify-between    text-gray-100 border-b-1  mb-1">
            <span>Expire date</span>
            <span>{planDetails?.expireDate} </span>
          </div>
          <div className=" w-full flex justify-between    text-gray-100 border-b-1 mt-1">
            <span>Pin number</span>
            <span>
              {planDetails?.propNumberCategory} /{" "}
              {planDetails?.pinDayInCategory}
              Days
            </span>
          </div>
          <div className=" w-full flex justify-between    text-gray-100 border-b-1 mt-1">
            <span>Repost number</span>
            <span>{planDetails?.repostDayCategory}</span>
          </div>
          <div className=" w-full flex justify-between    text-gray-100  mt-1">
            <span>Free</span>
            <span>{planDetails?.normalProp}</span>
          </div>
        </div>
      </div>

      <div className="w-full col-span-2 md:p-10 p-3">
        <PlanAnalytics planDetails={allDataPlan} />
      </div>
    </div>
  );
};
export default PlanDataAndAnalytics;
