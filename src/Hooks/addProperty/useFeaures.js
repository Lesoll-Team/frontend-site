import { useState } from "react";

const useFeatures = ({ selected = [] }) => {
  const [selectedData, setSelected] = useState(selected);

  const handleSelect = (feature) => {
    const featureId = feature._id;
    const existIndex = selectedData.indexOf(featureId);
    if (existIndex === -1) {
      setSelected([...selectedData, featureId]);
    } else {
      const updatedSelectedData = [...selectedData];
      updatedSelectedData.splice(existIndex, 1);
      setSelected(updatedSelectedData);
    }
  };

  return { selectedData, handleSelect };
};

export default useFeatures;
