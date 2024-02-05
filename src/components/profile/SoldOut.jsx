import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./realtyCards/UserCard";
import { getOutSold } from "@/redux-store/features/profileSlice";
// import { PiHandCoinsDuotone } from 'react-icons/pi';

const SoldOut = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const outSoldProp = useSelector((state) => state.Profile.outSoldProp);
  // const isLoading = useSelector((state) => state.Profile.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOutSold());
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-center font-bold text-lightGreen text-4xl">
        {language ? "تم البيع " : "Sold"}
      </h2>
      {outSoldProp?.propertySoldProfile.length > 0 ? (
        <div className="grid min-h-[75dvh] md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
          {outSoldProp?.propertySoldProfile.map((propSold) => (
            <UserCard
              key={propSold._id}
              propertyDetails={propSold}
              onSold={getOutSold()}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[50dvh] flex-col gap-3">
          <div>
            <h3 className="font-semibold text-3xl">
              {language
                ? "أضف العقار هنا عند البيع "
                : "Add the property here when selling "}
            </h3>
          </div>
          <div>
            {/* <PiHandCoinsDuotone className="text-darkGreen text-7xl" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SoldOut;
