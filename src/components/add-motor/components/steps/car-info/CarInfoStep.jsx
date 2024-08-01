import React from "react";
import StepContainer from "../../ui/StepContainer";
import FormInputContainer from "../../ui/FormInputContainer";
import { useSelector } from "react-redux";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import Error from "@/Shared/ui/Error";
import styles from "../../../styles/addMoto.module.css";
import useInputRegisters from "@/components/add-motor/hooks/useInputRegisters";
import FuelType from "./FuelType";
import CarType from "./CarType";
import TransferCaseType from "./TransferCaseType";
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

  return (
    <StepContainer className={"space-y-10"}>
      <FormInputContainer
        title={language ? "عدد الكيلومترات" : "Number of Kilometers"}
      >
        <div className="flex items-center">
          <input
            type="text"
            inputMode="numeric"
            {...kiloMeterRgister}
            onChange={(e) => handleKiloMeterChange(e)}
            className={`${addMotorInput} ${errors.kiloMeter && inputError} `}
          />
          <p className="-mx-8">{language ? "كم" : "KM"}</p>
        </div>
        {errors.kiloMeter && <Error>{errors.kiloMeter.message}</Error>}
      </FormInputContainer>
      <FormInputContainer title={language ? "حالة السيارة" : "Car status"}>
        <CarType />
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
        <FuelType />
      </FormInputContainer>
      <FormInputContainer title={language ? " طبيعة الدفع" : "Car drivetrain"}>
        <TransferCaseType />
      </FormInputContainer>
      <button>submit</button>
    </StepContainer>
  );
};

export default CarInfoStep;
