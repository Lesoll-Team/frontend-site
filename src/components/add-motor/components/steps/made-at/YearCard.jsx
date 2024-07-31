import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import React from "react";

const YearCard = ({ year, last }) => {
  const { setValue, clearErrors, setStep } = useAddMotorContext();
  const handleSelect = () => {
    setValue("usedSince", year);
    clearErrors("usedSince");
    setStep((prev) => prev + 1);
  };
  return (
    <button onClick={handleSelect} className="space-y-6 text-start">
      <p>{year}</p>
      {!last && <hr className="border" />}{" "}
    </button>
  );
};

export default YearCard;
