import { useTranslation } from "next-i18next";

const TestComp = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <h1>{t("navHome")}</h1>
      <p>{t("homeDes")}</p>
    </div>
  );
};

export default TestComp;
