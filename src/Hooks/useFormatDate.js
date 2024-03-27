export default function useFormatDate(dateString) {
    const originalDate = dateString || null;
    const date = new Date(originalDate);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
  }
