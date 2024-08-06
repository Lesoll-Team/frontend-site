// AddPropertyProvider.js

import useAddMotor from "../hooks/useAddMotor";
import AddMotorContext from "./AddMotorContext";
const AddPropertyProvider = ({ children }) => {
  const addProperty = useAddMotor();

  return (
    <AddMotorContext.Provider value={addProperty}>
      {children}
    </AddMotorContext.Provider>
  );
};

export default AddPropertyProvider;
