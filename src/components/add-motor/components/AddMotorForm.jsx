import React from "react";
import { useAddMotorContext } from "../context/addMotorContext";
import TestMot from "./TestMot";
import CarBrandStep from "./steps/car-brand/CarBrandStep";

const AddMotorForm = () => {
  const { step, setStep, errors, register, handleSubmit, formSubmit } =
    useAddMotorContext();
  // console.log(step);
  const renderStep = () => <CarBrandStep />;
  return <form onSubmit={formSubmit}>{renderStep()}</form>;
};

export default AddMotorForm;
