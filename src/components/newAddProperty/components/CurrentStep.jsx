import React from "react";
import AddPropMainInfo from "../mainInfo/AddPropMainInfo";
import AddPropDetails from "../details/AddPropDetails";
import ImagesStep from "./ImagesStep";
import PaymentStep from "./payment-step/PaymentStep";
import AddPropertyPrice from "../price/AddPropertyPrice";

const CurrentStep = ({
  errors,
  clearErrors,
  register,
  setValue,
  watch,
  control,
  step,
}) => {
  const isInvestment = watch("offer") === "For Investment";
  const renderStep = () => {
    const stepComponents = isInvestment
      ? {
          1: (
            <AddPropMainInfo
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          2: (
            <AddPropDetails
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          3: (
            <ImagesStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          4: (
            <PaymentStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
        }
      : {
          1: (
            <AddPropMainInfo
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          2: (
            <AddPropertyPrice
              control={control}
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          3: (
            <AddPropDetails
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          4: (
            <ImagesStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          5: (
            <PaymentStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
        };

    return stepComponents[step] || null;
  };
  return renderStep();
};

export default CurrentStep;
