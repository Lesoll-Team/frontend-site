import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import React from "react";

const ModalCard = ({ car, last }) => {
  const { setValue, clearErrors, setStep } = useAddMotorContext();
  const handleSelect = () => {
    setValue("model", car.ar);
    clearErrors("model");
    setStep((prev) => prev + 1);
  };
  return (
    <button
      type="button"
      onClick={handleSelect}
      className="space-y-6 text-start border-b pb-6 "
    >
      {car.ar}
      {/* {!last && <hr className="border" />}{" "} */}
    </button>
  );
};

export default ModalCard;
