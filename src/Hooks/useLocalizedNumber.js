import { getLangBoolean } from "@/utils/getLangBoolean";
import { useState, useEffect } from "react";

const useLocalizedNumber = (number) => {
  const language = getLangBoolean();
  const [localizedNumber, setLocalizedNumber] = useState("");

  useEffect(() => {
    const formatNumber = (number, isArabic) => {
      const lang = language ? "ar" : "en"; // Set language based on isArabic flag
      const formatter = new Intl.NumberFormat(lang, {
        style: "decimal",
        // Add more options as needed based on your requirements
      });
      return formatter.format(number);
    };

    const localizedString = formatNumber(number, language);
    setLocalizedNumber(localizedString);
  }, [number, language]);

  return { localizedNumber };
};

export default useLocalizedNumber;
