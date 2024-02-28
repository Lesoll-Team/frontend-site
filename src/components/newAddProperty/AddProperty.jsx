import useAddProperty from "@/Hooks/addProperty/useAddProperty";
import Button from "@/Shared/ui/Button";
import { DevTool } from "@hookform/devtools";
import AddPropMainInfo from "./mainInfo/AddPropMainInfo";
import Steps from "./Steps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import AddPropDetails from "./details/AddPropDetails";
import { getFeatures } from "@/redux-store/features/property/getFeaturesSlice";
import AddPropertyPrice from "./price/AddPropertyPrice";
import PropertyImages from "./imgs/PropertyImages";
import { getCompounds } from "@/redux-store/features/property/compoundSlice";

const AddProperty = () => {
  const {
    onSubmit,
    errors,
    register,
    setValue,
    watch,
    control,
    step,
    setStep,
    clearErrors,
    fields,
    append,
    remove,
  } = useAddProperty();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const features = useSelector((state) => state.getFeatures.features);
  const dispatch = useDispatch();

  const installment = watch("installment").map((plan) => {
    return {
      type: plan.type.value,
      period: plan.period || "",
      amount: plan.amount || "",
      downPayment: plan.downPayment || "",
      discount: plan.discount || "",
    };
  });

  useEffect(() => {
    if (!features) {
      dispatch(getFeatures());
    }
  }, []);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AddPropMainInfo
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      case 2:
        return (
          <AddPropertyPrice
            fields={fields}
            append={append}
            remove={remove}
            control={control}
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );

      case 3:
        return (
          <AddPropDetails
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      case 4:
        return (
          <PropertyImages
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );

      default:
        return (
          <PropertyImages
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
    }
  };
  const errorSubmit = useSelector((state) => state.addProperty.error);
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="min-h-[88dvh]  py-10 container mx-auto space-y-8 "
    >
      <Steps setStep={setStep} step={step} watch={watch} />
      {renderStep()}
      <div className="flex items-center gap-4 max-w-[400px]">
        {step > 1 && (
          <Button
            onClick={() => {
              setStep((prev) => prev - 1);
            }}
            variant="bordered"
            type={"button"}
            className={"w- h-auto py-2"}
          >
            {language ? "السابق" : "Back"}
          </Button>
        )}
        <Button variant="" type={"submit"} className={"w- h-auto py-2"}>
          {step > 3
            ? language
              ? "أضف عقارك"
              : "Add your property"
            : language
            ? "التالى"
            : "Next"}
        </Button>
      </div>
      {errorSubmit && <p>{errorSubmit.message}</p>}
    </form>
  );
};
export default AddProperty;
