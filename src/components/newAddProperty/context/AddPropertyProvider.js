// AddPropertyProvider.js
import React from "react";
import useAddProperty from "../hooks/useAddProperty";
import AddPropertyContext from "./AddPropertyContext";

const AddPropertyProvider = ({ children }) => {
  const addProperty = useAddProperty();

  return (
    <AddPropertyContext.Provider value={addProperty}>
      {children}
    </AddPropertyContext.Provider>
  );
};

export default AddPropertyProvider;
