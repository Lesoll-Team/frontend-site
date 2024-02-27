import { getUserNeeds } from "@/redux-store/features/user/userNeedsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NeedsCard from "./NeedsCard";
import MobilePageTitle from "../MobilePageTitle";

const UserNeeds = () => {
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const needsData = useSelector((state) => state.userNeeds.needs.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserNeeds());
  }, []);
  return (
    <div className="space-y-5 md:space-y-6 ">
      <MobilePageTitle title={language ? "الطلبات" : "Needs"} />
      {needsData?.data
        ? needsData?.data.length > 0
          ? needsData.data.map((need) => (
              <NeedsCard data={need} key={need._id} />
            ))
          : ""
        : ""}
    </div>
  );
};
export default UserNeeds;
