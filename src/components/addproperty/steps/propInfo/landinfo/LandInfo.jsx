import React from "react";
import AddPropDropdown from "../../../AddPropIputs/AddPropDropdown";
import AddPropCheck from "../../../AddPropIputs/AddPropCheck";
import AddPropInput from "../../../AddPropIputs/AddPropInput";
import { useSelector } from "react-redux";
const LandInfo = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const areaType = {
    en: [
      { value: "m", name: "Meter" },
      { value: "carat", name: "Carat" },
      { value: "acre", name: "Acre" },
    ],
    ar: [
      { value: "m", name: "متر" },
      { value: "carat", name: "قيراط" },
      { value: "acre", name: "فدان" },
    ],
  };
  console.log(propertyDetils);
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-[4%]">
      <AddPropInput
        className="md:w-[48%]"
        title={language ? "المساحة" : "Area"}
        placeholder={language ? "المساحة" : "Area"}
        type={"number"}
        value={propertyDetils.area}
        setValue={(e) => setData({ ...propertyDetils, area: e.target.value })}
        // m2={true}
      />

      <AddPropDropdown
        title={language ? "نوع المساحة" : "Area type"}
        value={
          propertyDetils.areaType === "m"
            ? language
              ? "متر"
              : "Meter"
            : propertyDetils.areaType === "Carat"
            ? language
              ? "قيراط"
              : "Carat"
            : propertyDetils.areaType === "acre"
            ? language
              ? "فدان"
              : "Acre"
            : language
            ? "اختر نوع المساحة"
            : "Select area type"
        }
        options={areaType}
        setValue={(e) => setData({ ...propertyDetils, areaType: e })}
      />
      <AddPropCheck
        className="md:w-[48%]"
        title={language ? "مسجل" : "Registerd"}
        value={propertyDetils.isRegisterd}
        setValue={(e) => {
          // console.log(propertyDetils);
          setData({
            ...propertyDetils,
            isRegisterd: e,
          });
        }}
      />
    </div>
  );
};

export default LandInfo;
