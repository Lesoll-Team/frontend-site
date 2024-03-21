import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProject } from "../redux/addProjectSlice";

const useAddProject = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const form = useForm({
    defaultValues: {
      installment: [
        {
          type: {
            value: "",
            name: {
              ar: "",
              en: "",
            },
          },
          period: "",
          amount: "",
          downPayment: "",
          ProjectPercentage: "",

          discount: "",
        },
      ],
    },
  });
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
    const installment = data?.installment?.map((plan) => {
      return {
        type: plan?.type?.value || "",
        period: plan?.period || "",
        amount: plan?.amount || "",
        downPayment: plan?.downPayment || "",
        discount: plan?.discount || "",
        ProjectPercentage: plan.ProjectPercentage || "",
      };
    });
    const address = {
      name: data.address.name,
      longitude: data.address.longitude,
      latitude: data.address.latitude,
      region: data.address.region.city_name_ar,
      governrate: data.address.governrate.governorate_name_ar,
    };
    const formData = new FormData();
    formData.append("mainImage", data.mainImage);
    data?.projectLogo && formData.append("projectLogo", data.projectLogo);
    // data?.watermark && formData.append("watermark", data.watermark);
    for (let i = 0; i < data.multiImage.length; i++) {
      formData.append("multiImage", data.multiImage[i]);
    }
    for (let i = 0; i < installment?.length; i++) {
      formData.append("installment", JSON.stringify(installment[i]));
    }
    formData.append("titleAr", data.titleAr || "");
    formData.append("titleEn", data.titleEn || "");
    formData.append("cashPercentage", data.cashPercentage || "");
    formData.append("areaFrom", data.areaFrom || "");
    formData.append("areaTo", data.areaTo || "");
    formData.append("priceFrom", data.priceFrom || "");
    formData.append("priceTo", data.priceTo || "");
    formData.append("address", JSON.stringify(address));
    formData.append("isCompound", data.isCompound ? true : false);
    formData.append("descriptionAr", data.descriptionAr || "");
    formData.append("descriptionEn", data.descriptionEn || "");
    formData.append("aboutAr", data.aboutAr || "");
    formData.append("aboutEn", data.aboutEn || "");
    data.isCompound && formData.append("compaounds", data.compaounds?._id);
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
    reset,
  };
};
export default useAddProject;
