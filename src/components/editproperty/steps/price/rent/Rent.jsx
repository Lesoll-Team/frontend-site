import AddPropCheck from "@/components/editproperty/AddPropIputs/AddPropCheck";
import AddPropDropdown from "@/components/editproperty/AddPropIputs/AddPropDropdown";
import AddPropInput from "@/components/editproperty/AddPropIputs/AddPropInput";
import React from "react";
import { useSelector } from "react-redux";

const Rent = ({ propertyDetils, setData, propErrors, setPropErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const rentalPeriodOptions = {
    en: [
      { value: "Daily", name: "Daily" },
      { value: "Monthly", name: "Monthly" },
      { value: "Yearly", name: "Yearly" },
    ],
    ar: [
      { value: "Daily", name: "يومي" },
      { value: "Monthly", name: "شهري" },
      { value: "Yearly", name: "سنوي" },
    ],
  };
  const handleRentPeriodLang = () => {
    switch (propertyDetils.rentalPeriod) {
      case "Daily":
         return language ? "يومى" : "Daily";
        break;
      case "Monthly":
        return language ? "شهري" : "Monthly";
        break;
      case "Yearly":
        return language ? "سنوي" : "Yearly";
        break;
      default:
        return language ? "اختر نوع الإيجار" : "Choose Rental Type";
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between">
      <div className="space-y-4 md:w-[48%]">
        <div className="w-full">
          <AddPropInput
            error={propErrors.price}
            type={"number"}
            title={language ? "سعر الإيجار" : "Rental Price"}
            placeholder={language ? "السعر" : "Price"}
            egp={true}
            value={propertyDetils.price}
            setValue={(e) => {
              setData({ ...propertyDetils, price: e.target.value });
              if (e.target.value) {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  price: false,
                }));
              }
            }}
          />
          {propErrors.price && (
            <p className="text-red-500 animate-appearance-in">
              {language ? "مطلوب" : "Requird."}
            </p>
          )}
        </div>
        <div className="w-full">
          <AddPropInput
            error={propErrors.insurance}
            type={"number"}
            title={language ? "التأمين" : "Insurance"}
            value={propertyDetils.insurance}
            placeholder={language ? "التأمين" : "Insurance"}
            setValue={(e) => {
              setData({ ...propertyDetils, insurance: e.target.value });
              if (e.target.value) {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  insurance: false,
                }));
              }
            }}
          />
          {propErrors.insurance && (
            <p className="text-red-500 animate-appearance-in">
              {language ? "مطلوب" : "Requird."}
            </p>
          )}
        </div>
      </div>
      <div className="space-y-4 md:w-[48%]">
        <div className="w-full">
          <AddPropDropdown
            error={propErrors.rentalPeriod}
            title={language ? "نوع الإيجار" : "Rental Type"}
            value={handleRentPeriodLang()}
            setValue={(e) => {
              setData({ ...propertyDetils, rentalPeriod: e });
              setPropErrors((prevErrors) => ({
                ...prevErrors,
                rentalPeriod: false,
              }));
            }}
            options={rentalPeriodOptions}
          />
          {propErrors.rentalPeriod && (
            <p className="text-red-500 animate-appearance-in">
              {language ? "مطلوب" : "Requird."}
            </p>
          )}
        </div>
        <AddPropCheck
          title={language ? "قابل للتفاوض" : "negotiable"}
          value={propertyDetils.negotiable}
          setValue={(e) =>
            setData({
              ...propertyDetils,
              negotiable: e,
            })
          }
        />
      </div>
    </div>
  );
};

export default Rent;
