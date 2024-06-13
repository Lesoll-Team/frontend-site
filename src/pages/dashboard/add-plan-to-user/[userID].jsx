import { useFormatNewData } from "@/Hooks/useFormatTime";
import { getPlanPayments } from "@/utils/PricingAPI";
import { sendGiftToUser } from "@/utils/dashboardApi/paymentDetailsAPI";
import { useState } from "react";
import { PiCrownSimpleFill } from "react-icons/pi";

const Index = ({ userID, payments }) => {
  const [idPlan, setIdPlan] = useState("");
  const handleSendPlanToUser = async () => {
    await sendGiftToUser({ packageID: idPlan, userID }).then(() => {
      window.history.back();
      setIdPlan("");
    });
    // .catch(() => {});
  };
  return (
    <div className="min-h-[90dvh] flex flex-col my-10 gap-y-10 items-center">
      <b className="text-3xl"> اختار باقة لليوسر باشا يامدييييير ❤</b>
      <div className="flex mx-[20px] md:container md:mx-auto gap-10">
        {payments.map((plan) => (
          <div
            onClick={() => setIdPlan(plan._id)}
            dir="ltr"
            className={` ${idPlan == plan._id && "border-8 border-lightGreenHover"} p-[30px] w-full flex flex-col cursor-pointer bg-[#282c34] rounded-md  relative pt-16 `}
            key={plan._id} // Added key prop for list item
          >
            {plan.Popular && (
              <div className="absolute top-1 left-1  flex justify-between w-full p-4">
                <PiCrownSimpleFill className="text-[#ffd700] text-5xl  left-2 -rotate-45" />
              </div>
            )}
            {plan?.offerPrice && (
              <s className=" w-full flex justify-end md:text-[1em] text-[0.8em] font-bold text-red-300 ">
                <span>{plan?.offerPrice + " EGP "}</span>
              </s>
            )}
            <div className=" w-full flex justify-between   md:text-[1.5em] text-[1em] font-bold text-white border-b-2 mb-6">
              <span>{plan?.PaymentEn}</span>
              <span>{plan?.price + " EGP "}</span>
            </div>
            {/**plan.offer */}
            <div className="grid grid-cols-1 gap-1 px-4 md:text-[1.3em] text-[1em]">
              <div className=" w-full flex justify-between   text-medium text-gray-100 border-b-1  mb-1">
                <span>Created</span>
                <span>
                  {useFormatNewData({
                    date: plan?.createdAt,
                    lang: false,
                  })}
                </span>
              </div>

              <div className=" w-full flex justify-between    text-medium text-gray-100 border-b-1 mt-1">
                <span>Pin number</span>
                <span>
                  {plan?.propNumberCategory} / {plan?.pinDayInCategory} days
                </span>
              </div>
              <div className=" w-full flex justify-between    text-medium text-gray-100 border-b-1 mt-1">
                <span>Repost number</span>
                <span>{plan?.repostDayCategory}</span>
              </div>
              <div className=" w-full flex justify-between    text-medium text-gray-100 border-b-1 mt-1">
                <span>free</span>
                <span>{plan?.normalProp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {idPlan && (
        <div className="flex gap-2">
          <button
            onClick={() => setIdPlan("")}
            className="border-2 border-red-600 w-fit p-4 px-10 rounded-md hover:text-white hover:bg-red-600 text-red-600 font-bold "
          >
            Cancel
          </button>
          <button
            onClick={handleSendPlanToUser}
            className="border-2 border-lightGreen w-fit p-4 px-10 rounded-md hover:text-white hover:bg-lightGreen text-lightGreen font-bold "
          >
            send to user
          </button>
        </div>
      )}
    </div>
  );
};
export default Index;
export async function getServerSideProps({ query }) {
  const response = await getPlanPayments();
  return {
    props: {
      userID: query.userID || null,
      payments: response.getPayment,
    },
  };
}
