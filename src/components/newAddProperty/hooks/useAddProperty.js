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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getFeatures } from "@/redux-store/features/property/getFeaturesSlice";
import { getCurrencies } from "../redux/currenciesSlice";
import { useRouter } from "next/router";
import {
  buyPackageActionWithCard,
  buyPackageActionWithWallet,
} from "@/utils/PricingAPI";
import { formatApiData } from "@/components/edit-property/utils/fromateApiData";

const useAddProperty = ({ propData }) => {
  const { data: userData, setUserData } = useUser();
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
  const [loading, setLaoding] = useState(false);
  const [posted, setPosted] = useState(false);

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
  const currencies = useSelector((state) => state.getCurrencies.data);
  const features = useSelector((state) => state.getFeatures.features);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(loading);
  // fetch the needed data to use in the form
  useEffect(() => {
    if (!features) {
      dispatch(getFeatures());
    }
    if (!currencies) {
      dispatch(getCurrencies());
    }
  }, []);
  useEffect(() => {
    if (propData) {
      formatApiData({
        setValue: setValue,
        data: propData,
      });
      setReturnData({ _id: propData._id });
    }
  }, [propData]);

  // the last step before payment when it successfull it goes automatically to the next step of the payment process
  useEffect(() => {
    if (draftFormStatus === "success") {
      const nextStep = watch("offer") === "For Investment" ? 4 : 5;
      setStep(nextStep);
      scrollToTop();
    }
  }, [draftFormStatus]);

  useEffect(() => {
    if (
      draftFormStatus === "loading" ||
      finalStepStatus === "loading" ||
      formStatus === "loading"
    ) {
      setLaoding(true);
    } else {
      setLaoding(false);
    }
    if (formStatus === "success") {
      const id = watch("packId");
      console.log();
      if (id) {
        setLaoding(true);
      } else {
        setPosted(true);
        setUserData();
      }
    } else if (finalStepStatus === "success") {
      if (!watch("packId")) {
        setPosted(true);
        setUserData();
      }
    } else {
      setPosted(false);
      // setLaoding(true);
    }
  }, [draftFormStatus, finalStepStatus, formStatus]);

  // redirect to the payment gateway when is successful
  useEffect(() => {
    const id = watch("packId");
    if (finalStepStatus === "success" && watch("adType") === "paid") {
      if (watch("paymentMethod") === "card") {
        setLaoding(true);
        buyPackageActionWithCard({ id }).then((data) => {
          router.push(data.link);
        });
      }
      if (watch("paymentMethod") === "wallet") {
        buyPackageActionWithWallet({ id }).then((data) => {
          router.push(data.link);
        });
      }
    }
  }, [finalStepStatus]);

  // on the success of post draft change the images to the new images from the backend  as a links and id to not resend the images agian if the user edit
  useEffect(() => {
    if (returnData?._id && !watch("thumbnail")) {
      setValue("mainImage", null);
      setValue("multiImage", null);
      setValue("album", returnData.album);
      setValue("thumbnail", returnData?.thumbnail);
    }
  }, [returnData, setValue, watch]);

  // handle the logic to update or post the draft
  const handleDraftOrPost = (formData) => {
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
  };
  const handleEditDraftBeforPost = (formData) => {
    editDraft({
      id: returnData._id,
      data: formData,
      setFormStatus: setDraftFormStatus,
      setServerError: setDraftServerError,
    });
  };
  //  the edit draft for fonal action
  const handleEditDraft = (formData) => {
    editDraft({
      id: returnData._id,
      data: formData,
      setFormStatus: setFinalStepStatus,
      setServerError: setFinalStepError,
    });
  };

  // hancle the form submission on every step
  const handleStepsActions = (data) => {
    const { formData } = useFromatAddData(data);
    const isInvestment = watch("offer") === "For Investment";

    const steps = isInvestment
      ? {
          1: () => {
            setStep(2);
            scrollToTop();
          },
          2: () => {
            setStep(3);
            scrollToTop();
          },
          3: () => {
            handleDraftOrPost(formData);
            setStep(4);
          },
          4: () => handleEditDraft(formData),
        }
      : {
          1: () => {
            setStep(2);
            scrollToTop();
          },
          2: () => {
            setStep(3);
            scrollToTop();
          },
          3: () => {
            setStep(4);
            scrollToTop();
          },
          4: () => {
            handleDraftOrPost(formData);
            setStep(4);
          },
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
    loading,
    posted,
  };
};

export default useAddProperty;
