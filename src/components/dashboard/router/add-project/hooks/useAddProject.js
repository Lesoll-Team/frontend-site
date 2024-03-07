import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject } from "../redux/addProjectSlice";

const useAddProject = () => {
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
  const { errors } = formState;
  const onSubmit = handleSubmit(async (data) => {
    const address = {
      name: data.address.name,
      longitude: data.address.longitude,
      latitude: data.address.latitude,
      region: data.address.region.city_name_ar,
      governrate: data.address.governrate.governorate_name_ar,
    };
    const formData = FormData();
    formData.append("mainImage", data.mainImage);
    for (let i = 0; i < data.multiImage.length; i++) {
      formData.append("multiImage", data.multiImage[i]);
    }
    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("address", address);

    await dispatch(addProject(formData));
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
  };
};
export default useAddProject;
