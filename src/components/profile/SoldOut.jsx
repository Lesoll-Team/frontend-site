import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './realtyCards/UserCard';
import { getOutSold } from '@/redux-store/features/profileSlice';

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
        {language ? "المفضلة" : "Favorites"}
      </h2>
      <div className="grid min-h-[75dvh] md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-20 py-10 mx-auto justify-items-center">
        {outSoldProp?.propertySoldProfile.map((propSold) => (
          <UserCard
            key={propSold._id}
            propertyDetails={propSold}
            onSold={getOutSold()}
          />
        ))}
      </div>
    </div>
  );
};




export default SoldOut;
