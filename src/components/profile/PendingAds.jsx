import {useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { BsHouseAddFill } from "react-icons/bs";
import UserCard from "./realtyCards/UserCard";
import { getPending } from "@/redux-store/features/profileSlice";

const PendingAds = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const propPending = useSelector((state) => state.Profile.pendingProp);
  useEffect(() => {
    dispatch(getPending());
  }, []); 

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        {language ? (language ? "تحت المراجعة" : "Pending") : "تحت المراجعة"}
      </h2>
      { propPending?.pendingRealty?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
          {propPending?.pendingRealty?.map((propertyDetails) => (
            <UserCard
              omDelete={getPending()}
              key={propertyDetails?._id}
              propertyDetails={propertyDetails}
              type="pending"
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <Link
            title={language ? "أضف عقار" : "Add Property"}
            className="flex flex-col items-center"
            href={"/sell"}
          >
            <BsHouseAddFill className="text-darkGreen text-7xl" />
            <h3 className="font-semibold text-3xl">
              {language ? "أضف عقار" : "Add Property"}
            </h3>
          </Link>
        </div>
      )}
    </div>
  );
};
export default PendingAds;
