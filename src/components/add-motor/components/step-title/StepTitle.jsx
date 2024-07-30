import { useSelector } from "react-redux";
import { useAddMotorContext } from "../../context/addMotorContext";
import { FaArrowLeft } from "react-icons/fa";

const StepTitle = () => {
  const { step, setStep } = useAddMotorContext();
  const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(step);
  const handleBackBtn = () => {
    step > 1 && setStep((prev) => prev - 1);
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
      {step > -1 && (
        <button onClick={handleBackBtn} className="absolute left-0">
          <FaArrowLeft className="text-2xl text-black" />
        </button>
      )}
    </div>
  );
};

export default StepTitle;
