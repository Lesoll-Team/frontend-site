import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import { useSelector } from "react-redux";
const TRANSFER_CASE_TYPES = [
  { ar: "دفع خلفي", en: "Rear Wheel Drive" },
  { ar: "دفع أمامي", en: "Front Wheel Drive" },
  { ar: "دفع رباعي", en: "Four by Four" },
];
const TransferCaseType = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setValue, watch } = useAddMotorContext();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
      {TRANSFER_CASE_TYPES.map((type, index, types) => {
        const last = index + 1 === types.length;
        return (
          <button
            key={type.en}
            type="button"
            onClick={() => setValue("transferCase", type.en)}
            className={`py-3 w-full rounded-md duration-100  ${watch("transferCase") === type.en ? "bg-lightGreen text-white" : "bg-white"} ${last && "col-span-2 md:col-span-1"}`}
          >
            {language ? type.ar : type.en}
          </button>
        );
      })}
    </div>
  );
};

export default TransferCaseType;
