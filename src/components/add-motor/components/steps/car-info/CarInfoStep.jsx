import React from "react";
import StepContainer from "../../ui/StepContainer";
import FormInputContainer from "../../ui/FormInputContainer";
import { useSelector } from "react-redux";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import Error from "@/Shared/ui/Error";
import styles from "../../../styles/addMoto.module.css";
import {
  handleMonyInputChange,
  validateIsNumber,
} from "@/components/newAddProperty/utils/handleNumberInput";
import useInputRegisters from "@/components/add-motor/hooks/useInputRegisters";
const { addMotorInput, inputError } = styles;
const CarInfoStep = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { step, setStep, register, clearErrors, setValue, errors } =
    useAddMotorContext();
  const {
    handleKiloMeterChange,
    kiloMeterRgister,
    ccRegister,
    handleCcChange,
  } = useInputRegisters({
    register,
    setValue,
  });
  // const { onChange: kiloMeterOnChange, ...kiloMeterRgister } = register(
  //   `kiloMeter`,
  //   {
  //     required: {
  //       value: true,
  //       message: language ? "مطلوب" : "required",
  //     },
  //     validate: {
  //       mustBeNumber: (value) => validateIsNumber(value, language),
  //       // max: (value) => mustBeGreaterValidation(value, language),
  //     },
  //   },
  // );
  // const handleCustomChange = (e, name, onChange) => {
  //   onChange(e); // Call the original onChange handler from `react-hook-form`
  //   handleMonyInputChange(e, name, setValue); // Call your custom logic
  // };
  return (
    <StepContainer className={"space-y-10"}>
      <FormInputContainer
        title={language ? "عدد الكيلومترات" : "Number of Kilometers"}
      >
        <input
          type="text"
          inputMode="numeric"
          {...kiloMeterRgister}
          onChange={(e) => handleKiloMeterChange(e)}
          className={`${addMotorInput} ${errors.kiloMeter && inputError} `}
        />
        {errors.kiloMeter && <Error>{errors.kiloMeter.message}</Error>}
      </FormInputContainer>
      <FormInputContainer title={language ? "حالة السيارة" : "Car status"}>
        <div className="flex gap-5 items-center w-full">
          <button type="button" className="py-3 w-full rounded-md bg-white">
            {language ? "جديدة" : "New"}
          </button>
          <button type="button" className="py-3 w-full rounded-md bg-white">
            {language ? "مستعملة" : "Used"}
          </button>
        </div>
      </FormInputContainer>
      <FormInputContainer
        title={language ? "سعة المحرك (سى سى)" : "Engine capacity (cc)"}
      >
        <input
          type="text"
          inputMode="numeric"
          {...ccRegister}
          onChange={(e) => handleCcChange(e)}
          className={`${addMotorInput} ${errors.CC && inputError} `}
        />
        {errors.CC && <Error>{errors.CC.message}</Error>}
      </FormInputContainer>
      <FormInputContainer
        title={language ? "الشكل الخارجى" : "Exterior design"}
      >
        <input
          type="text"
          inputMode="numeric"
          {...ccRegister}
          onChange={(e) => handleCcChange(e)}
          className={`${addMotorInput} ${errors.CC && inputError} `}
        />
        {errors.CC && <Error>{errors.CC.message}</Error>}
      </FormInputContainer>
      <FormInputContainer title={language ? "نوع الوقود" : "Fuel type"}>
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5 grid-cols-2">
          <button type="button" className="py-3 w-full rounded-md bg-white">
            {language ? "مستعملة" : "Used"}
          </button>{" "}
          <button type="button" className="py-3 w-full rounded-md bg-white">
            {language ? "مستعملة" : "Used"}
          </button>{" "}
          <button type="button" className="py-3 w-full rounded-md bg-white">
            {language ? "مستعملة" : "Used"}
          </button>{" "}
          <button type="button" className="py-3 w-full rounded-md bg-white">
            {language ? "مستعملة" : "Used"}
          </button>{" "}
          <button type="button" className="py-3 w-full rounded-md bg-white">
            {language ? "مستعملة" : "Used"}
          </button>
        </div>
        {errors.CC && <Error>{errors.CC.message}</Error>}
      </FormInputContainer>
      <button>submit</button>
    </StepContainer>
  );
};

export default CarInfoStep;
