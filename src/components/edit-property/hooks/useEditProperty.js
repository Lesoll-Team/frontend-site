import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import useFromatAddData from "@/Hooks/addProperty/useFromatAddData";
import { useDispatch, useSelector } from "react-redux";
import { formatApiData } from "../utils/fromateApiData";
import { editProperty } from "../redux/editPropertSlice";
import { editFormData } from "../utils/editFormData";
import { scrollToTop } from "@/utils/scrollToTop";
import { getAllProjects } from "@/components/dashboard/router/all-projects/redux/allProjectsSlice";
const useEditProperty = (data) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const form = useForm();
  const projects = useSelector((state) => state.getProjects.projects.data);
  const projectList =
    projects &&
    projects?.Property?.map((item) => {
      return {
        value: item._id,
        name: { ar: item.titleAr, en: item.titleEn },
      };
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
  useEffect(() => {
    formatApiData({ setValue: setValue, data: data, projectList: projectList });
  }, []);
  useEffect(() => {
    dispatch(getAllProjects());
  }, []);
  const { errors, isSubmitting, isSubmitSuccessful } = formState;
  // const { fields, append, remove } = useFieldArray({
  //   name: "installment",
  //   control,
  // });
  // const onSubmit = handleSubmit((data) => {
  //   if (step < ) {
  //     setStep(step + 1);
  //   } else {
  //     // const { formData } = useFromatAddData(data);
  //     // dispatch(submitProperty(formData));

  //     dispatch(editProperty(data, data.id));
  //   }
  // });

  const onSubmit = handleSubmit((data) => {
    const isInvestment = watch("offer") === "For Investment";
    if (isInvestment) {
      if (step < 3) {
        scrollToTop();
        setStep(step + 1);
      } else {
        dispatch(editProperty(data, data.id));
      }
    } else {
      if (step < 4) {
        scrollToTop();
        setStep(step + 1);
      } else {
        dispatch(editProperty(data, data.id));
      }
    }
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
    // fields,
    // append,
    // remove,
  };
};
export default useEditProperty;
