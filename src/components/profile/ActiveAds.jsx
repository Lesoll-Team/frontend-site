import { useCallback, useEffect, useState } from "react";
import ProfileCard from "./realtyCards/ProfileCard";
import { GetActiveProp } from "@/utils/propertyAPI";
import axios from "axios";
import { useSelector } from "react-redux";
const ActiveAds = () => {
  const [activeAdds, setActiveAdds] = useState(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const getActive = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/confirmedprofile`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("userToken")),
          },
        }
      );
      setActiveAdds(response.data.confirmedRealty);
      // setActiveAdds(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    getActive();
    // console.log(activeAdds);
  }, []);
  // console.log(activeAdds);

  const handledelete = (propertyIdToRemove) => {
    // Use the functional form of setActiveAdds to ensure state updates correctly
    setActiveAdds((prevActiveAdds) =>
      prevActiveAdds.filter((prop) => prop._id !== propertyIdToRemove)
    );
  };

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        {language ? "إعلاناتك النشطة" : "Active Ads"}
      </h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
        {activeAdds &&
          activeAdds.map((propertyDetails) => {
            return (
              <ProfileCard
                onRemove={handledelete}
                key={propertyDetails._id}
                type="active"
                propertyDetails={propertyDetails}
              />
            );
          })}
      </div>
    </div>
  );
};
export default ActiveAds;
