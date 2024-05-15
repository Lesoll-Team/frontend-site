// import { DateTime } from "luxon";

export function useFormatNewData({ date, lang }) {
  const originalDate = date || null;
  const newDate = new Date(originalDate);
  switch (lang) {
    case false:
      return newDate.toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

    case true:
      return newDate.toLocaleString("ar-EG", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
  }
}
