import { useSelector } from "react-redux";
import { useCallback, useState } from "react";
import RenderUsers from "./RenderUsers";
import { MdOutlineInfo } from "react-icons/md";
const PotentialUsers = ({ users }) => {
  const [tab, setTab] = useState("visits");
  const language = useSelector((state) => state.GlobalState.languageIs);
  const changeTab = (type) => {
    if (type !== tab) {
      setTab(type);
    }
  };
  const renderTab = useCallback(() => {
    if (tab === "visits") {
      return <RenderUsers users={users?.usersVisitAd} />;
    } else if (tab === "actions") {
      return <RenderUsers users={users?.usersClickWhatsappAndCall} />;
    } else return <RenderUsers users={[]} />;
  }, [tab]);
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2>{language ? "العملاء المحتملين" : "Potential users"}</h2>
        <div className="flex items-center gap-5">
          <button
            onClick={() => changeTab("visits")}
            className={`w-fit duration-100 px-5 py-2 rounded-md ${tab === "visits" ? "bg-lightGreen text-white" : "bg-gray-100 text-outLine"}`}
          >
            {language ? "المشاهدات" : "Visits"}
          </button>
          <button
            onClick={() => changeTab("actions")}
            className={`w-fit duration-100 px-5 py-2 rounded-md ${tab === "actions" ? "bg-lightGreen text-white" : "bg-gray-100 text-outLine"}`}
          >
            {language ? "العملاء المهتمين" : "Interested users"}
          </button>
        </div>
      </div>
      {tab === "visits" && (
        <p className={`flex items-center gap-2 fade-in`}>
          <MdOutlineInfo className="text-xl" />{" "}
          {language
            ? " يتم عرض احدث عشر مشاهدات لعقارك فقط"
            : "Only the ten most recent views of your property are displayed"}
        </p>
      )}
      {renderTab()}
    </div>
  );
};

export default PotentialUsers;
