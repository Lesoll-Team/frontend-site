import { useSelector } from "react-redux";
import MainInfo from "./steps/MainInfo";
import { useFieldArray } from "react-hook-form";
import Button from "@/Shared/ui/Button";
import useAddProject from "./hooks/useAddProject";

const AddProject = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
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
  } = useAddProject();

  return (
    <main className="mx-auto px-2 md:px-0 md:container py-10">
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
    </main>
  );
};
export default AddProject;
