import { useRouter } from "next/router";
// import { useMemo } from "react";
import { useSelector } from "react-redux";

const PropertiesTabs = ({ currentTab }) => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);

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
        {language ? "النشطة" : "Active"}
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
        {language ? "قيد المراجعة" : "Pending"}
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
        {language ? "تم البيع" : "Sold"}
      </button>
    </div>
  );
};
export default PropertiesTabs;
