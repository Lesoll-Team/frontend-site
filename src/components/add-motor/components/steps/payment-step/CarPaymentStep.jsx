import React from "react";
import StepContainer from "../../ui/StepContainer";
import UserOptions from "./UserOptions";
import RenderPackages from "./RenderPackages";
import ActionBtns from "../../ActionBtns";
import PaymentMethod from "./PaymentMethod";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";

const CarPaymentStep = () => {
  const { watch } = useAddMotorContext();
  return (
    <div className="space-y-10">
      <StepContainer className={"min-h-fit"}>
        <UserOptions />
        <RenderPackages />
        {watch("packId") && <PaymentMethod />}
      </StepContainer>
      <ActionBtns />
    </div>
  );
};

export default CarPaymentStep;
