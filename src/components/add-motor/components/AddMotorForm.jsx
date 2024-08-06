import React, { useCallback } from "react";
import { useAddMotorContext } from "../context/AddMotorContext";
// import CarBrandStep from "./steps/car-brand/CarBrandStep";
import StepTitle from "./step-title/StepTitle";
import {
  CarBrandStep,
  CarColorStep,
  CarImagesStep,
  CarInfoStep,
  CarMadeAtStep,
  CarModalStep,
  CarPaymentStep,
} from "./steps";

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
      case 6:
        return <CarImagesStep />;
      case 7:
        return <CarPaymentStep />;
      default:
        return <CarBrandStep />;
    }
  }, [step, setStep]);
  return (
    <form onSubmit={formSubmit} className="space-y-4 md:space-y-8">
      <StepTitle />
      {renderStep()}
    </form>
  );
};

export default AddMotorForm;
