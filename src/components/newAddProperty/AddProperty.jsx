import useAddProperty from "@/Hooks/addProperty/useAddProperty";
import Button from "@/Shared/ui/Button";
import { DevTool } from "@hookform/devtools";
import AddPropMainInfo from "./mainInfo/AddPropMainInfo";
import Steps from "./Steps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import AddPropDetails from "./details/AddPropDetails";
import { getFeatures } from "@/redux-store/features/property/getFeaturesSlice";
import AddPropertyPrice from "./price/AddPropertyPrice";
import PropertyImages from "./imgs/PropertyImages";
import { getCompounds } from "@/redux-store/features/property/compoundSlice";
import { resetAddProp } from "@/redux-store/features/property/addPropertySlice";
import Image from "next/image";
import Link from "next/link";
import AceeptedCard from "./AceeptedCard";
import { DotPulse } from "@uiball/loaders";
const AddProperty = () => {
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
    fields,
    append,
    remove,
  } = useAddProperty();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const features = useSelector((state) => state.getFeatures.features);
  const formStatus = useSelector((state) => state.addProperty.status);
  const userData = useSelector((state) => state.userProfile.userData);
  const userDataStatus = useSelector((state) => state.userProfile.status);

  const [sended, setSended] = useState(false);
  console.log(formStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!features) {
      dispatch(getFeatures());
    }
  }, []);
  useEffect(() => {
    if (formStatus === "succeeded") {
      setSended(true);
      dispatch(resetAddProp());
      setStep(1);
    }
  }, [formStatus]);
  // const addNewwProp = () => {
  //   setSended(false);
  // };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <AddPropMainInfo
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      case 2:
        return (
          <AddPropertyPrice
            fields={fields}
            append={append}
            remove={remove}
            control={control}
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );

      case 3:
        return (
          <AddPropDetails
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
      case 4:
        return (
          <PropertyImages
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );

      default:
        return (
          <PropertyImages
            errors={errors}
            clearErrors={clearErrors}
            register={register}
            setValue={setValue}
            watch={watch}
          />
        );
    }
  };
  // const errorSubmit = useSelector((state) => state.addProperty.error);
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
        className={`min-h-[88dvh]  py-10 container mx-auto  ${
          sended ? "flex flex-col gap-8  justify-center" : "space-y-8"
        }`}
      >
        {sended ? (
          <AceeptedCard />
        ) : (
          <>
            {" "}
            <Steps setStep={setStep} step={step} watch={watch} />
            {renderStep()}
            <div className="flex items-center gap-4 max-w-[400px]">
              {step > 1 && (
                <Button
                  onClick={() => {
                    setStep((prev) => prev - 1);
                  }}
                  variant="bordered"
                  type={"button"}
                  className={"w- h-auto py-2"}
                >
                  {language ? "السابق" : "Back"}
                </Button>
              )}
              <Button variant="" type={"submit"} className={"w- h-auto py-2"}>
                {step > 3
                  ? language
                    ? "أضف عقارك"
                    : "Add your property"
                  : language
                  ? "التالى"
                  : "Next"}
              </Button>
            </div>
          </>
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
export default AddProperty;