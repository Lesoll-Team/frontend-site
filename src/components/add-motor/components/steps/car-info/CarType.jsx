import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import { useSelector } from "react-redux";
const carTypes = [
  { ar: "جديدة", en: "New" },
  { ar: "مستعملة", en: "Used" },
];

const CarType = () => {
  const { setValue, watch, loading } = useAddMotorContext();
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="flex gap-2 md:gap-5 items-center w-full">
      {carTypes.map((type) => {
        return (
          <button
            disabled={loading}
            onClick={() => setValue("carType", type.en.toLocaleLowerCase())}
            type="button"
            key={type.en}
            className={`py-3 w-full rounded-md duration-100 disabled:opacity-70 ${watch("carType") === type.en.toLocaleLowerCase() ? "bg-lightGreen text-white" : "bg-white"}`}
          >
            {language ? type.ar : type.en}
          </button>
        );
      })}
    </div>
  );
};

export default CarType;
