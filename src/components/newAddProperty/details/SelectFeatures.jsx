import useFeaures from "@/Hooks/addProperty/useFeaures";
import RadioBtn from "@/Shared/ui/RadioBtn";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AddPropSectionContainer from "../AddPropSectionContainer";

const SelectFeatures = ({ register, setValue, watch }) => {
  const features = useSelector((state) => state.getFeatures.features);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const featuresId = features.map((feature) => feature._id);

  const { handleSelect, selectedData } = useFeaures({
    selected: watch("service"),
  });

  useEffect(() => {
    setValue("service", selectedData);
  }, [selectedData]);

  return (
    <AddPropSectionContainer className={"flex flex-col gap-4 "}>
      <p className="text-gray-800">
        {language ? "مميزات العقار" : "Property Features"}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {features &&
          features.map((feature, i) => {
            const active = selectedData.includes(feature._id);
            selectedData.includes(feature._id);
            return (
              <RadioBtn
                key={feature._id}
                onClick={() => handleSelect(feature)}
                active={active}
                title={language ? feature.name.ar : feature.name.en}
              />
            );
          })}
      </div>
    </AddPropSectionContainer>
  );
};
export default SelectFeatures;
