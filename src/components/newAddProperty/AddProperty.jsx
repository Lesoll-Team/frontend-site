import useAddProperty from "@/Hooks/addProperty/useAddProperty";
import Button from "@/Shared/ui/Button";
import { DevTool } from "@hookform/devtools";
import AddPropMainInfo from "./mainInfo/AddPropMainInfo";
import Steps from "./Steps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import AddPropDetails from "./details/AddPropDetails";
import { getFeatures } from "@/redux-store/features/property/getFeaturesSlice";

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
  } = useAddProperty();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const features = useSelector((state) => state.getFeatures.features);
  const dispatch = useDispatch();
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
          <AddPropDetails
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );

      default:
        return (
          <AddPropMainInfo
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
    }
  };
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
    </form>
  );
};
export default AddProperty;
