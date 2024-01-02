import { useSelector } from "react-redux";
import SaleType from "./SaleType";
import RentType from "./RentType";

const SecondStep = () => {
  const need = useSelector((state) => state.needs.needsData);

  return need.offer === "For Sale" ? (
    <SaleType />
  ) : need.offer === "For Rent" ? (
    <RentType />
  ) : (
    "No offer Selected"
  );
};
export default SecondStep;
