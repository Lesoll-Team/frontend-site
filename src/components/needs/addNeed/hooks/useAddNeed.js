import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNeed } from "../redux/addNeedSlice";
import { useState } from "react";

const useAddNeed = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
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
      bathRooms: data.bathRooms,
      saleOption: data.saleOption,
      installment: data.installment,
      description: data.description,
      rentalPeriod: data.rentalPeriod,
      offer: data.offer,
    };

    await dispatch(addNeed(dataToSend));
    // console.log(data);
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
  };
};
export default useAddNeed;
