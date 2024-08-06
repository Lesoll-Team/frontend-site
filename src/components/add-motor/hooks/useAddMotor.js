import { getCurrencies } from "@/components/newAddProperty/redux/currenciesSlice";
import { scrollToTop } from "@/utils/scrollToTop";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialFormData } from "../data/initialAddMotorData";
import { useForm } from "react-hook-form";
import { useUser } from "@/Shared/UserContext";
import { getMotorServices } from "@/redux-store/features/motor/getMotoServicesSlice";
import { getCarBrands } from "@/redux-store/features/motor/getCarBrandsSlice";
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
  const carBrands = useSelector((state) => state.carBrands.brands);
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
  }, []);
  console.log(watch("brand"));
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
    if (step < 7) {
      setStep((prev) => prev + 1);
    }
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
