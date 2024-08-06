// AddPropertyContext.js
import { createContext, useContext } from "react";

const AddMotorContext = createContext();

export const useAddMotorContext = () => useContext(AddMotorContext);

export default AddMotorContext;
