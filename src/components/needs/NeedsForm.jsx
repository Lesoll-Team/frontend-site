import { createNeed } from "@/utils/propertyAPI";
import { useEffect, useState } from "react";
import MainData from "./sections/MainData";
import { useDispatch, useSelector } from "react-redux";
import Pricing from "./sections/pricing/Pricing";
import NeedDetails from "./sections/details/NeedDetails";
import NeedsLocation from "./sections/location/NeedsLocation";
import { postNeed, resetData } from "@/redux-store/features/needsSlice";

const NeedsForm = () => {
  const need = useSelector((state) => state.needs.needsData);
  const error = useSelector((state) => state.needs.error);
  const status = useSelector((state) => state.needs.status);

  useEffect(() => {
    console.log(need);
    console.log(status);
    console.log(error);
  }, [need, status, error]);
  const dispatch = useDispatch();
  const handlePostNeed = (e) => {
    // console.log(formData.getAll());
    dispatch(postNeed(need));
  };
  return (
    <div className="container mx-auto space-y-5 mt-10 mb-8">
      {status === "succeeded" ? (
        <div className="w-full flex h-[80dvh] justify-center items-center">
          <button
            onClick={() => {
              dispatch(resetData());
            }}
          >
            sent other response
          </button>
        </div>
      ) : (
        <div className="space-y-5 ">
          <MainData />
          <Pricing />
          <NeedDetails />
          <NeedsLocation />
        </div>
      )}
      <button className="border-[3px] p-2 rounded-md" onClick={handlePostNeed}>
        {status === "loading" ? "loading ..." : "check needs"}
      </button>
    </div>
  );
};
export default NeedsForm;
