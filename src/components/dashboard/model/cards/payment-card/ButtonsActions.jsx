import useBuyPackage from "@/Hooks/useBuyPackage";
import { deletePricePlan } from "@/redux-store/features/PricingSlice";
import Link from "next/link";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ButtonsActions = ({ stylesCss, data }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);

  const ButtonsBuyPackage = useBuyPackage({ id: data?._id });
  return (
    <>
      {data?.isAdmin ? (
        <div className="justify-center flex flex-col absolute bottom-7 items-center gap-y-1 w-full ">
          <ButtonsBuyPackage
            disabled={data.Subscribed}
            className={`lg-text font-bold ${data.Subscribed ? "bg-[#66bfc2]" : "bg-lightGreen"}  w-10/12 h-[35px] rounded-[6px] text-white`}
          >
            {language ? "اشترك الان" : "Subscribe now"}
          </ButtonsBuyPackage>
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
          <ButtonsBuyPackage
            disabled={data.Subscribed}
            className={`lg-text font-bold ${data.Subscribed ? "bg-[#66bfc2]" : "bg-lightGreen"}  w-10/12 h-[35px] rounded-[6px] text-white`}
          >
            {language
              ? data.Subscribed
                ? "بالفعل انت مشترك"
                : "اشترك الان"
              : data.Subscribed
                ? "Already subscribed"
                : "Subscribe now"}
          </ButtonsBuyPackage>
        </div>
      )}
    </>
  );
};

export default ButtonsActions;
