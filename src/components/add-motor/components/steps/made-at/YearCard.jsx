import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import React from "react";

const YearCard = ({ year, last }) => {
  const { setValue, clearErrors, formSubmit } = useAddMotorContext();
  const handleSelect = () => {
    setValue("usedSince", year);
    clearErrors("usedSince");
    formSubmit();
  };
  return (
    <button
      type="button"
      onClick={handleSelect}
      className="space-y-6 text-start border-b pb-6"
    >
      <p>{year}</p>
      {/* {!last && <hr className="border" />}{" "} */}
    </button>
  );
};

export default YearCard;
