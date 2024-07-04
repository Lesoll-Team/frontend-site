import { useMemo } from "react";
import OfferType from "../steps/OfferType";
import NeedsForm from "../steps/form/NeedsForm";
import SecondStep from "../steps/SecondStep";
import useAddNeed from "./hooks/useAddNeed";
import Accepted from "./Accepted";
import { DotPulse } from "@uiball/loaders";
import Link from "next/link";
import { useUser } from "@/Shared/UserContext";
import { getLangBoolean } from "@/utils/getLangBoolean";

const AddNeed = () => {
  const { data, status } = useUser();

  const language = getLangBoolean();

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
  } else if (data) {
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
    return (
      <div className="w-full h-[90dvh] flex items-center justify-center container mx-auto">
        <div className="max-w-[450px] p-5 py-8 bg-white rounded-lg border w-full drop-shadow flex flex-col justify-center items-center gap-5 md:gap-8">
          <h3 className="text-base md:text-2xl font-semibold">
            {language
              ? "يجب عليك تسجيل الدخول اولا"
              : "You have to log in first "}
          </h3>
          <Link
            href={"/signin"}
            className="w-full rounded-full text-center py-3 bg-lightGreen text-white"
          >
            {language ? "سجل الدخول" : "Log In"}
          </Link>
        </div>
      </div>
    );
  }
};
export default AddNeed;
