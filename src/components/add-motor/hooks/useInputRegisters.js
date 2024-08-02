import {
  handleMonyInputChange,
  mustBeGreaterValidation,
  validateIsNumber,
} from "@/components/newAddProperty/utils/handleNumberInput";
import { useSelector } from "react-redux";
import { useAddMotorContext } from "../context/AddMotorContext";
const phoneRegex = /(\d{3}[-\s]?\d{3}[-\s]?\d{4})/g;

const useInputRegisters = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, setValue } = useAddMotorContext();

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
  const { onChange: priceOnChange, ...priceRegister } = register(`price`, {
    required: {
      value: true,
      message: language ? "مطلوب" : "required",
    },
    validate: {
      mustBeNumber: (value) => validateIsNumber(value, language),
      max: (value) => mustBeGreaterValidation(value, language),
    },
  });
  const handlePriceChange = (e) => {
    priceOnChange(e); // Call the original onChange handler from `react-hook-form`
    handleMonyInputChange(e, "price", setValue); // Call your custom logic
  };
  const titleRegister = register("title", {
    required: {
      value: true,
      message: language ? "مطلوب" : "required",
    },
    validate: {
      max: (value) => {
        return (
          value.length < 100 ||
          (language
            ? "لايجب ان يزيد عن 100 حرف"
            : "the title should not be more than 100 characters")
        );
      },
      phone: (value) => {
        return (
          !value.match(phoneRegex) ||
          (language
            ? "رقم الهاتف فى العنوان غير  مسموح"
            : "Phone number in title are not allowed")
        );
      },
    },
  });
  const descriptionRegister = register("description", {
    required: {
      value: true,
      message: language ? "مطلوب" : "required",
    },
    validate: {
      max: (value) => {
        return (
          value.length <= 4000 ||
          (language
            ? "لايجب ان يزيد عن 4000 حرف"
            : "the description should not be more than 4000 characters")
        );
      },
      phone: (value) => {
        return (
          !value.match(phoneRegex) ||
          (language
            ? "رقم الهاتف فى الوصف غير  مسموح"
            : "Phone number in description are not allowed")
        );
      },
    },
  });
  return {
    kiloMeterRgister,
    handleKiloMeterChange,
    handleCcChange,
    ccRegister,
    priceRegister,
    handlePriceChange,
    titleRegister,
    descriptionRegister,
  };
};

export default useInputRegisters;
