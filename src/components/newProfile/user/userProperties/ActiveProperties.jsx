import { useEffect } from "react";
import ProfileCard from "../../profile-cards/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { getActiveProp } from "@/redux-store/features/user/userPropertiesSlice";

const ActiveProperties = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const activeProp = useSelector((state) => state.userProperties.active.data);
  const activePropStatus = useSelector(
    (state) => state.userProperties.active.status
  );
  const activePropError = useSelector(
    (state) => state.userProperties.active.error
  );
  useEffect(() => {
    dispatch(getActiveProp());
  }, []);
  const type = language ? "نشطة" : "active";
  // const showLoadingState =
  //   activePropStatus === "loading" || !activeProp.confirmedRealty;
  return (
    <div className="flex flex-wrap gap-6 lg:justify-start justify-center lg:gap-12">
      {activeProp?.confirmedRealty ? (
        activeProp.confirmedRealty.map((item) => {
          return <ProfileCard data={item} key={item?._id} type={type} />;
        })
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
export default ActiveProperties;
