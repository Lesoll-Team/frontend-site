import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";
import {
  setAreaFrom,
  setAreaTo,
  setBathrooms,
  setBathroomsErr,
  setMaxAreaErr,
  setMinAreaErr,
  setRooms,
  setRoomsErr,
} from "@/redux-store/features/needsSlice";
import { useDispatch, useSelector } from "react-redux";

const NeedDetails = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needData = useSelector((state) => state.needs.needsData);
  const errors = useSelector((state) => state.needs.errors);

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  w-full space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "التفاصيل" : "Details"}
      </h3>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="w-full">
          <AddPropInput
            type={"number"}
            title={language ? "عدد الغرف " : " number of Rooms"}
            placeholder={language ? " الغرف" : "rooms"}
            value={needData.rooms}
            setValue={(e) => {
              dispatch(setRooms(e.target.value));
              if (e.target.value) {
                dispatch(setRoomsErr(false));
              }
            }}
            error={errors.rooms}
          />
          {errors.rooms && (
            <p className="text-red-500">{language ? "مطلوب" : "Required"}</p>
          )}
        </div>
        <div className="w-full">
          <AddPropInput
            type={"number"}
            title={language ? "عدد الحمامات " : " number of bathroom"}
            placeholder={language ? "الحمامات " : "bathrooms"}
            value={needData.bathrooms}
            setValue={(e) => {
              dispatch(setBathrooms(e.target.value));

              if (e.target.value) {
                dispatch(setBathroomsErr(false));
              }
            }}
            error={errors.bathrooms}
          />
          {errors.bathrooms && (
            <p className="text-red-500">{language ? "مطلوب" : "Required"}</p>
          )}
        </div>
        <div className="w-full">
          <AddPropInput
            type={"number"}
            title={language ? "اقل مساحة " : " Minimum area"}
            placeholder={language ? "اقل مساحة" : "Minimum area"}
            m2={true}
            value={needData.area.from}
            setValue={(e) => {
              dispatch(setAreaFrom(e.target.value));

              if (e.target.value) {
                dispatch(setMinAreaErr(false));
              }
            }}
            error={errors.minArea}
          />
          {errors.minArea && (
            <p className="text-red-500">{language ? "مطلوب" : "Required"}</p>
          )}
        </div>
        <div className="w-full">
          <AddPropInput
            type={"number"}
            title={language ? " اعلى مساحة " : " Maximum area"}
            placeholder={language ? "اعلى مساحة " : "Maximum area"}
            m2={true}
            value={needData.area.to}
            setValue={(e) => {
              dispatch(setAreaTo(e.target.value));
              if (e.target.value) {
                dispatch(setMaxAreaErr(false));
              }
            }}
            error={errors.maxArea}
          />
          {errors.maxArea && (
            <p className="text-red-500">{language ? "مطلوب" : "Required"}</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default NeedDetails;
