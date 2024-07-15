import Steps from "./Steps";

const StepsBar = ({ watch, setStep, step }) => {
  const isInvestment = watch("offer") === "For Investment";
  return isInvestment
    ? step !== 4 && <Steps setStep={setStep} step={step} watch={watch} />
    : step !== 5 && <Steps setStep={setStep} step={step} watch={watch} />;
};

export default StepsBar;
