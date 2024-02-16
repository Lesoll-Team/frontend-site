import { useSelector } from "react-redux";

const usePeriodType = (period) => {
  // const language = useSelector((state) => state.GlobalState.languageIs);
  console.log(period);
  const periodType = () => {
    switch (period) {
      case "Monthly":
        return language ? "شهرى" : "Monthly";
      case "Yearly":
        return language ? "سنوى" : "Yearly";

      case "6 Monthly":
        return language ? "نصف سنوى" : "Semi-Annually";
      case "3 Monthly":
        return language ? "ريع سنوى" : "Quarterly";
      default:
        return "";
    }
  };
  const egpPer = () => {
    switch (period) {
      case "Monthly":
        return language ? "جنية/شهر" : "Egp/Month";
      case "Yearly":
        return language ? "جنية/سنة" : "Egp/Year";
      case "6 Monthly":
        return language ? "جنية/6 شهور" : "Egp/6 Month";
      case "3 Monthly":
        return language ? " جنية/3 شهور" : "Egp/3 Month";
      default:
        return language ? "جنية" : "Egp";
    }
  };

  return { periodType, egpPer };
};
export default usePeriodType;
