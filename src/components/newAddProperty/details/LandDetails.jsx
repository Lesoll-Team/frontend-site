import { useSelector } from "react-redux";
import AddPropSectionContainer from "../components/AddPropSectionContainer";

import "react-datepicker/dist/react-datepicker.css";

import RadioBtn from "@/Shared/ui/RadioBtn";
import Error from "@/Shared/ui/Error";
import {
  handleMonyInputChange,
  validateIsNumber,
} from "../utils/handleNumberInput";

const LandDetails = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { onChange: areaOnChange, ...areaRegister } = register(`area`, {
    required: {
      value: true,
      message: language ? "مطلوب" : "required",
    },
    validate: {
      mustBeNumber: (value) => validateIsNumber(value, language),
      // max: (value) => mustBeGreaterValidation(value, language),
    },
  });
  const handleCustomChange = (e, name, onChange) => {
    onChange(e); // Call the original onChange handler from `react-hook-form`
    handleMonyInputChange(e, name, setValue); // Call your custom logic
  };
  return (
    <AddPropSectionContainer>
      <div className="lg:col-span-2 space-y-2">
        <p className="text-gray-800">{language ? "المساحة " : "Space"}</p>
        <div className="flex items-center">
          <input
            inputMode="numeric"
            type="text"
            {...areaRegister}
            onChange={(e) => handleCustomChange(e, `area`, areaOnChange)}
            className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
              errors.area && "border-red-500 focus:border-red-500"
            }`}
            // className={"border-none"}
          />
          <p className="text-sm text-[#A3A1A1] -mx-8">
            {language ? "م" : "m"} <sup>2</sup>
          </p>
        </div>
        {errors.area && (
          <Error className="text-red-500">{errors.area.message}</Error>
        )}{" "}
      </div>

      <div className="flex gap-4">
        <p className="text-gray-800">
          {language
            ? "هل العقار مسجل"
            : "Notarized by the real estate certificate"}
        </p>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("isRegisterd")}
            onClick={() => {
              setValue("isRegisterd", true);
            }}
            title={language ? "نعم" : "Yes"}
          />
          <RadioBtn
            active={!watch("isRegisterd")}
            onClick={() => {
              setValue("isRegisterd", false);
            }}
            title={language ? "لا" : "No"}
          />
        </div>
      </div>
    </AddPropSectionContainer>
  );
};
export default LandDetails;
