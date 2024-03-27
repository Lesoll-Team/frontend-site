import { useRouter } from "next/router";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import ActiveNeeds from "./active-needs/ActiveNeeds";
import PendingNeeds from "./pending-needs/PendingNeeds";

const AllNeeds = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const query = router?.query;
  const tabName = useMemo(() => {
    if (query.tab) {
      return query.tab;
    } else {
      return "pending";
    }
  }, [query]);
  return (
    <div className="md:container mx-auto md:px-0 px-3   my-10 space-y-4">
      <div className="flex flex-wrap justify-center items-center gap-4">
        <button
          onClick={() => {
            router.push("?tab=pending");
          }}
          className={`border min-w-[250px] py-2 px-2 border-lightGreen rounded-md ${tabName === "pending" && "bg-lightGreen text-white"}`}
        >
          {language ? "لم تقبل" : "pending"}
        </button>
        <button
          onClick={() => {
            router.push("?tab=active");
          }}
          className={`border min-w-[250px] py-2 px-2 border-lightGreen rounded-md ${tabName === "active" && "bg-lightGreen text-white"}`}
        >
          {language ? " نشطة" : "Active"}
        </button>
      </div>
      {tabName === "active" ? <ActiveNeeds /> : <PendingNeeds />}
    </div>
  );
};

export default AllNeeds;
