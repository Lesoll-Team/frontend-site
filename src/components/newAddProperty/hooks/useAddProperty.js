import { useForm } from "react-hook-form";
import { initialAddPropData } from "../data/initialData";
import { useEffect, useState } from "react";
import useFromatAddData from "./useFromatAddData";
import { scrollToTop } from "@/utils/scrollToTop";
import { postProperty } from "@/components/newAddProperty/apis/addEditPropertyApis";
const useAddProperty = () => {
  const [step, setStep] = useState(1);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [returnData, setReturnData] = useState(null);
  console.log(returnData);
  const form = useForm({
    defaultValues: initialAddPropData,
  });
  const {
    handleSubmit,
    control,
    clearErrors,
    formState,
    register,
    setValue,
    watch,
  } = form;
  useEffect(() => {
    if (returnData?._id && !watch("thumbnail")) {
      setValue("album", returnData.album);
      setValue("thumbnail", returnData?.thumbnail);
    }
  }, [returnData]);
  const { errors } = formState;
  const onSubmit = handleSubmit((data) => {
    const isInvestment = watch("offer") === "For Investment";
    if (isInvestment) {
      if (step < 3) {
        setStep(step + 1);
        scrollToTop();
      } else {
        const { formData } = useFromatAddData(data);
        postProperty({
          data: formData,
          setFormStatus,
          setServerError,
          setReturnData,
        });
      }
    } else {
      if (step < 4) {
        scrollToTop();
        setStep(step + 1);
      } else {
        const { formData } = useFromatAddData(data);
        postProperty({
          data: formData,
          setFormStatus,
          setServerError,
          setReturnData,
        });
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
    formStatus,
    serverError,
  };
};
export default useAddProperty;
