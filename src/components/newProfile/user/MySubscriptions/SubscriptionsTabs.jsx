import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const SubscriptionsTabs = () => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);

  const handleTabClick = (tab) => {
    router.push(`?tab=${tab}`);
  };
  const currentTab = router.query?.tab || "active";
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
        {language ? "باقات نشطة" : "Active packages"}
      </button>
      <button
        className={`md:rounded-md  text-bae font-medium px-5 py-2 border-b ${
          currentTab === "previous"
            ? "md:bg-lightGreen md:text-white text-lightGreen border-b-lightGreen"
            : "text-baseGray md:bg-gray-100"
        }`}
        onClick={() => {
          handleTabClick("previous");
        }}
      >
        {language ? " باقات منتهية" : "Expired packages"}
      </button>
    </div>
  );
};
export default SubscriptionsTabs;
