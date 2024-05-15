import { useForm } from "react-hook-form";
import { useState } from "react";
import { postNeed } from "../api/needsApi";

const useAddNeed = () => {
  const [step, setStep] = useState(1);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
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
      bathRooms: data.bathrooms,
      saleOption: data.saleOption,
      installment: data.installment,
      description: data.description,
      rentalPeriod: data.rentalPeriod,
      offer: data.offer,
      connectPhoneNumber: data.connectPhoneNumber || "",
    };

    await postNeed({ data: dataToSend, setFormStatus, setServerError });
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
    serverError,
  };
};
export default useAddNeed;
