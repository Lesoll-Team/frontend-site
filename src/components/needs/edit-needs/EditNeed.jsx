import { useEffect, useMemo, useState } from "react";
import OfferType from "../steps/OfferType";
import NeedsForm from "../steps/form/NeedsForm";
import SecondStep from "../steps/SecondStep";
import { useSelector } from "react-redux";
import Accepted from "./Accepted";
import { DotPulse } from "@uiball/loaders";
import Link from "next/link";
import useEditNeed from "./hooks/useEditNeed";

const EditNeed = ({ data }) => {
  const [sended, setSended] = useState();
  const userData = useSelector((state) => state.userProfile.userData);
  const userDataStatus = useSelector((state) => state.userProfile.status);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const {
    errors,
    onSubmit,
    control,
    clearErrors,
    // formState,
    register,
    reset,
    setValue,
    watch,
    step,
    setStep,
    formState,
    formStatus,
  } = useEditNeed(data);

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
  useEffect(() => {
    if (formStatus === "succeeded") {
      setSended(true);
    }
  }, [formStatus]);
  if (userDataStatus === "loading") {
    return (
      <div className="w-full h-[90dvh] flex items-center justify-center">
        <DotPulse size={60} color="#309da0" />
      </div>
    );
  } else if (userData) {
    return (
      <form
        noValidate
        onSubmit={onSubmit}
        className={`min-h-[88dvh]  py-10 px-5  md:px-0   ${sended ? "flex flex-col gap-8  justify-center" : "space-y-8"
          }`}
      >
        {formStatus === "success" ? (
          <div className="container mx-auto">
            <Accepted />
          </div>
        ) : (
          <div className=" my-10">
            <div className=" ">
              {sended ? (
                <div className="flex items-center justify-center h-[70dvh] container mx-auto">
                  <Accepted />
                </div>
              ) : (
                renderStep
              )}
            </div>
          </div>
        )}

        {/* {errorSubmit && <p>{errorSubmit.message}</p>} */}
      </form>
    );
  } else if (userDataStatus === "failed") {
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
export default EditNeed;
