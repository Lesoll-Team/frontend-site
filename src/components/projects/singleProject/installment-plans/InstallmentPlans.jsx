import InstallmentCard from "./InstallmentCard";
import { useTranslation } from "next-i18next";

const InstallmentPlans = ({ projectData }) => {
  const { t } = useTranslation("common");
  return (
    <div className="space-y-[16px]">
      <h2>{t("Installment_Plans")}</h2>
      <div className="grid  grid-cols-3 md:flex-wrap md:flex  gap-3  md:gap-7">
        {projectData?.installment?.map((item, index) => {
          return <InstallmentCard plan={item} key={index} />;
        })}
      </div>
    </div>
  );
};
export default InstallmentPlans;
