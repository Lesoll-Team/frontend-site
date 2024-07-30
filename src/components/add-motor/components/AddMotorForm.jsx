import React from "react";
import { useAddMotorContext } from "../context/addMotorContext";
import TestMot from "./TestMot";

const AddMotorForm = () => {
  const { step, setStep, errors, register, handleSubmit, formSubmit } =
    useAddMotorContext();
  console.log(step);
  return (
    <form onSubmit={formSubmit}>
      AddMotorForm
      <TestMot />
      <button>submit</button>
    </form>
  );
};

export default AddMotorForm;
