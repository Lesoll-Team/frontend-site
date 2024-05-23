import { useForm } from "react-hook-form";
import { initialAddPropData } from "../data/initialData";
import { useEffect, useState } from "react";
import useFromatAddData from "./useFromatAddData";
import { scrollToTop } from "@/utils/scrollToTop";
import {
  editDraft,
  postDraft,
  postProperty,
} from "@/components/newAddProperty/apis/addEditPropertyApis";
import { useUser } from "@/Shared/UserContext";
import { setStep as reduxSetStep } from "@/redux-store/features/addPropertySlice";

const useAddProperty = () => {
  const { data: userData } = useUser();
  const userHavePackage =
    userData?.packageSubscribe && userData?.pinPropertyNumber;
  const [step, setStep] = useState(1);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [returnData, setReturnData] = useState(null);
  const [draftFormStatus, setDraftFormStatus] = useState("idle");
  const [draftServerError, setDraftServerError] = useState(null);
  const [finalStepStatus, setFinalStepStatus] = useState(null);
  const [finalStepError, setFinalStepError] = useState(null);

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
  const { errors } = formState;

  useEffect(() => {
    if (draftFormStatus === "success") {
      const nextStep = watch("offer") === "For Investment" ? 4 : 5;
      setStep(nextStep);
      scrollToTop();
    }
  }, [draftFormStatus]);

  useEffect(() => {
    if (returnData?._id && !watch("thumbnail")) {
      setValue("mainImage", null);
      setValue("multiImage", null);
      setValue("album", returnData.album);
      setValue("thumbnail", returnData?.thumbnail);
    }
  }, [returnData, setValue, watch]);

  const handleDraftOrPost = (formData) => {
    if (userHavePackage) {
      postProperty({
        data: formData,
        setFormStatus,
        setServerError,
      });
    } else {
      if (returnData?._id) {
        editDraft({
          id: returnData._id,
          data: formData,
          setFormStatus: setDraftFormStatus,
          setServerError: setDraftServerError,
        });
      } else {
        postDraft({
          data: formData,
          setFormStatus: setDraftFormStatus,
          setServerError: setDraftServerError,
          setReturnData,
        });
      }
    }
  };

  const handleEditDraft = (formData) => {
    editDraft({
      id: returnData._id,
      data: formData,
      setFormStatus: setFinalStepStatus,
      setServerError: setFinalStepError,
    });
  };

  const handleStepsActions = (data) => {
    const { formData } = useFromatAddData(data);
    const isInvestment = watch("offer") === "For Investment";

    const steps = isInvestment
      ? {
          1: () => setStep(2),
          2: () => setStep(3),
          3: () => handleDraftOrPost(formData),
          4: () => handleEditDraft(formData),
        }
      : {
          1: () => setStep(2),
          2: () => setStep(3),
          3: () => setStep(4),
          4: () => handleDraftOrPost(formData),
          5: () => handleEditDraft(formData),
        };

    if (steps[step]) {
      steps[step]();
    } else {
      console.error(`No handler for step ${step}`);
    }
  };

  const onSubmit = handleSubmit((data) => {
    handleStepsActions(data, step);
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
