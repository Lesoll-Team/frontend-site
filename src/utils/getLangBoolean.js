import { useTranslation } from "next-i18next";
const getLangBoolean = () => {
  const lang = useTranslation("common");
  return lang[1].language != "en";
};
export { getLangBoolean };
