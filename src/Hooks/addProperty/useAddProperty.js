import { useFieldArray, useForm } from "react-hook-form";
import { initialAddPropData } from "./initialData";
import { useEffect, useState } from "react";
import useFromatAddData from "./useFromatAddData";
import { useDispatch } from "react-redux";
import { submitProperty } from "@/redux-store/features/property/addPropertySlice";
import { scrollToTop } from "@/utils/scrollToTop";
// import { formatApiData } from "../editProperty/fromateApiData";
const useAddProperty = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const form = useForm({
    defaultValues: initialAddPropData,
  });

  const {
    handleSubmit,
    control,
    clearErrors,
    formState,
    register,
    reset,
    setValue,
    watch,
  } = form;

  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "installment",
    control,
  });

  const onSubmit = handleSubmit((data) => {
    const isInvestment = watch("offer") === "For Investment";
    if (isInvestment) {
      if (step < 3) {
        setStep(step + 1);
        scrollToTop();
      } else {
        const { formData } = useFromatAddData(data);
        dispatch(submitProperty(formData));
      }
    } else {
      if (step < 4) {
        scrollToTop();
        setStep(step + 1);
      } else {
        const { formData } = useFromatAddData(data);
        dispatch(submitProperty(formData));
      }
    }
  });

  return {
    onSubmit,
    errors,
    register,
    setValue,
    watch,
    control,
    setStep,
    step,
    clearErrors,
    fields,
    append,
    remove,
  };
};
export default useAddProperty;
