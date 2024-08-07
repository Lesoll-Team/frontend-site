import React from "react";
import StepContainer from "../../ui/StepContainer";
import { useSelector } from "react-redux";
import CarMainImage from "./CarMainImage";
import CarOtherImages from "./OtherImages";
import ActionBtns from "../../ActionBtns";

const CarImagesStep = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="space-y-10">
      <StepContainer className={"min-h-fit"}>
        <div className="space-y-3">
          <p className="font-bold">{language ? "الصور" : "Images"}</p>
          <p>
            {language
              ? "يمكنك إضافة حتى 20 صورة"
              : "You can add up to 20 Images"}
          </p>
          <CarMainImage />
          <CarOtherImages />
        </div>
      </StepContainer>
      <ActionBtns />
    </div>
  );
};

export default CarImagesStep;
