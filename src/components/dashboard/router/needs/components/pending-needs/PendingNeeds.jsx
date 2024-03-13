import { useDispatch, useSelector } from "react-redux";
import { getPendingNeeds } from "../../redux/pendingNeedsSlice";
import NeedsAdminCard from "../card/NeedsAdminCard";
import { useEffect } from "react";

const PendingNeeds = () => {
  const pendingNeeds = useSelector((state) => state.PendingNeeds.pending.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPendingNeeds());
  }, []);
  return (
    <div className="flex flex-col gap-5 p-3 md:p-5 bg-neutral">
      {pendingNeeds?.getData &&
        pendingNeeds.getData.length > 0 &&
        pendingNeeds.getData.map((item) => {
          return <NeedsAdminCard need={item} />;
        })}
    </div>
  );
};

export default PendingNeeds;
