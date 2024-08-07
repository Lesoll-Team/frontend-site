import { resetCarStates } from "@/redux-store/features/carsCategory/searchMotorsSlice";
import { memo, useState } from "react";
import { PiArrowCounterClockwiseLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

const ResetAndTitleSearch = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [changing, setChanging] = useState(false);
  const dispatch = useDispatch();
  const handleResetSearch = () => {
    setChanging(true);
    dispatch(resetCarStates());
    setTimeout(() => {
      setChanging(false);
    }, 1000);
  };
  return (
    <div dir={"rtl"} className="flex justify-between  items-center">
      <h3>{language ? "خيارات البحث" : "Search options"}</h3>
      <button onClick={handleResetSearch} className="flex items-center gap-1 ">
        <PiArrowCounterClockwiseLight
          className={`${changing && " -rotate-180 "}  duration-500 `}
        />
        {language ? "إعادة ضبط" : "Reset options"}
      </button>
    </div>
  );
};
export default memo(ResetAndTitleSearch);
