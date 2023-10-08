import { useRef, useState } from "react";
import AddPropDropdown from "../../../AddPropIputs/AddPropDropdown";
import AddPropCheck from "../../../AddPropIputs/AddPropCheck";
import AddPropInput from "../../../AddPropIputs/AddPropInput";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const CommercialInfo = ({
  propertyDetils,
  setData,
  propErrors,
  setPropErrors,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [startDate, setStartDate] = useState();
  const deliveryDateRef = useRef(null);
  const finishedOprions = {
    en: [
      { value: "Super Lux", name: "Super Lux" },
      { value: "Lux", name: "Lux" },
      { value: "Semi Finished", name: "Semi Finished" },
      { value: "Not Finished", name: "Not Finished" },
    ],
    ar: [
      { value: "Super Lux", name: "سوبر لوكس" },
      { value: "Lux", name: "لوكس" },
      { value: "Semi Finished", name: "نصف تشطيب" },
      { value: "Not Finished", name: "بدون تشطيب" },
    ],
  };

  const finishingTypeLang = () => {
    if (propertyDetils.finishingType === "Lux") {
      if (language) {
        return "لوكس";
      } else {
        return "Lux";
      }
    } else if (propertyDetils.finishingType === "Super Lux") {
      if (language) {
        return "سوبر لوكس";
      } else {
        return "Super Lux";
      }
    } else if (propertyDetils.finishingType === "Semi Finished") {
      if (language) {
        return "نصف تشطيب";
      } else {
        return "Semi Finished";
      }
    } else if (propertyDetils.finishingType === "Not Finished") {
      if (language) {
        return "بدون تشطيب";
      } else {
        return "Not Finished";
      }
    } else {
      return language ? "أختر نوع التشطيب" : "Choose Finishing type";
    }
  };
  const handleStartDateChange = (date) => {
    setStartDate(date);
    setData({
      ...propertyDetils,
      deliveryDate: date?.toISOString(),
    });
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="space-y-4 md:w-[48%]">
        <div className="w-full">
          <AddPropInput
            error={propErrors.area}
            className="md:w-[48%]"
            title={language ? "المساحة" : "Area"}
            placeholder={language ? "المساحة" : "Area"}
            type={"number"}
            value={propertyDetils.area}
            setValue={(e) => {
              setData({ ...propertyDetils, area: e.target.value });
              if (e.target.value) {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  area: false,
                }));
              }
            }}
            // m2={true}
          />
          {propErrors.area && (
            <p className="text-red-500 animate-appearance-in">
              {language ? "مطلوب" : "Requird."}
            </p>
          )}
        </div>
        <div className="w-full">
          <AddPropInput
            error={propErrors.rooms}
            title={language ? "عدد الغرف" : "Number of rooms"}
            placeholder={language ? "عدد الغرف" : "Number of rooms"}
            type={"number"}
            value={propertyDetils.rooms}
            setValue={(e) => {
              setData({ ...propertyDetils, rooms: e.target.value });
              if (e.target.value) {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  rooms: false,
                }));
              }
            }}
          />
          {propErrors.rooms && (
            <p className="text-red-500 animate-appearance-in">
              {language ? "مطلوب" : "Requird."}
            </p>
          )}
        </div>
        <div className="w-full">
          <AddPropInput
            error={propErrors.bathRooms}
            title={language ? "عدد الحمامات" : "Number of bathrooms"}
            placeholder={language ? "عدد الحمامات" : "Number of bathrooms"}
            type={"number"}
            value={propertyDetils.bathRooms}
            setValue={(e) => {
              setData({ ...propertyDetils, bathRooms: e.target.value });
              if (e.target.value) {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  bathRooms: false,
                }));
              }
            }}
          />
          {propErrors.bathRooms && (
            <p className="text-red-500 animate-appearance-in">
              {language ? "مطلوب" : "Requird."}
            </p>
          )}
        </div>
        <div className="w-full">
          <h3 className=" text-lg md:text-2xl text-darkGreen font-semibold mb-2">
            {language ? "سنة التسليم" : "Delivery Date"}{" "}
            <span className="text-darkGray text-sm">
              {language ? "(إختيارى)" : "(Optional)"}
            </span>
          </h3>

          <div
            onClick={() => {
              if (deliveryDateRef.current) {
                deliveryDateRef.current.setOpen(true);
              }
            }}
            className="w-full bg-white font-semibold  text-lg focus:outline-lightGreen text-darkGreen cursor-pointer flex justify-between items-center    rounded-xl p-3 py-4 border-[3px]"
          >
            <DatePicker
              ref={deliveryDateRef}
              className="focus:border-none focus:outline-none "
              closeOnScroll={(e) => e.target === document}
              selected={startDate}
              onChange={handleStartDateChange}
              showYearPicker
              placeholderText={language ? "سنة التسليم" : "Delivery Date"}
              dateFormat="yyyy"
              yearItemNumber={10}
              minDate={new Date()}
              // className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="space-y-4 md:w-[48%]">
        <div className="w-full">
          <AddPropInput
            optinal={true}
            title={language ? "الدور" : "Level"}
            placeholder={language ? "الدور" : "Level"}
            type={"number"}
            value={propertyDetils.level}
            setValue={(e) =>
              setData({ ...propertyDetils, level: e.target.value })
            }
          />
        </div>
        {/* ar: [
      { value: "Lux", name: "لوكس" },
      { value: "Super Lux", name: "سوبر لوكس" },
      { value: "Semi Finished", name: "نصف تشطيب" },
      { value: "Not Finished", name: "بدون تشطيب" },
    ],
  }; */}
        <div className="w-full">
          <AddPropDropdown
            error={propErrors.finishingType}
            options={finishedOprions}
            title={language ? "نوع التشطيب" : "Finishing options"}
            value={finishingTypeLang()}
            setValue={(e) => {
              setData({ ...propertyDetils, finishingType: e });
              setPropErrors((prevErrors) => ({
                ...prevErrors,
                finishingType: false,
              }));
            }}
          />
          {propErrors.finishingType && (
            <p className="text-red-500 animate-appearance-in">
              {language ? "مطلوب" : "Requird."}
            </p>
          )}
        </div>
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
