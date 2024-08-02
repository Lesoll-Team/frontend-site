import { getCurrencies } from "@/components/newAddProperty/redux/currenciesSlice";
import { scrollToTop } from "@/utils/scrollToTop";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialFormData } from "../data/initialAddMotorData";
import { useForm } from "react-hook-form";
import { useUser } from "@/Shared/UserContext";
import { getMotorServices } from "@/redux-store/features/motor/getMotoServicesSlice";
const useAddMotor = () => {
  const [step, setStep] = useState(1);
  const [formStatus, setFormStatus] = useState("idle");
  const [returnData, setReturnData] = useState(null);

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
  const { data: userData, setUserData } = useUser();
  const currencies = useSelector((state) => state.getCurrencies.data);
  const motorServices = useSelector((state) => state.motorServices.services);
  const dispatch = useDispatch();
  console.log(motorServices);
  useEffect(() => {
    if (!currencies) {
      dispatch(getCurrencies());
    }
    if (!motorServices) {
      dispatch(getMotorServices());
    }
  }, []);
  useEffect(() => {
    if (returnData?._id && !watch("thumbnail")) {
      setValue("mainImage", null);
      setValue("multiImage", null);
      setValue("album", returnData.album);
      setValue("thumbnail", returnData?.thumbnail);
    }
  }, [returnData, setValue, watch]);
  const onSubmit = async (data) => {
    console.log(data);
  };
  const formSubmit = handleSubmit(onSubmit);
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
  };
};

export default useAddMotor;
