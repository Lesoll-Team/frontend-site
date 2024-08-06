import React from "react";
import StepContainer from "../../ui/StepContainer";
import UserOptions from "./UserOptions";
import RenderPackages from "./RenderPackages";

const CarPaymentStep = () => {
  return (
    <StepContainer className={"min-h-fit"}>
      <UserOptions />
      <RenderPackages />
    </StepContainer>
  );
};

export default CarPaymentStep;
