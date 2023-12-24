import AddPropDropdown from "@/components/addproperty/AddPropIputs/AddPropDropdown";
import {
  setOffer,
  setPropType,
  setUnitType,
} from "@/redux-store/features/needsSlice";
import { useDispatch, useSelector } from "react-redux";

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
const PropTypeInvest = {
  en: [{ value: "Land", name: "Land" }],
  ar: [{ value: "Land", name: "أرض" }],
};
const offer = {
  en: [
    { value: "For Sale", name: "For Sale" },
    { value: "For Rent", name: "For Rent" },
    // { value: "For Investment", name: "For Investment" },
  ],
  ar: [
    { value: "For Sale", name: "للبيع" },
    { value: "For Rent", name: "للإيجار" },
    // { value: "For Investment", name: "للإستثمار" },
  ],
};

const MainData = ({ setNeedData }) => {
  // const [unitOptions, setUnitOptions] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needData = useSelector((state) => state.needs.needsData);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col  w-full space-y-5">
      <h1 className="text-center text-5xl text-darkGreen mt-4 font-bold">
        {language ? "أضف احتياجك" : "Add your need"}
      </h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            dispatch(setOffer("For Sale"));
          }}
          className={`border-[3px] w-full py-3 rounded-md font-semibold text-xl duration-150  ${
            needData.offer === "For Sale" &&
            "bg-white shadow-lg  border-darkGreen"
          }`}
        >
          للبيع
        </button>
        <button
          onClick={() => {
            dispatch(setOffer("For Rent"));
          }}
          className={`border-[3px] w-full py-3 rounded-md font-semibold text-xl duration-150 ${
            needData.offer === "For Rent" &&
            "bg-white shadow-lg  border-darkGreen"
          }`}
        >
          للإيجار
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <AddPropDropdown
            // error={propErrors.propType}
            title={!language ? "Property type" : "نوع العقار"}
            value={
              needData.propType === "Residential"
                ? language
                  ? "سكنى"
                  : "Residential"
                : needData.propType === "Commercial"
                ? language
                  ? "تجارى"
                  : "Commercial"
                : needData.propType === "Land"
                ? language
                  ? "ارض"
                  : "Land"
                : ""
            }
            setValue={(e) => {
              dispatch(setPropType(e));
              // dispatch(setUnitType(""));
            }}
            placeholder={"unit type"}
            options={
              needData.offer !== "For Investment" ? propType : PropTypeInvest
            }
          />
        </div>

        <div className="w-full">
          <AddPropDropdown
            // error={propErrors.unitType}
            disabled={needData.propType}
            title={!language ? "Unit Type" : "نوع الوحدة"}
            value={needData.unitType}
            setValue={(e) => {
              dispatch(setUnitType(e));
            }}
            placeholder={"unit type"}
            options={
              needData.propType === "Residential"
                ? unitType.Residential
                : needData.propType === "Commercial"
                ? unitType.Commercial
                : needData.propType === "Land"
                ? unitType.Land
                : unitType.Residential
            }
            updateTitleOnClear={true}
          />
        </div>
      </div>
    </div>
  );
};
export default MainData;
