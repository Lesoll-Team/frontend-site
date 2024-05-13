import { updateAllStates } from "@/redux-store/features/category/categorySlice";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PaymentType = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const paymentTypeIs = useSelector((state) => state.Category.paymentType);
  const dispatch = useDispatch();
  const [cashClickCount, setCashClickCount] = useState(0);
  const [installmentClickCount, setInstallmentClickCount] = useState(0);
  const handlePaymentClick = (name) => {
    switch (name) {
      case "installment":
        // setPaymentTypeKey("installment");
        setInstallmentClickCount((prevCount) => prevCount + 1);
        if (installmentClickCount % 2 === 0) {
          dispatch(updateAllStates({ paymentType: "installment" }));
        } else {
          dispatch(updateAllStates({ paymentType: null }));
        }

        break;

      case "cash":
        // setPaymentTypeKey("cash");
        setCashClickCount((prevCount) => prevCount + 1);
        if (cashClickCount % 2 === 0) {
          dispatch(updateAllStates({ paymentType: "cash" }));
        } else {
          dispatch(updateAllStates({ paymentType: null }));
        }
        break;

      default:
        break;
    }
  };
  return (
    <div className="bg-[#F8F8F8] gap-y-[1.5vh] p-[1.5vw] flex flex-col w-full">
      <span className="font-bold lg-text text-gray2">
        {language ? "طريقة السداد" : "Payment Options"}
      </span>
      <div className="flex sm-text md:gap-x-[1vw]  gap-x-[1.5vw]">
        <button
          onClick={() => handlePaymentClick("cash")}
          className={`bg-white md:px-3 min-w-[80px] md:p-2 h-[40px] px-3  md:h-[3.313rem] rounded-[6px] ${
            paymentTypeIs === "cash"
              ? "border-1 border-lightGreen text-lightGreen"
              : "border-1 border-[#CCCCCC]"
          }`}
        >
          {language ? "كاش" : "Cash"}
        </button>
        <button
          onClick={() => handlePaymentClick("installment")}
          className={`bg-white md:px-3 md:p-2 h-[40px] px-3 min-w-[80px]  md:h-[3.313rem] rounded-[6px] ${
            paymentTypeIs === "installment"
              ? "border-1 border-lightGreen text-lightGreen"
              : "border-1 border-[#CCCCCC]"
          }`}
        >
          {language ? "تقسيط" : "Installment"}
        </button>
      </div>
    </div>
  );
};

export default memo(PaymentType);
