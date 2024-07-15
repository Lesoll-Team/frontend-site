import { useFormatNewData } from "@/Hooks/useFormatTime";
import { deleteGiftFromUser } from "@/utils/dashboardApi/paymentDetailsAPI";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiCrownSimpleFill } from "react-icons/pi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsGiftFill } from "react-icons/bs";

const UserPayment = ({ userData }) => {
  const [userPayments, setUserPayments] = useState(null);
  useEffect(() => {
    setUserPayments(userData.allUsersPackageContinuous);
  }, []);
  return (
    <div>
      <h2 className="text-3xl m-5">الباقات </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link
          href={`/dashboard/add-plan-to-user/${userData._id}`}
          className="w-full flex  rounded-md border-5 border-lightGreenHover min-h-[280px] justify-center items-center"
        >
          <span className="text-6xl text-lightGreenHover font-bold -ml-1.5 -mb-16">
            +
          </span>
          <BsGiftFill className="text-6xl  text-lightGreenHover" />
        </Link>
        {userPayments?.length !== 0 &&
          userPayments?.map((plan) => (
            <div
              dir="ltr"
              className="  w-full flex flex-col  bg-[#282c34] rounded-md  relative pt-16 p-[30px]"
            >
              <div className="absolute top-1 left-1  flex justify-between w-fit p-4">
                <PiCrownSimpleFill className="text-[#ffd700] text-5xl  left-2 -rotate-45" />
              </div>
              <button
                onClick={() => {
                  deleteGiftFromUser({
                    packageID: plan._id,
                    userID: userData._id,
                  }).then(() => {
                    window.location.reload();
                  });
                }}
                className="absolute top-1 right-1  flex justify-between w-fit p-4"
              >
                <RiDeleteBin5Fill className="text-[#c33737] text-3xl  " />
              </button>
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
                  <span>Order ID</span>
                  <span>{plan.order_id}</span>
                </div>
                <div className=" w-full flex justify-between   text-medium text-gray-100 border-b-1  mb-1">
                  <span>Created</span>
                  <span>
                    {useFormatNewData({
                      date: plan?.createdAt,
                      lang: false,
                    })}
                  </span>
                </div>
                <div className=" w-full flex justify-between   text-medium text-gray-100 border-b-1  mb-1">
                  <span>Expire</span>
                  <span>
                    {useFormatNewData({
                      date: plan?.expireDate,
                      lang: false,
                    })}
                  </span>
                </div>
                <div className=" w-full flex justify-between    text-medium text-gray-100 border-b-1 mt-1">
                  <span>Pin number</span>
                  <span>{plan?.pinNumber}</span>
                </div>
                <div className=" w-full flex justify-between    text-medium text-gray-100 border-b-1 mt-1">
                  <span>Repost number</span>
                  <span>{plan?.repostNumber}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default UserPayment;
