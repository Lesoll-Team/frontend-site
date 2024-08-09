import { useSelector } from "react-redux";
import { useAddMotorContext } from "../context/AddMotorContext";
import { scrollToTop } from "@/utils/scrollToTop";

const ActionBtns = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { setStep, step, loading, formSubmit } = useAddMotorContext();

  const nextText =
    step < 7 ? (language ? "التالى" : "Next") : language ? "النشر" : "Post";
  return (
    <div className="md:w-[75%] mx-auto flex justify-between gap-5">
      <button
        disabled={loading}
        onClick={() => {
          scrollToTop();
          setStep((prev) => prev - 1);
        }}
        className="text-darkGray disabled:opacity-60  boeder w-full text-center py-2 rounded border border-darkGray"
      >
        {language ? "السابق" : "Previous"}
      </button>
      <button
        disabled={loading}
        type="button"
        onClick={() => {
          formSubmit();
          console.log("why");
        }}
        className="text-white disabled:opacity-60 bg-lightGreen boeder py-2 rounded w-full text-center border border-lightGreen"
      >
        {nextText}
      </button>
    </div>
  );
};

export default ActionBtns;
