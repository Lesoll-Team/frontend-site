import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import Image from "next/image";
import { useSelector } from "react-redux";

const BrandCard = ({ car }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setValue, clearErrors, setStep, formSubmit } = useAddMotorContext();
  const handleSelect = () => {
    setValue("brand", car);
    clearErrors("brand");
    formSubmit();
  };
  return (
    <button
      type="button"
      onClick={handleSelect}
      className="w-full grid grid-rows-3 items-center justify-center  p-2  md:p-6   rounded bg-white md:hover:-translate-y-1 md:hover:drop-shadow-sm duration-150"
    >
      <Image
        width={100}
        height={100}
        src={car.image}
        className=" object-cover row-span-2 "
        alt={car.en}
      />

      <p className="text-center"> {language ? car.ar : car.en}</p>
    </button>
  );
};

export default BrandCard;
