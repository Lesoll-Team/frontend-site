import {
  setDescription,
  setDescriptionErr,
} from "@/redux-store/features/needsSlice";
import { useDispatch, useSelector } from "react-redux";

const NeedsDescription = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needData = useSelector((state) => state.needs.needsData);

  const errors = useSelector((state) => state.needs.errors);
  const dispatch = useDispatch();
  return (
    <div className="space-y-6 md:col-span-2">
      <h3 className="text-xl text-lightGray font-bold">
        {language ? "  هل تريد إضافة تفاصيل أخرى؟" : "Property location"}{" "}
        <span className="font-normal text-base">
          {language ? "(إختيارى)" : "(Optional)"}
        </span>
      </h3>

      <div>
        <textarea
          value={needData.description}
          onChange={(e) => {
            dispatch(setDescription(e.target.value));
            if (e.target.value.length < 300) {
              dispatch(setDescriptionErr(false));
            }
            if (e.target.value.length > 300) {
              dispatch(setDescriptionErr(true));
            }
          }}
          className={`w-full  font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 h-[180px] resize-none ${
            errors.description && "border-red-500 focus:border-red-500"
          }`}
        />
        <p className="text-sm text-slate-500">
          {needData.description.length.toLocaleString("ar-Eg")} /{" "}
          {(300).toLocaleString("ar-Eg")}
        </p>
      </div>
    </div>
  );
};
export default NeedsDescription;
