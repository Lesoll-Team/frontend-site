import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { editNeed } from "../api/editNeedApi";
import { formatNeedApiData } from "../utils/formatNeedApiData";

const useEditNeed = (data) => {
  const [step, setStep] = useState(3);
  const [formStatus, setFormStatus] = useState("idle");
  const [apiError, setApiError] = useState(null);
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
    formatNeedApiData(setValue, (data = data.getData));
  }, []);
  console.log(watch("area"));
  const { errors } = formState;
  const onSubmit = handleSubmit(async (data) => {
    const dataToSend = {
      governrate: data.address.governrate._id,
      region: data.address.region._id,
      unitType: data.unitType.value,
      propType: data.propType.value,

      price: {
        from: data.priceTo,
        to: data.priceTo,
      },
      area: {
        from: data?.areaFrom,
        to: data?.areaTo,
      },
      rooms: data.rooms,
      bathRooms: data.bathRooms,
      saleOption: data.saleOption,
      installment: data.installment,
      description: data.description,
      rentalPeriod: data.rentalPeriod,
      offer: data.offer,
      id: data.id,
    };

    await editNeed({ data: dataToSend, setError: setApiError, setFormStatus });
  });
  return {
    onSubmit,
    control,
    clearErrors,
    formState,
    register,
    reset,
    setValue,
    watch,
    step,
    setStep,
    errors,
    formStatus,
    apiError,
  };
};
export default useEditNeed;
