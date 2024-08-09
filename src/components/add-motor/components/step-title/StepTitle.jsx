import { useSelector } from "react-redux";
import { useAddMotorContext } from "../../context/AddMotorContext";
import { FaArrowLeft } from "react-icons/fa";
import { scrollToTop } from "@/utils/scrollToTop";

const StepTitle = () => {
  const { step, setStep, clearErrors, loading } = useAddMotorContext();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const handleBackBtn = () => {
    step > 1 && setStep((prev) => prev - 1);
    clearErrors("mainImage");
    clearErrors("multiImage");
    scrollToTop();
  };
  const stepText = () => {
    switch (step) {
      case 1:
        return language ? "ما هى ماركة سيارتك؟" : "What's your car brand?";
      case 2:
        return language ? "ما هو موديل سيارتك؟" : "What's your car modal?";
      case 3:
        return language ? "سنة التصنيع" : "Year of manufacture";
      case 4:
        return language ? "ما هو لون السيارة؟" : "car color";
      case 5:
        return language ? "أدخل معلومات السيارة" : "Enter car details";
      case 6:
        return language ? "صور السيارة" : "Car Images";
      case 7:
        return language ? "النشر" : "Publishing";
    }
  };
  return (
    <div className="md:w-[75%] mx-auto relative justify-center flex items-center">
      <h1 className="text-center">{stepText()}</h1>
      {step > 1 && (
        <button
          disabled={loading}
          onClick={handleBackBtn}
          type="button"
          className="absolute left-0"
        >
          <FaArrowLeft className="text-2xl text-darkGray" />
        </button>
      )}
    </div>
  );
};

export default StepTitle;
