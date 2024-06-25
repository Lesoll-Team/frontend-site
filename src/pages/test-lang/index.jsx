import { useTranslation } from "react-i18next";
const Index = () => {
  const { t } = useTranslation("common");
  // console.info(t("navHome"));
  return <div>{t("navHome")}</div>;
};
export default Index;
