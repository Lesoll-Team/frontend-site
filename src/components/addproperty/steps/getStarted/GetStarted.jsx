import React, { useEffect, useState } from "react";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import AddPropDropdown from "../../AddPropIputs/AddPropDropdown";
import { useSelector } from "react-redux";

const GetStarted = ({ setData, propertyDetils }) => {
  // const [unitOptions, setUnitOptions] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const unitType = {
    Residential: {
      en: [
        { value: "Apartment", name: "Apartment" },
        { value: "Apartment with garden", name: "Apartment with garden" },
        { value: "Duplex", name: "Duplex" },
        { value: "Studio", name: "Studio" },
        { value: "Penthouse", name: "Penthouse" },
        { value: "Hotel Apartment", name: "Hotel Apartment" },
        { value: "Floor", name: "Floor" },
        { value: "Furnished Apartment", name: "Furnished Apartment" },
        { value: "Residential Building", name: "Residential Building" },
        { value: "Home", name: "Home" },
        { value: "Chalete", name: "Chalete" },
        { value: "Cabin", name: "Cabin" },
        { value: "Village", name: "Village" },
        { value: "Townhouse", name: "Townhouse" },
        { value: "Twin house", name: "Twin house" },
      ],
      ar: [
        { value: "Apartment", name: "شقة" },
        { value: "Apartment with garden", name: "شقة بحديقة" },
        { value: "Duplex", name: "دوبلكس" },
        { value: "Studio", name: "ستوديو" },
        { value: "Penthouse", name: "بينتهاوس" },
        { value: "Hotel Apartment", name: "شقق فندقية" },
        { value: "Floor", name: "أرضى" },
        { value: "Furnished Apartment", name: "شقق مفروشة" },
        { value: "Residential Building", name: "عمارة" },
        { value: "Home", name: "بيت" },
        { value: "Chalete", name: "شالية" },
        { value: "Cabin", name: "كابينة" },
        { value: "Village", name: "فيلا" },
        { value: "Townhouse", name: "تاون هاوس" },
        { value: "Twin house", name: "توين هاوس" },
      ],
    },
    Commercial: {
      en: [
        { value: "Clinic", name: "Clinic" },
        { value: "Office", name: "Office" },
        { value: "Garage", name: "Garage" },
        { value: "Factory", name: "Factory" },
        { value: "Warehouse", name: "Warehouse" },
        { value: "Retail", name: "Retail" },
        { value: "Restaurant", name: "Restaurant" },
        { value: "Cafe", name: "Cafe" },
        { value: "Shop", name: "Shop" },
      ],
      ar: [
        { value: "Clinic", name: "عيادة" },
        { value: "Office", name: "مكتب" },
        { value: "Garage", name: "جراج" },
        { value: "Factory", name: "مصنع" },
        { value: "Warehouse", name: "مستودع" },
        { value: "Retail", name: "ريتيل" },
        { value: "Restaurant", name: "مطعم" },
        { value: "Cafe", name: "كافية" },
        { value: "Shop", name: "محل" },
      ],
    },
    Land: {
      en: [
        { value: "Agriculture", name: "Agriculture" },
        { value: "Building", name: "Building" },
      ],
      ar: [
        { value: "Agriculture", name: "زراعية" },
        { value: "Building", name: "مبانى" },
      ],
    },
  };
  const propType = {
    en: [
      { value: "Residential", name: "Residential" },
      { value: "Commercial", name: "Commercial" },
      { value: "Land", name: "Land" },
    ],
    ar: [
      { value: "Residential", name: "سكنى" },
      { value: "Commercial", name: "تجارى" },
      { value: "Land", name: "أرض" },
    ],
  };
  const offer = {
    en: [
      { value: "For Sale", name: "For Sale" },
      { value: "For Rent", name: "For Rent" },
    ],
    ar: [
      { value: "For Sale", name: "للبيع" },
      { value: "For Rent", name: "للإيجار" },
    ],
  };

  // console.log(unitOptions);
  // console.log(propertyDetils.propType);

  return (
    <div className="flex flex-col  w-full space-y-5">
      <h3 className="text-center text-4xl text-darkGreen mt-3 font-bold">
        {language ? "أضف عقارك" : "Add Property"}
      </h3>
      <div className="w-full">
        <AddPropInput
          title={!language ? "Property Title" : "عنوان الاعلان"}
          setValue={(e) => {
            setData({ ...propertyDetils, title: e.target.value });
          }}
          value={propertyDetils.title}
          placeholder={!language ? "Property Title" : "عنوان الاعلان"}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <AddPropDropdown
          title={!language ? "Property type" : "نوع العقار"}
          value={propertyDetils.propType}
          setValue={(e) => {
            setData({ ...propertyDetils, propType: e });
          }}
          placeholder={"unit type"}
          options={propType}
        />
        <AddPropDropdown
          disabled={propertyDetils.propType}
          title={!language ? "Unit Type" : "نوع الوحدة"}
          value={propertyDetils.unitType}
          setValue={(e) => {
            setData({ ...propertyDetils, unitType: e });
          }}
          placeholder={"unit type"}
          options={
            propertyDetils.propType === "Residential"
              ? unitType.Residential
              : propertyDetils.propType === "Commercial"
              ? unitType.Commercial
              : propertyDetils.propType === "Land"
              ? unitType.Land
              : unitType.Residential
          }
        />
        <AddPropDropdown
          title={!language ? "Listing Option" : "إختار العرض"}
          value={propertyDetils.offer}
          setValue={(e) => {
            setData({ ...propertyDetils, offer: e });
          }}
          options={offer}
        />
      </div>
    </div>
  );
};

export default GetStarted;
