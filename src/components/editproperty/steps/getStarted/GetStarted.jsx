import React from "react";
import AddPropInput from "../../AddPropIputs/AddPropInput";
import AddPropDropdown from "../../AddPropIputs/AddPropDropdown";
import { useSelector } from "react-redux";

const GetStarted = ({ setData, propertyDetils, propErrors, setPropErrors }) => {
  // const [unitOptions, setUnitOptions] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const unitType = {
    Residential: {
      en: [
        { value: "63cc933946d6193aa1f50f95", name: "Apartment" },
        { value: "63cc934b46d6193aa1f50fa0", name: "Apartment with garden" },
        { value: "63cc935946d6193aa1f50fab", name: "Duplex" },
        { value: "63cc936946d6193aa1f50fb6", name: "Studio" },
        { value: "63cc937b46d6193aa1f50fc1", name: "Penthouse" },
        { value: "63cc938b46d6193aa1f50fcc", name: "Hotel Apartment" },
        { value: "63cc939746d6193aa1f50fd7", name: "Floor" },
        { value: "63cc93ab46d6193aa1f50fe2", name: "Furnished Apartment" },
        { value: "642449f07502ee416a864e95", name: "Residential Building" },
        { value: "645376a84ef5131a0a061888", name: "Home" },
        { value: "63cc940a46d6193aa1f51014", name: "Chalete" },
        { value: "63cc941646d6193aa1f5101f", name: "Cabin" },
        { value: "63cc93c546d6193aa1f50fed", name: "Village" },
        { value: "63cc93d346d6193aa1f50ff8", name: "Townhouse" },
        { value: "63cc93f846d6193aa1f51009", name: "Twin house" },
      ],
      ar: [
        { value: "63cc933946d6193aa1f50f95", name: "شقة" },
        { value: "63cc934b46d6193aa1f50fa0", name: "شقة بحديقة" },
        { value: "63cc935946d6193aa1f50fab", name: "دوبلكس" },
        { value: "63cc936946d6193aa1f50fb6", name: "ستوديو" },
        { value: "63cc937b46d6193aa1f50fc1", name: "بينتهاوس" },
        { value: "63cc938b46d6193aa1f50fcc", name: "شقق فندقية" },
        { value: "63cc939746d6193aa1f50fd7", name: "أرضى" },
        { value: "63cc93ab46d6193aa1f50fe2", name: "شقق مفروشة" },
        { value: "642449f07502ee416a864e95", name: "عمارة" },
        { value: "645376a84ef5131a0a061888", name: "بيت" },
        { value: "63cc940a46d6193aa1f51014", name: "شالية" },
        { value: "63cc941646d6193aa1f5101f", name: "كابينة" },
        { value: "63cc93c546d6193aa1f50fed", name: "فيلا" },
        { value: "63cc93d346d6193aa1f50ff8", name: "تاون هاوس" },
        { value: "63cc93f846d6193aa1f51009", name: "توين هاوس" },
      ],
    },
    Commercial: {
      en: [
        { value: "63cc942c46d6193aa1f5102a", name: "Clinic" },
        { value: "63cc944446d6193aa1f51035", name: "Office" },
        { value: "63cc945646d6193aa1f51040", name: "Garage" },
        { value: "63cc946146d6193aa1f5104b", name: "Factory" },
        { value: "63cc947546d6193aa1f5105c", name: "Warehouse" },
        { value: "63cc948146d6193aa1f51067", name: "Retail" },
        { value: "63cc949246d6193aa1f51072", name: "Restaurant" },
        { value: "63cc949e46d6193aa1f51077", name: "Cafe" },
        { value: "645375df4ef5131a0a061886", name: "Shop" },
      ],
      ar: [
        { value: "63cc942c46d6193aa1f5102a", name: "عيادة" },
        { value: "63cc944446d6193aa1f51035", name: "مكتب" },
        { value: "63cc945646d6193aa1f51040", name: "جراج" },
        { value: "63cc946146d6193aa1f5104b", name: "مصنع" },
        { value: "63cc947546d6193aa1f5105c", name: "مستودع" },
        { value: "63cc948146d6193aa1f51067", name: "ريتيل" },
        { value: "63cc949246d6193aa1f51072", name: "مطعم" },
        { value: "63cc949e46d6193aa1f51077", name: "كافية" },
        { value: "645375df4ef5131a0a061886", name: "محل" },
      ],
    },
    Land: {
      en: [
        { value: "652123e7ebfe0a232b1ef10f", name: "Agriculture" },
        { value: "6521242cebfe0a232b1ef112", name: "Building" },
      ],
      ar: [
        { value: "652123e7ebfe0a232b1ef10f", name: "زراعية" },
        { value: "6521242cebfe0a232b1ef112", name: "مبانى" },
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
      { value: "For Investment", name: "For Investment" },
    ],
    ar: [
      { value: "For Sale", name: "للبيع" },
      { value: "For Rent", name: "للإيجار" },
      { value: "For Investment", name: "للإستثمار" },
    ],
  };


  return (
    propertyDetils && (
      <div className="flex flex-col  w-full space-y-5">
        <h1 className="text-center text-4xl text-darkGreen mt-3 font-bold">
          {language ? "عدل عقارك" : "Edit Property"}
        </h1>
        <div className="w-full">
          <AddPropInput
            error={propErrors?.title || propErrors?.longTitle}
            title={!language ? "Property Title" : "عنوان الاعلان"}
            setValue={(e) => {
              setData({ ...propertyDetils, title: e.target.value });
              if (e.target.value) {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  title: false,
                }));
              }
              if (e.target.value.length < 100) {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  longTitle: false,
                }));
              } else {
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  longTitle: true,
                }));
              }
            }}
            value={propertyDetils?.title}
            placeholder={!language ? "Property Title" : "عنوان الاعلان"}
          />
          {propErrors?.title && (
            <p className="text-red-500">
              {language ? "يرجى كتابة العنوان " : "Title is missing"}
            </p>
          )}
          {propErrors?.longTitle && (
            <p className="text-red-500">
              {language
                ? " لايجب ان يتخطى العنوان 100 حرف."
                : "Title is too long"}
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <AddPropDropdown
              title={!language ? "Listing Option" : "اختر العرض"}
              value={
                propertyDetils?.offer === "For Sale"
                  ? language
                    ? "للبيع"
                    : "For Sale"
                  : propertyDetils?.offer === "For Rent"
                  ? language
                    ? "للإيجار"
                    : "For Rent"
                  : propertyDetils?.offer === "For Investment"
                  ? language
                    ? "للإستثمار"
                    : "For Investment"
                  : ""
              }
              setValue={(e) => {
                setData({ ...propertyDetils, offer: e });
              }}
              options={offer}
            />
            {propErrors.offer && (
              <p className="text-red-500">{language ? "مطلوب" : "Requird."}</p>
            )}
          </div>
          <div className="w-full">
            <AddPropDropdown
              error={propErrors.propType}
              title={!language ? "Property type" : "نوع العقار"}
              value={
                propertyDetils?.propType === "Residential"
                  ? language
                    ? "سكنى"
                    : "Residential"
                  : propertyDetils.propType === "Commercial"
                  ? language
                    ? "تجارى"
                    : "Commercial"
                  : propertyDetils.propType === "Land"
                  ? language
                    ? "ارض"
                    : "Land"
                  : ""
              }
              setValue={(e) => {
                if (propertyDetils.propType !== e) {
                  setData({
                    ...propertyDetils,
                    propType: e,
                    unitType: "",
                    landType: "",
                  });
                } else {
                  setData({
                    ...propertyDetils,
                    propType: e,
                  });
                }
              }}
              placeholder={"unit type"}
              options={propType}
            />
            {propErrors.propType && (
              <p className="text-red-500">
                {language
                  ? "يرجى تحديد نوع العقار "
                  : "TProperty type is missing."}
              </p>
            )}
          </div>

          <div className="w-full">
            <AddPropDropdown
              error={propErrors?.unitType}
              disabled={propertyDetils?.propType}
              title={!language ? "Unit Type" : "نوع الوحدة"}
              value={
                propertyDetils?.unitType?.title
                  ? language
                    ? propertyDetils?.unitType.title.ar
                    : propertyDetils?.unitType.title.en
                  : propertyDetils.unitType
              }
              setValue={(e) => {
                setData({ ...propertyDetils, unitType: e });
                setPropErrors((prevErrors) => ({
                  ...prevErrors,
                  unitType: false,
                }));
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
            {propErrors.unitType && (
              <p className="text-red-500">{language ? "مطلوب" : "Requird."}</p>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default GetStarted;
