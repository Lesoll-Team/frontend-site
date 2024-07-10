import useAddProperty from "@/components/newAddProperty/hooks/useAddProperty";
import { useEffect } from "react";
import AceeptedCard from "./components/AceeptedCard";
import { scrollToTop } from "@/utils/scrollToTop";
import { useUser } from "@/Shared/UserContext";
import ActionBtns from "./components/ActionBtns";
import CurrentStep from "./components/CurrentStep";
import NotsignedIn from "./components/NotsignedIn";
import StepsBar from "./components/StepsBar";
import PageLoading from "@/Shared/ui/PageLoading";

const AddProperty = ({ propData }) => {
  const {
    onSubmit,
    errors,
    register,
    setValue,
    watch,
    control,
    step,
    setStep,
    clearErrors,
    formStatus,
    loading,
    posted,
  } = useAddProperty({ propData });
  const { data, status } = useUser();

  useEffect(() => {
    if (formStatus === "success") {
      setStep(1);
      scrollToTop();
    }
  }, [formStatus]);

  if (status === "loading" || status === "idle") {
    return <PageLoading />;
  } else if (data) {
    return (
      <form
        noValidate
        onSubmit={onSubmit}
        className={`min-h-[88dvh]  py-10 container mx-auto  ${
          posted ? "flex flex-col gap-8  justify-center" : "space-y-8"
        }`}
      >
        {posted ? (
          <AceeptedCard />
        ) : (
          <>
            <StepsBar setStep={setStep} step={step} watch={watch} />
            <CurrentStep
              control={control}
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
              step={step}
            />
            <ActionBtns
              formStatus={formStatus}
              loading={loading}
              setStep={setStep}
              step={step}
              watch={watch}
            />
          </>
        )}
      </form>
    );
  } else if (status === "failed") {
    return <NotsignedIn />;
  }
};
export default AddProperty;
