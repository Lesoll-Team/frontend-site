import React from "react";
import { useAddMotorContext } from "../context/addMotorContext";

const TestMot = () => {
  const { step, setStep, errors, register, handleSubmit } =
    useAddMotorContext();
  return (
    <div>
      <button onClick={() => setStep(5)}>{step}</button>
      <button onClick={() => setStep(1)}>{step}</button>
    </div>
  );
};

export default TestMot;
