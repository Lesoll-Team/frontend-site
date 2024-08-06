import { PiArrowCounterClockwiseLight } from "react-icons/pi";
import { useSelector } from "react-redux";

const ResetAndTitleSearch = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div dir={language && "rtl"} className="flex justify-between  items-center">
      <h3>Search options</h3>
      <button className="flex items-center gap-1">
        <PiArrowCounterClockwiseLight />
        Reset options
      </button>
    </div>
  );
};
export default ResetAndTitleSearch;
