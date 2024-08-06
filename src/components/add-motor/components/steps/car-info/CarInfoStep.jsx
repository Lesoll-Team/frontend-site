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
import TransmissionType from "./TransmissionType";
import CarPrice from "./CarPrice";
import GovAndRegion from "./GovAndRegion";
import CarServices from "./car-services/CarServices";
import FormDropDown from "../../ui/FormDropDown";
import { vehicleTypes } from "@/components/add-motor/data/vehicleType";
import ActionBtns from "../../ActionBtns";
const { addMotorInput, inputError } = styles;
const CarInfoStep = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, setValue, errors, watch, clearErrors } =
    useAddMotorContext();
  const {
    handleKiloMeterChange,
    kiloMeterRgister,
    ccRegister,
    handleCcChange,
    titleRegister,
    descriptionRegister,
    vehicleTypeRegister,
  } = useInputRegisters();

  return (
    <div className="space-y-10">
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
          <FormDropDown
            options={vehicleTypes}
            error={errors?.vehicleType}
            errorMessage={errors?.vehicleType?.message}
            selected={watch("vehicleType")}
            setValue={(e) => {
              setValue("vehicleType", e);
              clearErrors("vehicleType");
            }}
          />
          <input {...vehicleTypeRegister} hidden />
        </FormInputContainer>
        <FormInputContainer title={language ? "نوع الوقود" : "Fuel type"}>
          <FuelType />
        </FormInputContainer>
        <FormInputContainer
          title={language ? "ناقل الحركة" : "Transmission type"}
        >
          <TransmissionType />
        </FormInputContainer>
        <FormInputContainer
          title={language ? " طبيعة الدفع" : "Car drivetrain"}
        >
          <TransferCaseType />
        </FormInputContainer>
        <FormInputContainer title={language ? "السعر" : "Price"}>
          <CarPrice />
        </FormInputContainer>
      </StepContainer>
      <StepContainer className={"min-h-fit py-8"}>
        <FormInputContainer title={language ? "عنوان الإعلان" : "Ad title"}>
          <input
            type="text"
            inputMode="numeric"
            {...titleRegister}
            className={`${addMotorInput} ${errors.title && inputError} `}
          />
          {errors.title && <Error>{errors.title.message}</Error>}
        </FormInputContainer>
        <FormInputContainer title={language ? "الوصف" : "Description"}>
          <textarea
            type="text"
            inputMode="numeric"
            {...descriptionRegister}
            className={`${addMotorInput} ${errors.description && inputError} min-h-[180px] resize-none `}
          />
          <p className="text-darkGray text-sm">
            4000 / {watch("description").length}
          </p>
          {errors.description && <Error>{errors.description.message}</Error>}
        </FormInputContainer>
        <GovAndRegion />
      </StepContainer>
      <CarServices />
      <ActionBtns />
    </div>
  );
};

export default CarInfoStep;
