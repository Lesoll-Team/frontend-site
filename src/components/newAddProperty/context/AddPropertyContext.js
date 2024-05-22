// AddPropertyContext.js
import { createContext, useContext } from "react";

const AddPropertyContext = createContext();

export const useAddPropertyContext = () => useContext(AddPropertyContext);

export default AddPropertyContext;
