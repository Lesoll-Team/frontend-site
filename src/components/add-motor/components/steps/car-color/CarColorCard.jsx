import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import { useSelector } from "react-redux";

const CarColorCard = ({ color, last }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const colorCode = color.code;
  const { setValue, clearErrors, formSubmit } = useAddMotorContext();
  const handleSelect = () => {
    setValue("carColor", color);
    clearErrors("carColor");
    formSubmit();
  };
  return (
    <button type="button" onClick={handleSelect} className="space-y-6">
      <div className="flex items-center gap-3 border-b pb-6">
        <div
          style={{
            backgroundColor: colorCode,
          }}
          className={`h-8 border w-8 bg-[${colorCode}] rounded-full`}
        ></div>
        <p>{language ? color.ar : color.en}</p>
      </div>
      {/* {!last && <hr className="border" />}{" "} */}
    </button>
  );
};

export default CarColorCard;