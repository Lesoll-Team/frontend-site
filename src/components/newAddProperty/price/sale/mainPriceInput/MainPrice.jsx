import Error from "@/Shared/ui/Error";
import { useSelector } from "react-redux";
import CurrenciesDropDown from "./CurrenciesDropDown";
import {
  convertToNumber,
  handleMonyInputChange,
  validateIsNumber,
} from "@/components/newAddProperty/utils/handleNumberInput";
import styles from "@/components/newAddProperty/styles/addProperrty.module.css";

const { addPropInput, addPropInputError } = styles;
const MainPrice = ({ register, errors, watch, setValue }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { onChange: priceOnChange, ...priceRgister } = register("price", {
    required: {
      value: true,
      message: language ? "من فضلك ادخل السعر" : "please enter price",
    },
    validate: {
      mustBeNumber: (value) => validateIsNumber(value, language),
      max: (value) => {
        const number = convertToNumber(value);
        return (
          parseInt(number) >= 100 ||
          (language
            ? "لا يجب ان يقل السعر عن 100 جنية"
            : "price must be at least 100 egp")
        );
      },
    },
  });
  const handleCustomChange = (e) => {
    priceOnChange(e); // Call the original onChange handler from `react-hook-form`
    handleMonyInputChange(e, "price", setValue); // Call your custom logic
  };
  return (
    <div className=" space-y-2">
      <p className="text-gray-800">
        {language ? " سعر الوحدة" : " Unit price"}
      </p>
      <div className="relative flex rounded-md ">
        <input
          inputMode="numeric"
          autoComplete="off"
          type="text"
          {...priceRgister}
          onChange={handleCustomChange}
          className={` ${addPropInput} ${errors.price && addPropInputError}`}
        />

        <CurrenciesDropDown
          setValue={setValue}
          watch={watch}
          className={`  absolute h-full  ${language ? "left-0" : "right-0"}`}
        />
      </div>
      {errors.price && <Error>{errors.price.message}</Error>}
    </div>
  );
};
export default MainPrice;
