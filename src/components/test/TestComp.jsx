import { useTranslation } from "next-i18next";

const TestComp = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <p>{t("homeDes")}</p>
    </div>
  );
};

export default TestComp;
