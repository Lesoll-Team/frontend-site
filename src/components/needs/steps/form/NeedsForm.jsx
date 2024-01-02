import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import NeedDropDown from "../../inputComponents/NeedDropDown";
import {
  setPropType,
  setPropTypeErr,
  setRooms,
  setRoomsErr,
  setStep,
  setUnitType,
  setUnitTypeErr,
} from "@/redux-store/features/needsSlice";
import NeedInput from "../../inputComponents/NeedInput";

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
const NeedsForm = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needData = useSelector((state) => state.needs.needsData);
  const step = useSelector((state) => state.needs.step);

  const dispatch = useDispatch();

  return (
    <div className="space-y-6 fade-in-right">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:te md:text-3xl font-bold ">
          {language
            ? "ادخل بيانات العقار المطلوب"
            : "Enter the required property information"}
        </h2>

        <button
          onClick={() => {
            dispatch(setStep(step - 1));
          }}
        >
          <IoMdArrowRoundBack className="text-3xl" />
        </button>
      </div>
      <div className="bg-lightNeutral py-8 px-6 md:px-24 rounded-lg h-full grid md:grid-cols-2 gap-y-10 gap-x-16">
        <div className="space-y-6">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? "نوع العقار" : "Property Type"}
          </h3>{" "}
          <NeedDropDown
            setValue={(e) => {
              dispatch(setPropType(e));
              dispatch(setUnitType(""));
              dispatch(setPropTypeErr(false));
            }}
            options={propType}
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? "نوع الوحدة" : "Unit Type"}
          </h3>{" "}
          <NeedDropDown
            setValue={(e) => {
              dispatch(setUnitType(e));
              dispatch(setUnitTypeErr(false));
            }}
            disabled={needData.propType}
            options={
              needData.propType === "Residential"
                ? unitType.Residential
                : needData.propType === "Commercial"
                ? unitType.Commercial
                : needData.propType === "Land"
                ? unitType.Land
                : unitType.Residential
            }
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? " السعر" : "Price"}
          </h3>
          <div className="flex items-center gap-8">
            <NeedInput egp={true} placeholder={language ? "من" : "from"} />
            <NeedInput placeholder={language ? "الى" : "to"} egp={true} />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? " المساحة" : "Area"}
          </h3>
          <div className="flex items-center gap-3">
            <NeedInput placeholder={language ? "من" : "from"} m2={true} />
            <NeedInput placeholder={language ? "الى" : "to"} m2={true} />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? " عدد الغرف" : "Number of rooms"}
          </h3>

          <NeedInput
            value={needData.rooms}
            setValue={(e) => {
              dispatch(setRooms(e.target.value));
              if (e.target.value) {
                dispatch(setRoomsErr(false));
              }
            }}
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? " عدد الحمامات" : "Number of bathrooms"}
          </h3>

          <NeedInput />
        </div>
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? "  موقع العقار" : "Property location"}
          </h3>

          <NeedInput placeholder={"مثال: القاهرة, مصر الجديدة"} />
        </div>
        <div className="space-y-6 md:col-span-2">
          <h3 className="text-xl text-lightGray font-bold">
            {language ? "  هل تريد إضافة تفاصيل أخرى؟" : "Property location"}{" "}
            <span className="font-normal text-base">
              {language ? "(إختيارى)" : "(Optional)"}
            </span>
          </h3>

          <textarea className="w-full  font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 h-[180px] resize-none" />
        </div>
      </div>
    </div>
  );
};
export default NeedsForm;
