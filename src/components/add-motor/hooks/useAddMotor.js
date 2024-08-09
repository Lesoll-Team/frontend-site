import { getCurrencies } from "@/components/newAddProperty/redux/currenciesSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialFormData } from "../data/initialAddMotorData";
import { useForm } from "react-hook-form";
import { useUser } from "@/Shared/UserContext";
import { getMotorServices } from "@/redux-store/features/motor/getMotoServicesSlice";
import { getCarBrands } from "@/redux-store/features/motor/getCarBrandsSlice";
import { getCarModels } from "@/redux-store/features/motor/getCarModelSlice";
import { createMotorDraft, updateMotorDraft } from "../apis/addMotorApis";
import { motorFormData } from "../utils/motorFormData";
import { scrollToTop } from "@/utils/scrollToTop";
const useAddMotor = () => {
  const [step, setStep] = useState(1);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState("idle");
  const [returnData, setReturnData] = useState(null);
  const [finalStepStatus, setFinalStepStatus] = useState("idle");
  const [posted, setPosted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialFormData,
  });
  const { setUserData } = useUser();
  const currencies = useSelector((state) => state.getCurrencies.data);
  const motorServices = useSelector((state) => state.motorServices.services);
  const carBrands = useSelector((state) => state.carBrands.brands);
  const carModels = useSelector((state) => state.brandModels.models);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currencies) {
      dispatch(getCurrencies());
    }
    if (!motorServices) {
      dispatch(getMotorServices());
    }
    if (!carBrands) {
      dispatch(getCarBrands());
    }
    if (!carModels) {
      dispatch(getCarModels());
    }
  }, []);

  useEffect(() => {
    if (returnData?._id && !watch("thumbnail")) {
      setValue("mainImage", null);
      setValue("multiImage", null);
      setValue("album", returnData?.album);
      setValue("thumbnail", returnData?.thumbnail);
    }
  }, [returnData, setValue, watch]);

  useEffect(() => {
    if (formStatus === "success") {
      setFormStatus("idle");
      step < 7 && setStep((prev) => prev + 1);
      scrollToTop();
    }
  }, [formStatus]);
  useEffect(() => {
    if (finalStepStatus === "success") {
      setFinalStepStatus("idle");
      setPosted(true);
      setUserData();
    }
  }, [finalStepStatus]);

  const onSubmit = async (data) => {
    if (!returnData?._id) {
      if (step < 3) {
        setStep((prev) => prev + 1);
      } else {
        createMotorDraft({
          data: motorFormData({
            brand: data.brand,
            model: data.model,
            usedSince: data.usedSince,
          }),
          setFormStatus,
          setServerError,
          setReturnData,
        });
      }
    } else {
      step < 7
        ? updateMotorDraft({
            data: motorFormData(data, step),
            setFormStatus,
            setServerError,
            setReturnData,
            id: returnData?._id,
          })
        : updateMotorDraft({
            data: motorFormData(data, step),
            setFormStatus: setFinalStepStatus,
            setServerError,
            setReturnData,
            id: returnData?._id,
          });
    }
  };
  const formSubmit = handleSubmit(onSubmit);
  const loading = formStatus == "loading" || finalStepStatus === "loading";
  return {
    step,
    setStep,
    errors,
    setValue,
    clearErrors,
    register,
    control,
    handleSubmit,
    formSubmit,
    watch,
    loading,
    posted,
  };
};

export default useAddMotor;
