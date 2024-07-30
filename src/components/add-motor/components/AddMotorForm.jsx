import React from "react";
import { useAddMotorContext } from "../context/addMotorContext";
import TestMot from "./TestMot";

const AddMotorForm = () => {
  const { step, setStep, errors, register, handleSubmit } =
    useAddMotorContext();
  console.log(step);
  return (
    <div>
      AddMotorForm
      <TestMot />
    </div>
  );
};

export default AddMotorForm;
