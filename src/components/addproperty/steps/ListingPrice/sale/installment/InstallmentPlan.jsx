import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
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
    <AddPropDropdown
      title={"Installment plan"}
      value={installmentPlan}
      setValue={handleInstallmetPlan}
      options={["Year", "1 Month", "3 Month", "6 Month"]}
    />
  );
};

export default InstallmentPlan;
