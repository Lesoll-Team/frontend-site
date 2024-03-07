import { useEffect, useMemo, useState } from "react";
import OfferType from "../steps/OfferType";
import NeedsForm from "../steps/form/NeedsForm";
import SecondStep from "../steps/SecondStep";
import useAddNeed from "./hooks/useAddNeed";
import { useSelector } from "react-redux";
import Accepted from "./Accepted";

const AddNeed = () => {
  const formStatus = useSelector((state) => state.addNeed.status);
  const [sended, setSended] = useState();
  console.log(formStatus);
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
  return (
    <div className=" my-10">
      <div className="container mx-auto ">
        {sended ? (
          <div className="flex items-center justify-center h-[70dvh]">
            <Accepted />
          </div>
        ) : (
          renderStep
        )}
      </div>
    </div>
  );
};
export default AddNeed;
