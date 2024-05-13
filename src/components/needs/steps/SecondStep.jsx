import SaleType from "./SaleType";
import RentType from "./RentType";

const SecondStep = ({ setValue, setStep, watch }) => {
  return watch("offer") === "For Sale" ? (
    <SaleType setValue={setValue} watch={watch} setStep={setStep} />
  ) : watch("offer") === "For Rent" ? (
    <RentType setValue={setValue} watch={watch} setStep={setStep} />
  ) : (
    "No offer Selected"
  );
};
export default SecondStep;
