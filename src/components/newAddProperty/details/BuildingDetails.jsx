import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMemo, useRef } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import DropDown from "@/Shared/ui/DropDown";
import { finishingType } from "../finishingType";
import RadioBtn from "@/Shared/ui/RadioBtn";
import Error from "@/Shared/ui/Error";

const BuildingDetails = ({
  errors,
  register,
  setValue,
  watch,
  clearErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <AddPropSectionContainer>
      <div className="space-y-2">
        <h3 className="text-xl">
          {language ? "مساحة المبنى " : "Building Area"}
        </h3>
        <input
          type="text"
          {...register("area", {
            required: {
              value: true,
              message: language
                ? "من فضلك ادخل مساحة العقار"
                : "please enter area",
            },
            validate: {
              mustBeNumber: (value) => {
                return (
                  !isNaN(value) ||
                  (language
                    ? "يجب ان تكون مساحة العقار رقم"
                    : "Propert area must be a number")
                );
              },
            },
          })}
          className={` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            errors.area && "border-red-500 focus:border-red-500"
          }`}
          // className={"border-none"}
        />
        {errors.area && <p className="text-red-500">{errors.area.message}</p>}{" "}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">
          {language ? "عدد الادوار" : "Number of floors"}
        </h3>
        <input
          type="text"
          multiple
          {...register("level", {
            required: {
              value: true,
              message: language
                ? "من فضلك ادخل الدور"
                : "please enter the level",
            },
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
        {errors.level && <Error>{errors.level.message}</Error>}{" "}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">{language ? "عدد الغرف" : "Rooms"}</h3>
        <input
          type="text"
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
        {errors.rooms && <Error>{errors.rooms.message}</Error>}{" "}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl">{language ? "عدد الحمامات" : "Bathrooms"}</h3>
        <input
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
        {errors.bathRooms && <Error>{errors.bathRooms.message}</Error>}{" "}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl">{language ? " التشطيب" : "Finishing Type"}</h3>
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
      <div className="flex gap-4 items-center lg:mt-9">
        <h3 className="text-xl">
          {language
            ? "هل العقار مسجل"
            : "Notarized by the real estate certificate"}
        </h3>
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
export default BuildingDetails;