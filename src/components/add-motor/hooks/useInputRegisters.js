import {
  handleMonyInputChange,
  validateIsNumber,
} from "@/components/newAddProperty/utils/handleNumberInput";
import { useSelector } from "react-redux";

const useInputRegisters = ({ register, setValue }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { onChange: kiloMeterOnChange, ...kiloMeterRgister } = register(
    `kiloMeter`,
    {
      required: {
        value: true,
        message: language ? "مطلوب" : "required",
      },
      validate: {
        mustBeNumber: (value) => validateIsNumber(value, language),
        // max: (value) => mustBeGreaterValidation(value, language),
      },
    },
  );

  const handleKiloMeterChange = (e) => {
    kiloMeterOnChange(e); // Call the original onChange handler from `react-hook-form`
    handleMonyInputChange(e, "kiloMeter", setValue); // Call your custom logic
  };
  const { onChange: ccOnChange, ...ccRegister } = register(`CC`, {
    required: {
      value: true,
      message: language ? "مطلوب" : "required",
    },
    validate: {
      mustBeNumber: (value) => validateIsNumber(value, language),
      // max: (value) => mustBeGreaterValidation(value, language),
    },
  });

  const handleCcChange = (e) => {
    ccOnChange(e); // Call the original onChange handler from `react-hook-form`
    handleMonyInputChange(e, "CC", setValue); // Call your custom logic
  };
  return {
    kiloMeterRgister,
    handleKiloMeterChange,
    handleCcChange,
    ccRegister,
  };
};

export default useInputRegisters;
