import React from "react";
import AddPropDropdown from "../../../AddPropIputs/AddPropDropdown";
import AddPropCheck from "../../../AddPropIputs/AddPropCheck";
import AddPropInput from "../../../AddPropIputs/AddPropInput";
import { useSelector } from "react-redux";
const LandInfo = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const areaType = {
    en: [
      { value: "carat", name: "Carat" },
      { value: "meter", name: <span>m&#178;</span> },
    ],
    ar: [
      { value: "Carat", name: "قيراط" },
      { value: "meter", name: <span>م&#178;</span> },
    ],
  };
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-[4%]">
      <AddPropInput
        className="md:w-[48%]"
        title={language ? "Area" : "المساحة"}
        placeholder={language ? "Area" : "المساحة"}
        type={"number"}
        value={propertyDetils.area}
        setValue={(e) => setData({ ...propertyDetils, area: e.target.value })}
        m2={true}
      />

      <AddPropDropdown
        title={language ? "نوع المساحة" : "Area type"}
        value={propertyDetils.areaType}
        options={areaType}
        setValue={(e) => setData({ ...propertyDetils, areaType: m })}
      />
      <AddPropCheck
        className="md:w-[48%]"
        title={language ? "Registerd" : "مسجل"}
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
