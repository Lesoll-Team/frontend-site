import React from "react";
import StepContainer from "../../ui/StepContainer";
import UserOptions from "./UserOptions";
import RenderPackages from "./RenderPackages";
import ActionBtns from "../../ActionBtns";

const CarPaymentStep = () => {
  return (
   <div className="space-y-10">
     <StepContainer className={"min-h-fit"}>
      <UserOptions />
      <RenderPackages />

    </StepContainer>
    <ActionBtns />
   </div>
  );
};

export default CarPaymentStep;
