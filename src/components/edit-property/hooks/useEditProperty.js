import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useFromatAddData from "@/Hooks/addProperty/useFromatAddData";
import { useDispatch } from "react-redux";
import { formatApiData } from "../utils/fromateApiData";
import { editProperty } from "../redux/editPropertSlice";
import { editFormData } from "../utils/editFormData";
const useEditProperty = (data) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const form = useForm();
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
  useEffect(() => {
    formatApiData({ setValue: setValue, data: data });
  }, []);
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  // const { fields, append, remove } = useFieldArray({
  //   name: "installment",
  //   control,
  // });
  const onSubmit = handleSubmit((data) => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // const { formData } = useFromatAddData(data);
      // dispatch(submitProperty(formData));
      const { formData } = editFormData(data);
      console.log(data);
      dispatch(editProperty(formData, data.id));
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
    // fields,
    // append,
    // remove,
  };
};
export default useEditProperty;
