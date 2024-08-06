import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";

import { useSelector } from "react-redux";

const ModalCard = ({ car, last }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const { setValue, clearErrors, formSubmit } = useAddMotorContext();
  const handleSelect = () => {
    setValue("model", car);
    clearErrors("model");
    formSubmit();
  };
  return (
    <button
      type="button"
      onClick={handleSelect}
      className="space-y-6 text-start border-b pb-6 "
    >
      {language ? car.ar : car.en}
    </button>
  );
};

export default ModalCard;
