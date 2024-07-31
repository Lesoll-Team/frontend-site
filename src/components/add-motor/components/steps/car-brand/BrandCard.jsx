import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import Image from "next/image";
import { useSelector } from "react-redux";

const BrandCard = ({ car }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setValue, clearErrors, setStep } = useAddMotorContext();
  const handleSelect = () => {
    setValue("brand", car.ar);
    clearErrors("brand");
    setStep((prev) => prev + 1);
  };
  return (
    <button
      onClick={handleSelect}
      className="w-full flex flex-col items-center md:justify-center justify-start p-2 py-3 md:p-6  gap-3 rounded bg-white md:hover:-translate-y-1 md:hover:drop-shadow-sm duration-150"
    >
      <Image
        width={100}
        height={100}
        src={car.image}
        className="w-full  object-cover"
      />
      <p className="text-center"> {language ? car.ar : car.en}</p>
    </button>
  );
};

export default BrandCard;
