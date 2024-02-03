import { useForm } from "react-hook-form";
import { initialAddPropData } from "./initialData";
import { useState } from "react";
import useFromatAddData from "./useFromatAddData";
const useAddProperty = () => {
  const [step, setStep] = useState(1);
  const form = useForm({
    defaultValues: initialAddPropData,
  });
  const { handleSubmit, control, formState, register, reset, setValue, watch } =
    form;

  const { errors, isSubmitting, isSubmitSuccessful } = formState;

  const onSubmit = handleSubmit((data) => {
    if (step < 4) {
      setStep(step + 1);
    } else {
    }
    const { formData } = useFromatAddData(data);
    console.log(formData.get("title"));
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
  };
};
export default useAddProperty;
