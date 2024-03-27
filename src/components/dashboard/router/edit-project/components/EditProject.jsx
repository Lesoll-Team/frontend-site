import { useDispatch, useSelector } from "react-redux";
import MainInfo from "./MainInfo";
import Button from "@/Shared/ui/Button";
import { useEffect, useState } from "react";
import SubmitedCard from "./SubmitedCard";
import useEditProject from "../hooks/useEditProject";
import { resetEditProject } from "../redux/editProjectSlice";
import { formateApiData } from "../utils/formateApiData";
import { Ring } from "@uiball/loaders";

const EditProject = () => {
  const project = useSelector((state) => state.editProject.project.data);
  const formStatus = useSelector(
    (state) => state.editProject.postProject.status
  );

  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const [sended, setSended] = useState(false);
  const {
    clearErrors,
    control,
    errors,
    onSubmit,
    register,
    setStep,
    setValue,
    step,
    watch,
    reset,
  } = useEditProject();
  useEffect(() => {
    if (formStatus === "succeeded") {
      setSended(true);
      dispatch(resetEditProject());
      reset();
    }
  }, [formStatus]);
  useEffect(() => {
    formateApiData(setValue, project);
  }, []);
  return (
    <main className="mx-auto px-5 md:px-0 md:container py-10">
      {sended ? (
        <SubmitedCard setSended={setSended} />
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <MainInfo
            setValue={setValue}
            step={step}
            watch={watch}
            register={register}
            errors={errors}
            clearErrors={clearErrors}
            control={control}
          />
          <Button disabled={formStatus === "loading"}>
            {formStatus === "loading" ? (
              <Ring size={28} color="#fff" />
            ) : language ? (
              "تعديل"
            ) : (
              "edit"
            )}
          </Button>
        </form>
      )}
    </main>
  );
};
export default EditProject;
