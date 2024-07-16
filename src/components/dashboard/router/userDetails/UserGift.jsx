import { useFormatNewData } from "@/Hooks/useFormatTime";
import { deleteGiftBundleVIP } from "@/utils/dashboardApi/paymentDetailsAPI";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsGiftFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdOutlineAddCard } from "react-icons/md";

const UserGift = ({ bundleVIP, userData }) => {
  const [bundleVIPUser, setBundleVIPUser] = useState();
  useEffect(() => {
    setBundleVIPUser(bundleVIP);
  }, []);
  return (
    <div>
      <h2 className="text-3xl m-5">الباقات المخصصة</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link
          href={`/dashboard/user-details/send-bundle/${userData._id}`}
          className="w-full flex flex-col rounded-md border-5 border-lightGreenHover min-h-[280px] justify-center items-center"
        >
          <MdOutlineAddCard className="text-6xl text-lightGreenHover" />
        </Link>
        {bundleVIPUser?.length !== 0 &&
          bundleVIPUser?.map((plan) => (
            <div
              key={plan._id}
              dir="ltr"
              className="  w-full flex flex-col  bg-[#282c34] rounded-md  relative pt-16 p-[30px]"
            >
              <div className="absolute top-1 left-1  flex justify-between w-fit p-4">
                <BsGiftFill className="text-[#ffd700] text-5xl  left-2 " />
                {/* <span className="text-white">created:- {created}</span> */}
              </div>
              <button
                onClick={() => {
                  deleteGiftBundleVIP({
                    packageID: plan._id,
                  })
                    .then(() => {
                      window.location.reload();
                    })
                    .catch((err) => console.log(err));
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
              <div className="grid grid-cols-1 gap-1 px-4 md:text-[1.3em] text-[1em]">
                <div className=" w-full flex justify-between   text-medium text-gray-100 border-b-1  mb-1">
                  <span>Added by</span>
                  <span>{plan.admin.fullname}</span>
                </div>
                <div className=" w-full flex justify-between   text-medium text-gray-100 border-b-1  mb-1">
                  <span>Created</span>
                  <span>
                    {useFormatNewData({
                      date: plan?.updatedAt,
                      lang: false,
                    })}
                  </span>
                </div>
                <div className=" w-full flex justify-between   text-medium text-gray-100 border-b-1  mb-1">
                  <span>Expire</span>
                  <span>{plan?.expireDate}</span>
                </div>
                <div className=" w-full flex justify-between    text-medium text-gray-100 border-b-1 mt-1">
                  <span>Pin number</span>
                  <span>{plan?.pinDay}</span>
                </div>
                <div className=" w-full flex justify-between    text-medium text-gray-100 border-b-1 mt-1">
                  <span>Repost number</span>
                  <span>{plan?.repostDay}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default UserGift;
