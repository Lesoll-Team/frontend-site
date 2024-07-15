import Button from "@/Shared/ui/Button";
import { scrollToTop } from "@/utils/scrollToTop";
import { Ring } from "@uiball/loaders";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const ActionBtns = ({ step, setStep, loading, watch }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const submitBtnText = useMemo(() => {
    const isInvestment = watch("offer") === "For Investment";
    if (isInvestment) {
      if (step < 3) {
        return language ? "التالى" : "next";
      } else {
        return language ? "اضف عقارك" : "Add your property";
      }
    } else {
      if (step < 4) {
        return language ? "التالى" : "next";
      } else {
        return language ? "اضف عقارك" : "Add your property";
      }
    }
  }, [step, language]);
  return (
    <div className="flex items-center gap-4 max-w-[400px]">
      {step > 1 && (
        <Button
          disabled={loading}
          onClick={() => {
            scrollToTop();
            setStep((prev) => prev - 1);
          }}
          variant="bordered"
          type={"button"}
          className={"w- h-auto py-2"}
        >
          {language ? "السابق" : "Back"}
        </Button>
      )}
      <Button
        disabled={loading}
        variant=""
        type={"submit"}
        className={"w- h-auto py-2"}
      >
        {loading ? <Ring size={28} color="#fff" /> : submitBtnText}
      </Button>
    </div>
  );
};

export default ActionBtns;
