import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import { fuelTypes } from "@/components/add-motor/data/fuelTypes";
import { useWindowWidth } from "@/Hooks/useWindowWidth";
import Error from "@/Shared/ui/Error";
import { useSelector } from "react-redux";

const FuelType = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const { register, clearErrors, setValue, errors, watch } =
    useAddMotorContext();
  const handleSelect = (value) => {
    setValue("fuel", value);
    clearErrors("fuel");
  };
  return (
    <>
      <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {fuelTypes.map((type) => {
          return (
            <button
              key={type.en}
              type="button"
              onClick={() => handleSelect(type.en)}
              className={`py-3 w-full rounded-md duration-100  ${watch("fuel") === type.en ? "bg-lightGreen text-white" : "bg-white"}`}
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
};

export default FuelType;
