import { useEffect } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getPendingProp } from "@/redux-store/features/user/userPropertiesSlice";
import NoItems from "./NoItems";

const PendingProperties = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const pendingProp = useSelector((state) => state.userProperties.pending.data);
  const pendingPropStatus = useSelector(
    (state) => state.userProperties.pending.status
  );
  const pendingPropError = useSelector(
    (state) => state.userProperties.pending.error
  );
  useEffect(() => {
    dispatch(getPendingProp());
  }, []);
  const type = language ? "تحت المراجعة" : "Pending";

  return (
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
      {pendingProp?.pendingRealty ? (
        pendingProp.pendingRealty.length > 0 ? (
          pendingProp.pendingRealty.map((item) => {
            return <ProfileCard data={item} key={item?._id} type={type} />;
          })
        ) : (
          <NoItems
            title={language ? "لا توجد اعلانات قيد الراجعة" : "No Pending Ads"}
          />
        )
      ) : (
        <>
          {" "}
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </>
      )}
    </div>
  );
};
export default PendingProperties;
