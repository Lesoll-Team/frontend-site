import React from "react";
import AddPropDropdown from "../../../AddPropIputs/AddPropDropdown";
import AddPropCheck from "../../../AddPropIputs/AddPropCheck";
import AddPropInput from "../../../AddPropIputs/AddPropInput";
import { useSelector } from "react-redux";

const CommercialInfo = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const finishedOprions = {
    en: [
      { value: "Lux", name: "Lux" },
      { value: "Super Lux", name: "Super Lux" },
      { value: "Semi Finished", name: "Semi Finished" },
      { value: "Not Finished", name: "Not Finished" },
    ],
    ar: [
      { value: "Lux", name: "لوكس" },
      { value: "Super Lux", name: "سوبر لوكس" },
      { value: "Semi Finished", name: "نصف تشطيب" },
      { value: "Not Finished", name: "بدون تشطيب" },
    ],
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="space-y-4 md:w-[48%]">
        <AddPropInput
          title={language ? "المساحة" : "Area"}
          placeholder={language ? "المساحة" : "Area"}
          type={"number"}
          value={propertyDetils.area}
          setValue={(e) => setData({ ...propertyDetils, area: e.target.value })}
          m2={true}
        />
        <AddPropInput
          title={language ? "عدد الغرف" : "Number of rooms"}
          placeholder={language ? "عدد الغرف" : "Number of rooms"}
          type={"number"}
          value={propertyDetils.rooms}
          setValue={(e) =>
            setData({ ...propertyDetils, rooms: e.target.value })
          }
        />
        <AddPropInput
          title={language ? "عدد الحمامات" : "Number of bathrooms"}
          placeholder={language ? "عدد الحمامات" : "Number of bathrooms"}
          type={"number"}
          value={propertyDetils.bathRooms}
          setValue={(e) =>
            setData({ ...propertyDetils, bathRooms: e.target.value })
          }
        />
      </div>
      <div className="space-y-4 md:w-[48%]">
        <AddPropDropdown
          options={finishedOprions}
          title={language ? "نوع التشطيب" : "Finishing options"}
          value={propertyDetils.finishingType}
          setValue={(e) => {
            setData({ ...propertyDetils, finishingType: e });
          }}
        />
        <AddPropCheck
          title={language ? "مفروش" : "Furnished"}
          value={propertyDetils.isFurnished}
          setValue={(e) =>
            setData({
              ...propertyDetils,
              isFurnished: e,
            })
          }
        />
        <AddPropCheck
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
    </div>
  );
};

export default CommercialInfo;
