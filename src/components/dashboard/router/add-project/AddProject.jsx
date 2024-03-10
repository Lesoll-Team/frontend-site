import { useDispatch, useSelector } from "react-redux";
import MainInfo from "./steps/MainInfo";
import { useFieldArray } from "react-hook-form";
import Button from "@/Shared/ui/Button";
import useAddProject from "./hooks/useAddProject";
import { useEffect, useState } from "react";
import SubmitedCard from "./SubmitedCard";
import { resetAddPoject } from "./redux/addProjectSlice";

const AddProject = () => {
  const formStatus = useSelector((state) => state.addProject.status);

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
  } = useAddProject();
  useEffect(() => {
    if (formStatus === "succeeded") {
      setSended(true);
      dispatch(resetAddPoject());
      reset();
    }
  }, [formStatus]);
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
          <Button>{language ? "إضافة" : "Submit"}</Button>
        </form>
      )}
    </main>
  );
};
export default AddProject;
