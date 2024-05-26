import useAddProperty from "@/components/newAddProperty/hooks/useAddProperty";
import Button from "@/Shared/ui/Button";
import AddPropMainInfo from "./mainInfo/AddPropMainInfo";
import Steps from "./components/Steps";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import AddPropDetails from "./details/AddPropDetails";
import AddPropertyPrice from "./price/AddPropertyPrice";
import Link from "next/link";
import AceeptedCard from "./components/AceeptedCard";
import { DotPulse, Ring } from "@uiball/loaders";
import { scrollToTop } from "@/utils/scrollToTop";
import { useUser } from "@/Shared/UserContext";
import ImagesStep from "./components/ImagesStep";
import PaymentStep from "./components/payment-step/PaymentStep";
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
    formStatus,
    loading,
  } = useAddProperty();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const isInvestment = watch("offer") === "For Investment";

  const { data, status } = useUser();
  const [sended, setSended] = useState(false);
  useEffect(() => {
    if (formStatus === "success") {
      setSended(true);
      setStep(1);
      scrollToTop();
    }
  }, [formStatus]);
  const submitBtnText = useMemo(() => {
    const isInvestment = watch("offer") === "For Investment";
    if (isInvestment) {
      if (step < 3) {
        return language ? "التالى" : "next";
      } else {
        return language ? "اضف عقارك" : "Add your property";
      }
    } else {
      if (step < 4) {
        return language ? "التالى" : "next";
      } else {
        return language ? "اضف عقارك" : "Add your property";
      }
    }
  }, [step, language]);
  const renderStep = () => {
    const stepComponents = isInvestment
      ? {
          1: (
            <AddPropMainInfo
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          2: (
            <AddPropDetails
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          3: (
            <ImagesStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          4: (
            <PaymentStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
        }
      : {
          1: (
            <AddPropMainInfo
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          2: (
            <AddPropertyPrice
              control={control}
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          3: (
            <AddPropDetails
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          4: (
            <ImagesStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
          5: (
            <PaymentStep
              errors={errors}
              clearErrors={clearErrors}
              register={register}
              setValue={setValue}
              watch={watch}
            />
          ),
        };

    return stepComponents[step] || null;
  };

  // const errorSubmit = useSelector((state) => state.addProperty.error);
  if (status === "loading") {
    return (
      <div className="w-full h-[90dvh] flex items-center justify-center">
        <DotPulse size={60} color="#309da0" />
      </div>
    );
  } else if (data) {
    if (data?.propertyPackageNumber > 0) {
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
              {isInvestment
                ? step !== 4 && (
                    <Steps setStep={setStep} step={step} watch={watch} />
                  )
                : step !== 5 && (
                    <Steps setStep={setStep} step={step} watch={watch} />
                  )}
              {renderStep()}
              {/* <div>
                <Ring size={60} color="#309da0" />
              </div> */}
              <div className="flex items-center gap-4 max-w-[400px]">
                {step > 1 && (
                  <Button
                    disabled={formStatus === "loading"}
                    onClick={() => {
                      scrollToTop();
                      setStep((prev) => prev - 1);
                    }}
                    variant="bordered"
                    type={"button"}
                    className={"w- h-auto py-2"}
                  >
                    {language ? "السابق" : "Back"}
                  </Button>
                )}
                <Button
                  disabled={loading}
                  variant=""
                  type={"submit"}
                  className={"w- h-auto py-2"}
                >
                  {loading ? <Ring size={28} color="#fff" /> : submitBtnText}
                </Button>
              </div>
            </>
          )}

          {/* {errorSubmit && <p>{errorSubmit.message}</p>} */}
        </form>
      );
    } else {
      return (
        <div className="w-full h-[90dvh] flex items-center justify-center container mx-auto">
          <div className="max-w-[600px]  p-5 py-8 bg-white rounded-lg border w-full drop-shadow flex flex-col justify-center items-center gap-5 md:gap-8">
            <h3 className="text-base md:text-2xl font-semibold">
              {language
                ? "عدد العقارات المجانية انتهى لديك"
                : "You have run out of free properties to post"}
            </h3>
            <p className="text-center">
              {language
                ? "يمكنك إضافة المزيد من العقارات من خلال الإشتراك فى الباقات لدينا والاستمتاع بمزايا اخرى"
                : "You can add more properties by subscribing to our packages and enjoying other benefits"}
            </p>
            <Link
              href={"/prices"}
              className="w-full rounded-lg text-center py-3 max-w-[200px] bg-lightGreen text-white"
            >
              {language ? " إشترك الأن" : " subscribe now"}
            </Link>
          </div>
        </div>
      );
    }
  } else if (status === "failed" || status === "idle") {
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
