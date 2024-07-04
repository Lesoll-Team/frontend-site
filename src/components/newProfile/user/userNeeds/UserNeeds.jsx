import { getUserNeeds } from "@/redux-store/features/user/userNeedsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NeedsCard from "./NeedsCard";
import MobilePageTitle from "../MobilePageTitle";
import NoItems from "../userProperties/NoItems";
import { useTranslation } from "next-i18next";

const UserNeeds = () => {
  const { t } = useTranslation("common");
  const needsData = useSelector((state) => state.userNeeds.needs.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserNeeds());
  }, []);
  return (
    <div className="space-y-5 md:space-y-6 ">
      <MobilePageTitle title={t("Needs")} />
      {needsData?.data ? (
        needsData?.data.length > 0 ? (
          needsData.data.map((need) => <NeedsCard data={need} key={need._id} />)
        ) : (
          <NoItems title={t("No_Needs_Added")} />
        )
      ) : (
        <>
          <NeedsCard />
          <NeedsCard />
          <NeedsCard />
          <NeedsCard />
        </>
      )}
    </div>
  );
};
export default UserNeeds;
