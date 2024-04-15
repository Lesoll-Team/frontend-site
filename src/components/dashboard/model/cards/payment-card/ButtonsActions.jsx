import { deletePricePlan } from "@/redux-store/features/PricingSlice";
import { buyPackageAction } from "@/utils/PricingAPI";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ButtonsActions = ({ stylesCss, data }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  //buyPackageAction
  const handleBuyCategory = () => {
    buyPackageAction({ id: data._id }).then((data) => router.push(data.link));
  };
  return (
    <>
      {data?.isAdmin ? (
        <div className="justify-center flex flex-col absolute bottom-7 items-center gap-y-1 w-full ">
          <button
            onClick={handleBuyCategory}
            className="lg-text font-bold bg-lightGreen w-10/12 h-[35px] rounded-[6px] text-white"
          >
            {language ? "اشترك الان" : "Subscribe now"}
          </button>
          <div className="w-full flex justify-center items-center gap-x-5 ">
            <Link
              href={`/dashboard/pricing/edit/${data._id}`}
              className={`py-1 px-5 border-2  rounded-xl ${stylesCss?.buttonCss}`}
            >
              Edit Plan
            </Link>
            <button onClick={() => dispatch(deletePricePlan({ id: data._id }))}>
              <MdDeleteForever className="text-2xl" />
            </button>
          </div>
        </div>
      ) : (
        <div className="justify-center absolute bottom-7 items-center gap-y-2 space-x-2 w-full flex-col flex">
          <button
            onClick={handleBuyCategory}
            className="lg-text font-bold bg-lightGreen w-10/12 h-[35px] rounded-[6px] text-white"
          >
            {language ? "اشترك الان" : "Subscribe now"}
          </button>
        </div>
      )}
    </>
  );
};

export default ButtonsActions;
// import { BsBoxArrowInDownRight } from "react-icons/bs";

/* <Link
            href={"/dashboard/pricing"}
            className={`py-1 px-3 items-center sm-text flex`}
          >
            {language ? "عرض المزيد من التفاصيل" : "show more details"}
            <BsBoxArrowInDownRight className="mx-2" />
          </Link> */
