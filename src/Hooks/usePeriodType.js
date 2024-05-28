import { useSelector } from "react-redux";

export const usePeriodDate = (period) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  switch (period) {
    case "one day":
      return language ? "يومية" : "Daily";
    case "week":
      return language ? "أسبوعية" : "Weekly";
    case "month":
      return language ? "شهرية" : "Monthly";
    case "yearly":
      return language ? "سنوية" : "Yearly";
  }
};
