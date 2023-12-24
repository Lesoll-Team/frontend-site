import {
  setDescription,
  setDescriptionErr,
} from "@/redux-store/features/needsSlice";
import { useDispatch, useSelector } from "react-redux";

const NeedDescription = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const need = useSelector((state) => state.needs.needsData);
  const errors = useSelector((state) => state.needs.errors);

  const dispatch = useDispatch();
  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "تفاصيل اخرى" : "More details"}{" "}
        <span className="text-darkGray text-base">
          {language ? "(إختيارى)" : "(Optional)"}
        </span>
      </h3>
      <textarea
        value={need.description}
        onChange={(e) => {
          dispatch(setDescription(e.target.value));
          if (e.target.value.length < 300) {
            dispatch(setDescriptionErr(false));
          }
          if (e.target.value.length > 300) {
            dispatch(setDescriptionErr(true));
          }
        }}
        className={`w-full focus:border-lightGreen text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkgray placeholder:opacity-60 border-[3px]   rounded-xl p-4  max-h-[250px] resize-none ${
          errors.description && "border-red-500 focus:border-red-500"
        }`}
        name=""
        cols="30"
        rows="10"
      ></textarea>
      {errors.description && (
        <p className="text-red-500">
          {language ? "لا يجب ان يزيد عن 300 حرف" : "Maximum of 300 character"}
        </p>
      )}
    </div>
  );
};
export default NeedDescription;
