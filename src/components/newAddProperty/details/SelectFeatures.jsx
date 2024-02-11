import useFeaures from "@/Hooks/addProperty/useFeaures";
import RadioBtn from "@/Shared/ui/RadioBtn";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SelectFeatures = ({ register, setValue, watch }) => {
  const features = useSelector((state) => state.getFeatures.features);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const featuresId = features.map((feature) => feature._id);
  //   console.log(featuresId);
  const { handleSelect, selectedData } = useFeaures({
    selected: watch("service"),
  });
  //   console.log("the hook", selectedData);
  //   console.log("form hook", watch("service"));
  useEffect(() => {
    // console.log("in effect", selectedData);
    setValue("service", selectedData);
  }, [selectedData]);

  return (
    <div className="col-span-2 space-y-4">
      <h3 className="text-xl font-bold text-darkGray">
        {language ? "مميزات العقار" : "Property Features"}
      </h3>
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
    </div>
  );
};
export default SelectFeatures;
