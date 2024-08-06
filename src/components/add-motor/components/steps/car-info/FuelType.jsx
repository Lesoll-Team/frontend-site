import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import { fuelTypes } from "@/components/add-motor/data/fuelTypes";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import Error from "@/Shared/ui/Error";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import FormDropDown from "../../ui/FormDropDown";

const FuelType = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const foucsBtnRef = useRef(null);
  const { windowWidth } = useWindowWidth();
  const { register, clearErrors, setValue, errors, watch } =
    useAddMotorContext();
  const handleSelect = (value) => {
    setValue("fuel", value);
    clearErrors("fuel");
  };
  useEffect(() => {
    if (errors?.fuel) {
      foucsBtnRef.current && foucsBtnRef.current.focus();
    }
  }, [errors?.fuel]);
  if (windowWidth > 1280) {
    return (
      <>
        <div className="flex gap-2 md:gap-3 xl:gap-4  min-w-full overflow-x-auto no-scrollbar">
          {fuelTypes.map((type, index) => {
            if (index === 0) {
              return (
                <button
                  ref={foucsBtnRef}
                  key={type.en}
                  type="button"
                  onClick={() => handleSelect(type)}
                  className={`py-3 min-w-[80px] w-full rounded-md duration-100  ${watch("fuel.en") === type.en ? "bg-lightGreen text-white" : "bg-white"}`}
                >
                  {language ? type.ar : type.en}
                </button>
              );
            }
            return (
              <button
                key={type.en}
                type="button"
                onClick={() => handleSelect(type)}
                className={`py-3  min-w-[80px] w-full rounded-md duration-100  ${watch("fuel.en") === type.en ? "bg-lightGreen text-white" : "bg-white"}`}
              >
                {language ? type.ar : type.en}
              </button>
            );
          })}
        </div>
        <input
          type="text"
          hidden
          {...register("fuel", {
            required: {
              value: true,
              message: language ? "مطلوب" : "Required",
            },
          })}
        />
        {errors?.fuel && <Error>{errors?.fuel.message}</Error>}
      </>
    );
  } else {
    return (
      <FormDropDown
        options={fuelTypes}
        error={errors?.fuel}
        errorMessage={errors?.fuel?.message}
        selected={watch("fuel")}
        setValue={(e) => {
          setValue("fuel", e);
          clearErrors("fuel");
        }}
      />
    );
  }
};

export default FuelType;
