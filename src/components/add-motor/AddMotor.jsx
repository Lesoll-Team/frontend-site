import React from "react";
import AddPropertyProvider from "./context/AddMotorProvider";
import AddMotorForm from "./components/AddMotorForm";

const AddMotor = () => {
  return (
    <AddPropertyProvider>
      <AddMotorForm />
    </AddPropertyProvider>
  );
};

export default AddMotor;
