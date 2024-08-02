import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import Image from "next/image";
import { useSelector } from "react-redux";
const TransmissionTypes = [
  { ar: "أوتوماتيك", en: "Automatic" },
  { ar: "مانيوال", en: "Manual" },
];
const TransmissionType = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setValue, watch } = useAddMotorContext();
  const icon = (type, selected) => {
    if (type === "Automatic") {
      return (
        <Image
          src={`/icons/manual-icon-${selected ? "light" : "dark"}.svg`}
          width={24}
          height={24}
        />
      );
    }
    if (type === "Manual") {
      return (
        <Image
          src={`/icons/automatic-icon-${selected ? "light" : "dark"}.svg`}
          width={24}
          height={24}
        />
      );
    }
  };
  return (
    <div className="flex items-center gap-2 md:gap-4">
      {TransmissionTypes.map((type) => {
        const selected = watch("transmissionType") === type.en;
        return (
          <button
            key={type.en}
            type="button"
            onClick={() => setValue("transmissionType", type.en)}
            className={`py-3 w-full rounded-md duration-100 flex justify-center  gap-2  ${selected ? "bg-lightGreen text-white" : "bg-white"}`}
          >
            {icon(type.en, selected)}
            {language ? type.ar : type.en}
          </button>
        );
      })}
    </div>
  );
};

export default TransmissionType;
