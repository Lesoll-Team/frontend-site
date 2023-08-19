import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const InstallmentPlan = ({ installmentPlan, handleInstallmetPlan }) => {
  const [installmentPlanMenu, setinstallmentPlanMenu] = useState("");

  const handleinstallmentPlanMenu = () => {
    setinstallmentPlanMenu(!installmentPlanMenu);
  };

  const installmentPlanButtonRef = useRef(null); // Ref for the payment method button

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        installmentPlanButtonRef.current &&
        !installmentPlanButtonRef.current.contains(event.target)
      ) {
        setinstallmentPlanMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={`relative w-full`}>
      <h3 className="text-xl text-darkGreen font-semibold mb-2">
        Installment plan
      </h3>
      <button
        ref={installmentPlanButtonRef}
        onClick={handleinstallmentPlanMenu}
        className="w-full font-semibold text-darkGreen md:text-lg flex items-center justify-between gap-6 focus:outline-none bg-white  border-lightGreen rounded-xl p-4 drop-shadow-xl  whitespace-nowrap"
      >
        {installmentPlan || "Payment Method"}
        <AiFillCaretDown className="text-darkGreen" />
      </button>
      {installmentPlanMenu && (
        <div
          className={`absolute z-10 w-full  mt-1 bg-white duration-200 drop-shadow-2xl border rounded-xl `}
        >
          <p
            onClick={() => handleInstallmetPlan("month")}
            className="text-lg font-semibold text-darkGreen py-2 px-3  duration-200  "
          >
            month
          </p>
          <p
            onClick={() => handleInstallmetPlan("3 month")}
            className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
          >
            3 month
          </p>
          <p
            onClick={() => handleInstallmetPlan("6 month")}
            className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
          >
            6 month
          </p>
          <p
            onClick={() => handleInstallmetPlan("year")}
            className="text-lg font-semibold text-darkGreen py-2 px-3 duration-200 hover:bg-slate-100"
          >
            year
          </p>
        </div>
      )}
    </div>
  );
};

export default InstallmentPlan;
