import React from "react";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import { useSelector } from "react-redux";
import AddPropDropdown from "../../AddPropIputs/AddPropDropdown";
import AddPropCheck from "../../AddPropIputs/AddPropCheck";

const PropertyInfo = ({ propertyDetils, setData }) => {
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
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "Property Info" : "تفاصيل العقار"}
      </h3>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="space-y-4 md:w-[48%]">
          <AddPropInput
            title={language ? "Area" : "المساحة"}
            placeholder={language ? "Area" : "المساحة"}
            type={"number"}
            value={propertyDetils.area}
            setValue={(e) =>
              setData({ ...propertyDetils, area: e.target.value })
            }
            m2={true}
          />
          <AddPropInput
            title={language ? "Number of rooms" : "عدد الغرف"}
            placeholder={language ? "Number of rooms" : "عدد الغرف"}
            type={"number"}
            value={propertyDetils.rooms}
            setValue={(e) =>
              setData({ ...propertyDetils, rooms: e.target.value })
            }
          />
          <AddPropInput
            title={language ? "Number of bathrooms" : "عدد الحمامات"}
            placeholder={language ? "Number of bahtrooms" : "عدد الحمامات"}
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
            title={language ? "Finishing options" : "نوع التشطيب"}
            value={propertyDetils.finishingType}
            setValue={(e) => {
              setData({ ...propertyDetils, finishingType: e });
            }}
          />
          <AddPropCheck
            title={language ? "Furnished" : "مفروش"}
            value={propertyDetils.isFurnished}
            setValue={(e) =>
              setData({
                ...propertyDetils,
                isFurnished: e,
              })
            }
          />
          <AddPropCheck
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
      </div>
    </div>
  );
};

export default PropertyInfo;
