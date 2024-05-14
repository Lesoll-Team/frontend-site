// import { DateTime } from "luxon";

export function useFormatData(dateString) {
  const originalDate = dateString || null;
  const date = new Date(originalDate);
  return date.toLocaleString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
}
