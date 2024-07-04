import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const PropertiesTabs = ({ currentTab }) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleTabClick = (tab) => {
    router.push(`?tab=${tab}`);
  };

  return (
    <div className="flex items-center md:justify-center lg:justify-start md:gap-5">
      <button
        className={`md:rounded-md  text-bae font-medium px-5 py-2 border-b ${
          currentTab === "active"
            ? "md:bg-lightGreen md:text-white text-lightGreen border-b-lightGreen"
            : "text-baseGray md:bg-gray-100"
        }`}
        onClick={() => {
          handleTabClick("active");
        }}
      >
        {t("Activity")}
      </button>
      <button
        className={`md:rounded-md  text-bae font-medium px-5 py-2 border-b ${
          currentTab === "pending"
            ? "md:bg-lightGreen md:text-white text-lightGreen border-b-lightGreen"
            : "text-baseGray md:bg-gray-100"
        }`}
        onClick={() => {
          handleTabClick("pending");
        }}
      >
        {t("Under_Review")}
      </button>
      <button
        className={`md:rounded-md  text-bae font-medium px-5 py-2 border-b ${
          currentTab === "sold"
            ? "md:bg-lightGreen md:text-white text-lightGreen border-b-lightGreen"
            : "text-baseGray md:bg-gray-100"
        }`}
        onClick={() => {
          handleTabClick("sold");
        }}
      >
        {t("Sold")}
      </button>
    </div>
  );
};
export default PropertiesTabs;
