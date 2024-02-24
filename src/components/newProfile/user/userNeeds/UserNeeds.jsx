import { getUserNeeds } from "@/redux-store/features/user/userNeedsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserNeeds = () => {
  const userData = useSelector((state) => state.userProfile.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userData) {
      dispatch(getUserNeeds(userData._id));
    }
  }, [userData]);
  return <div>UserNeeds</div>;
};
export default UserNeeds;
