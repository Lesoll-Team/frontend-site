import { getCompounds } from "@/redux-store/features/property/compoundSlice";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCompound = (searchKeyword) => {
  const dispatch = useDispatch();
  const compounds = useSelector((state) => state.compounds.data);

  useEffect(() => {
    if (!compounds) {
      dispatch(getCompounds());
    }
  }, []);
  const filterdCompunds = useMemo(() => {
    if (searchKeyword) {
      if (typeof searchKeyword === "string") {
        // Check if govInput is a string
        if (searchKeyword.trim() !== "") {
          // Trim and check if it's not an empty string
          return compounds.filter(
            (item) =>
              item.CompoundsAR.includes(searchKeyword) ||
              item.CompoundsEN.toLowerCase().includes(
                searchKeyword.toLowerCase()
              )
          );
        } else {
          return compounds;
        }
      } else {
        return compounds; // Return gov if govInput is not a string
      }
    }
  }, [searchKeyword, compounds]);
  return { filterdCompunds };
};
export default useCompound;
