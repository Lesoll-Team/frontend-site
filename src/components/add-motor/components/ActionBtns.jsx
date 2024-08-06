import { useSelector } from "react-redux";
import { useAddMotorContext } from "../context/AddMotorContext";

const ActionBtns = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setStep } = useAddMotorContext();
  return (
    <div className="md:w-[75%] mx-auto flex justify-between gap-5">
      <button
        type="submit"
        // type="button"
        onClick={() => setStep((prev) => prev - 1)}
        className="text-darkGray  boeder w-full text-center py-2 rounded border border-darkGray"
      >
        {language ? "السابق" : "Previous"}
      </button>
      <button className="text-white bg-lightGreen boeder py-2 rounded w-full text-center border border-lightGreen">
        {language ? "التالى" : "Next"}
      </button>
    </div>
  );
};

export default ActionBtns;
