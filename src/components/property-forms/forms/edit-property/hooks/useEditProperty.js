import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formatApiData } from "../utils/fromateApiData";
import { editFormData } from "../utils/editFormData";
import { scrollToTop } from "@/utils/scrollToTop";
import { getAllProjects } from "@/components/dashboard/router/all-projects/redux/allProjectsSlice";
import { editProperty } from "../../../apis/editPropertyApi";
const useEditProperty = (data) => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const form = useForm();
  const projects = useSelector((state) => state.getProjects.projects.data);
  const projectList = projects?.Property?.map((item) => {
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
    setValue,
    watch,
  } = form;

  useEffect(() => {
    formatApiData({ setValue: setValue, data: data, projectList: projectList });
  }, []);

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  useEffect(() => {
    const crruntProject = projectList?.find(
      (item) => item.value === data.ProjectID,
    );
    setValue("ProjectID", crruntProject);
  }, [projects]);

  const { errors } = formState;

  const onSubmit = handleSubmit((data) => {
    const isInvestment = watch("offer") === "For Investment";
    if (isInvestment) {
      if (step < 3) {
        scrollToTop();
        setStep(step + 1);
      } else {
        const { formData } = editFormData(data);

        editProperty({
          data: formData,
          id: data.id,
          setFormStatus,
          setServerError,
        });
      }
    } else if (step < 4) {
      scrollToTop();
      setStep(step + 1);
    } else {
      const { formData } = editFormData(data);

      editProperty({
        data: formData,
        id: data.id,
        setFormStatus,
        setServerError,
      });
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
    formStatus,
    serverError,
  };
};
export default useEditProperty;
