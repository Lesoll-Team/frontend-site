import React, { useCallback } from "react";
import { useAddMotorContext } from "../context/AddMotorContext";
import CarBrandStep from "./steps/car-brand/CarBrandStep";
import StepTitle from "./step-title/StepTitle";
import CarModalStep from "./steps/car-model/CarModelStep";
import CarColorStep from "./steps/car-color/CarColorStep";
import CarMadeAtStep from "./steps/made-at/CarMadeAtStep";
import CarInfoStep from "./steps/car-info/CarInfoStep";

const AddMotorForm = () => {
  const { step, setStep, formSubmit } = useAddMotorContext();

  const renderStep = useCallback(() => {
    switch (step) {
      case 1:
        return <CarBrandStep />;
      case 2:
        return <CarModalStep />;
      case 3:
        return <CarMadeAtStep />;
      case 4:
        return <CarColorStep />;
      case 5:
        return <CarInfoStep />;
      default:
        return <CarBrandStep />;
    }
  }, [step, setStep]);
  return (
    <form onSubmit={formSubmit} className="space-y-8">
      <StepTitle />
      {renderStep()}
    </form>
  );
};

export default AddMotorForm;
