import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import useFromatAddData from "./useFromatAddData";
import { useDispatch } from "react-redux";
const useEditProperty = () => {
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
    if (step < 4) {
      setStep(step + 1);
    } else {
      const { formData } = useFromatAddData(data);
      dispatch(submitProperty(formData));
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
export default useEditProperty;
