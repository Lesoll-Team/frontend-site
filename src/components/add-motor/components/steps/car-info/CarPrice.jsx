import useInputRegisters from "@/components/add-motor/hooks/useInputRegisters";
import styles from "../../../styles/addMoto.module.css";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import CurrenciesDropDown from "@/components/newAddProperty/price/sale/mainPriceInput/CurrenciesDropDown";
import { useSelector } from "react-redux";
import Error from "@/Shared/ui/Error";

const { addMotorInput, inputError } = styles;
const CarPrice = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, setValue, errors, watch } = useAddMotorContext();
  const { priceRegister, handlePriceChange } = useInputRegisters({
    register,
    setValue,
  });

  return (
    <>
      <div className="relative flex rounded-md">
        <input
          type="text"
          inputMode="numeric"
          {...priceRegister}
          onChange={(e) => handlePriceChange(e)}
          className={`${addMotorInput} ${errors.price && inputError} `}
        />
        <CurrenciesDropDown
          setValue={setValue}
          watch={watch}
          className={`  absolute h-full  ${language ? "left-0" : "right-0"}`}
        />
      </div>
      {errors.price && <Error>{errors.price.message}</Error>}
    </>
  );
};

export default CarPrice;
