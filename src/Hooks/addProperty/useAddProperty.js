import { useFieldArray, useForm } from "react-hook-form";
import { initialAddPropData } from "./initialData";
import { useEffect, useState } from "react";
import useFromatAddData from "./useFromatAddData";
import { useDispatch } from "react-redux";
import { submitProperty } from "@/redux-store/features/property/addPropertySlice";
import { formatApiData } from "../editProperty/fromateApiData";
const useAddProperty = (data) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const form = useForm({
    defaultValues: formatApiData(data),
  });
  console.log(data.address.governrate);
  useEffect(() => {
    setValue("address.governrate", data.address.governrate);
  }, [data]);
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
export default useAddProperty;
