import { useSelector } from "react-redux";

const InstallmentCard = ({ plan }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const periodYear =
    plan?.period > 1 && plan?.period < 11
      ? language
        ? "سنوات"
        : "Years"
      : language
        ? "سنة"
        : "Year";
  return (
    <div className="md:min-w-[290px] bg-lightNeutral px-5 md:px-10 py-3 flex flex-col md:flex-row gap-4 md:gap-5 items-center md:rounded-md rounded-lg">
      <h3 className="text-black flex flex-col items-center gap-1 md:block">
        <span className="text-lightGreen md:text-black">
          %{plan?.ProjectPercentage}
        </span>{" "}
        <span className="font-normal md:font-bold">
          {language ? "مقدم" : "Down payment"}
        </span>
      </h3>
      <span className="md:block hidden">|</span>
      <p>
        {plan?.period} {periodYear}
      </p>
    </div>
  );
};
export default InstallmentCard;
