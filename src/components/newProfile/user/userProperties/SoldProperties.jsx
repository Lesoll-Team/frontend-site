import { useEffect } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingProp,
  getSoldProp,
} from "@/redux-store/features/user/userPropertiesSlice";
import NoItems from "./NoItems";
const SoldProperties = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const soldProp = useSelector((state) => state.userProperties.sold.data);
  const soldPropStatus = useSelector(
    (state) => state.userProperties.sold.status
  );

  const soldPropError = useSelector((state) => state.userProperties.sold.error);
  useEffect(() => {
    dispatch(getSoldProp());
  }, []);
  const type = language ? "تم البيع" : "Sold";

  return (
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
      {soldProp ? (
        soldProp.propertySoldProfile.length > 0 ? (
          soldProp.propertySoldProfile.map((item) => {
            return <ProfileCard sold data={item} key={item?._id} type={type} />;
          })
        ) : (
          <NoItems title={language ? "لا توجد اعلانات مباعة" : "No sold Ads"} />
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
export default SoldProperties;
