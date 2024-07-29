import { useSelector } from "react-redux";
import AddPropSectionContainer from "../components/AddPropSectionContainer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMemo, useRef } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import DropDown from "@/Shared/ui/DropDown";
import { finishingType } from "../data/finishingType";
import RadioBtn from "@/Shared/ui/RadioBtn";
import Error from "@/Shared/ui/Error";
import {
  handleMonyInputChange,
  validateIsNumber,
} from "../utils/handleNumberInput";
const DefaultDetails = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const deliveryDateRef = useRef(null);
  const handleStartDateChange = (date) => {
    setValue("deliveryDate", date);
  };
  const selectedDate = useMemo(() => {
    if (watch("deliveryDate")) {
      return new Date(watch("deliveryDate"));
    } else null;
  }, [watch("deliveryDate")]);
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
      <div className="space-y-2">
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
          {/* <p className="text-sm text-[#A3A1A1] -mx-8">
            {language ? "م" : "m"} <sup>2</sup>
          </p> */}
        </div>
        {errors.area && (
          <Error className="text-red-500">{errors.area.message}</Error>
        )}{" "}
      </div>
      <div className="space-y-2">
        <p className="text-gray-800">
          {language ? "الدور" : "level"}{" "}
          <span className="text-outLine">
            {language ? "(إختيارى)" : "(optional)"}
          </span>
        </p>
        <input
          inputMode="numeric"
          type="text"
          multiple
          {...register("level", {
            // required: {
            //   value: true,
            //   message: language
            //     ? "من فضلك ادخل الدور"
            //     : "please enter the level",
            // },
            validate: {
              mustBeNumber: (value) => {
                return (
                  !isNaN(value) ||
                  (language
                    ? "يجب ان يكون الدور رقما"
                    : "level must be a number")
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.level && "border-red-500 focus:border-red-500"
          }`}
          // className={"border-none"}
        />
        {errors.level && (
          <Error className="text-red-500">{errors.level.message}</Error>
        )}{" "}
      </div>
      <div className="space-y-2">
        <p className="text-gray-800">{language ? "عدد الغرف" : "Rooms"}</p>
        <input
          type="text"
          inputMode="numeric"
          {...register("rooms", {
            required: {
              value: true,
              message: language
                ? "من فضلك ادخل عددالغرف"
                : "please enter the number of rooms",
            },
            validate: {
              mustBeNumber: (value) => {
                return (
                  !isNaN(value) ||
                  (language
                    ? "عدد الغرف يجب ان يكون رقما"
                    : "Rooms must be a number")
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.rooms && "border-red-500 focus:border-red-500"
          }`}
          // className={"border-none"}
        />
        {errors.rooms && <p className="text-red-500">{errors.rooms.message}</p>}{" "}
      </div>
      <div className="space-y-2">
        <p className="text-gray-800">
          {language ? "عدد الحمامات" : "Bathrooms"}
        </p>
        <input
          inputMode="numeric"
          type="text"
          {...register("bathRooms", {
            required: {
              value: true,
              message: language
                ? "من فضلك ادخل الحمامات"
                : "please enter the number of bathrooms",
            },
            validate: {
              mustBeNumber: (value) => {
                return (
                  !isNaN(value) ||
                  (language
                    ? "عدد الحمامات يجب ان يكون رقما"
                    : "Rooms must be a number")
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.bathRooms && "border-red-500 focus:border-red-500"
          }`}
          // className={"border-none"}
        />
        {errors.bathRooms && (
          <p className="text-red-500">{errors.bathRooms.message}</p>
        )}{" "}
      </div>
      <div className="w-full space-y-2">
        <p className="text-gray-800">
          {language ? " سنة التسليم" : "Delivery Date"}{" "}
          <span className="text-outLine">
            {language ? "(إختيارى)" : "(optional)"}
          </span>
        </p>

        <div
          role="button"
          type="button"
          onClick={() => {
            if (deliveryDateRef.current) {
              deliveryDateRef.current.setOpen(true);
            }
          }}
          className={` w-full text-start bg-white text-lg font-semibold flex justify-between items-center focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-[8px] ${
            errors?.deliveryDate && "border-red-500 focus:border-red-500"
          }`}
        >
          <DatePicker
            ref={deliveryDateRef}
            className="focus:border-none focus:outline-none "
            closeOnScroll={(e) => e.target === document}
            selected={selectedDate}
            onChange={handleStartDateChange}
            showYearPicker
            placeholderText={language ? "سنة التسليم" : "Delivery Date"}
            dateFormat="yyyy"
            yearItemNumber={10}
            minDate={new Date()}
            // className="w-full"
          />
          <MdOutlineDateRange />
        </div>
        <input type="text" {...register("deliveryDate")} hidden />
      </div>
      <div className="space-y-2">
        <p className="text-gray-800">
          {language ? " التشطيب" : "Finishing Type"}
        </p>
        <DropDown
          selected={watch("finishingType")}
          options={finishingType}
          setValue={(value) => {
            setValue("finishingType", value);
            clearErrors("finishingType");
          }}
          error={errors?.finishingType}
          errorMessage={errors?.finishingType?.message}
        />
        <input
          type="text"
          hidden
          {...register("finishingType", {
            required: {
              value: true,
              message: language
                ? "اختر نوع التشطيب"
                : "please choose finish type",
            },
          })}
        />
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
      <div className="flex gap-4">
        <p className="text-gray-800">
          {language ? "هل العقار مفروش ؟" : "Is the property furnished?"}
        </p>
        <div className="flex items-center gap-3">
          <RadioBtn
            active={watch("isFurnished")}
            onClick={() => {
              setValue("isFurnished", true);
            }}
            title={language ? "نعم" : "Yes"}
          />
          <RadioBtn
            active={!watch("isFurnished")}
            onClick={() => {
              setValue("isFurnished", false);
            }}
            title={language ? "لا" : "No"}
          />
        </div>
      </div>
    </AddPropSectionContainer>
  );
};
export default DefaultDetails;
