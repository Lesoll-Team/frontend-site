import { useCallback, useEffect, useState } from "react";
import ProfileCard from "./realtyCards/ProfileCard";
import axios from "axios";
import { useSelector } from "react-redux";
import Link from "next/link";
import { BsHouseAddFill } from "react-icons/bs";
import { DotPulse } from "@uiball/loaders";

const PendingAds = () => {
  const [pendingAdds, setPendingAdds] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const getPending = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/pendingrealtyprofile`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );
      setPendingAdds(response.data.pendingRealty);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const handleDelete = (propertyIdToRemove) => {
    // Filter out the removed property from the 'fav' state
    setPendingAdds((pending) =>
      pending.filter((prop) => prop._id !== propertyIdToRemove)
    );
  };
  useEffect(() => {
    getPending();
    // console.log(activeAdds);
  }, []);
  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        {language ? (language ? "تحت المراجعة" : "Pending") : "تحت المراجعة"}
      </h2>
      {!pendingAdds ? (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <DotPulse size={50} speed={1.3} color="#309da0" />
        </div>
      ) : pendingAdds.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
          {pendingAdds.map((propertyDetails) => (
            <ProfileCard
              onRemove={handleDelete}
              key={propertyDetails?._id}
              propertyDetails={propertyDetails}
              type="pending"
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <Link className="flex flex-col items-center" href={"/sell"}>
            <BsHouseAddFill className="text-darkGreen text-7xl" />
            <h3 className="font-semibold text-3xl">
              {language ? "أضف عقار" : "Add Property"}
            </h3>
          </Link>
        </div>
      )}
      {/* <ProfileCard propertyDetails={propertyDetails} type="pending" /> */}
    </div>
  );
};
export default PendingAds;
