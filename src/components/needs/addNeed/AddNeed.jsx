import { useMemo } from "react";
import OfferType from "../steps/OfferType";
import NeedsForm from "../steps/form/NeedsForm";
import SecondStep from "../steps/SecondStep";
import useAddNeed from "./hooks/useAddNeed";
import { useSelector } from "react-redux";
import Accepted from "./Accepted";
import { DotPulse } from "@uiball/loaders";
import Link from "next/link";
import { useUser } from "@/Shared/UserContext";
import SignInToPost from "@/Shared/SignInToPost";

const AddNeed = () => {
  const { data, status } = useUser();
  const {
    errors,
    onSubmit,
    clearErrors,
    register,
    setValue,
    watch,
    step,
    setStep,
    formStatus,
  } = useAddNeed();
  const renderStep = useMemo(() => {
    switch (step) {
      case 1:
        return (
          <OfferType setValue={setValue} watch={watch} setStep={setStep} />
        );
      case 2:
        return (
          <SecondStep setValue={setValue} watch={watch} setStep={setStep} />
        );
      case 3:
        return (
          <NeedsForm
            formStatus={formStatus}
            onSubmit={onSubmit}
            setValue={setValue}
            register={register}
            watch={watch}
            setStep={setStep}
            errors={errors}
            clearErrors={clearErrors}
          />
        );
      default:
        return <OfferType />;
    }
  });

  if (status === "loading") {
    return (
      <div className="w-full h-[90dvh] flex items-center justify-center">
        <DotPulse size={60} color="#309da0" />
      </div>
    );
  } else if (status === "succeeded") {
    return (
      <form
        noValidate
        onSubmit={onSubmit}
        className={`min-h-[88dvh]  py-10 px-5  md:px-0   ${
          formStatus === "success"
            ? "flex flex-col gap-8  justify-center"
            : "space-y-8"
        }`}
      >
        <div className=" my-10">
          <div className=" ">
            {formStatus === "success" ? (
              <div className="flex items-center justify-center h-[70dvh] container mx-auto">
                <Accepted />
              </div>
            ) : (
              renderStep
            )}
          </div>
        </div>

        {/* {errorSubmit && <p>{errorSubmit.message}</p>} */}
      </form>
    );
  } else if (status === "failed") {
    return <SignInToPost needs />;
  }
};
export default AddNeed;
