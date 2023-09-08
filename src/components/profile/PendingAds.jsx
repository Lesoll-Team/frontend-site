import { useCallback, useEffect, useState } from "react";
import ProfileCard from "./realtyCards/ProfileCard";
import axios from "axios";
import { useSelector } from "react-redux";

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
        {language ? "تحت المراجعة" : "Pending"}
      </h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
        {pendingAdds &&
          pendingAdds.map((propertyDetails) => {
            return (
              <ProfileCard
                onRemove={handleDelete}
                key={propertyDetails?._id}
                propertyDetails={propertyDetails}
                type="pending"
              />
            );
          })}
        {/* <ProfileCard propertyDetails={propertyDetails} type="pending" /> */}
      </div>
    </div>
  );
};
export default PendingAds;
