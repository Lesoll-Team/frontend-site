import React, { useEffect, useState } from "react";
import PlanPricingCard from "../dashboard/model/cards/PlanPricingCard";
import { getServicePrice } from "@/redux-store/features/PricingSlice";
import { useDispatch } from "react-redux";
import { getPlanPayments, updateIndexPlan } from "@/utils/PricingAPI";
import SkeletonPriceCard from "../dashboard/model/cards/SkeletonPriceCard";
import { IoMdSettings } from "react-icons/io";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useUser } from "@/Shared/UserContext";

const PricePageBody = () => {
  const { data } = useUser();

  const [loading, setLoading] = useState(false);
  const [sortedPayments, setSortedPayments] = useState([]);

  const [showSetting, setShowSetting] = useState(false);
  const [payments, setPayments] = useState([]);
  const getPlansPayment = async () => {
    const response = await getPlanPayments();
    setPayments(response.getPayment);
  };
  const dispatch = useDispatch();
  const handleSetIndexAction = async ({ type, planId, currentIndex }) => {
    let newIndex;
    if (type === "minus") {
      newIndex = currentIndex - 1;
    } else if (type === "plus") {
      newIndex = currentIndex + 1;
    }

    try {
      await updateIndexPlan(newIndex, planId);
      setPayments((prevPayments) =>
        prevPayments.map((payment) =>
          payment._id === planId
            ? { ...payment, indexNumber: newIndex }
            : payment,
        ),
      );
    } catch (error) {
      console.error("Error updating index:", error);
    }
  };
  useEffect(() => {
    dispatch(getServicePrice());
    getPlansPayment();
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, [updateIndexPlan]);
  useEffect(() => {
    setSortedPayments(
      [...payments].sort((a, b) => a.indexNumber - b.indexNumber),
    );
  }, [payments, updateIndexPlan]);

  return (
    <div className="md:container md:mx-auto mx-[20px]">
      {data?.isAdmin && (
        <button
          onClick={() => setShowSetting(!showSetting)}
          className={` text-xl border-1 border-gray-200 p-2 rounded `}
        >
          <IoMdSettings
            className={`${showSetting ? "rotate-45" : "-rotate-45"} duration-250`}
          />
        </button>
      )}
      {loading && payments ? (
        <div className=" grid grid-cols-1 md:grid-cols-3  items-center  justify-center ">
          {sortedPayments.map((plan) => (
            <div
              key={plan._id}
              className=" max-w-[390px] mx-auto p-2 gap-x-9 flex flex-col"
            >
              {data?.isAdmin && showSetting && (
                <div className="flex gap-x-3 my-4 items-center ">
                  <div className="flex gap-x-3 items-center w-full justify-center">
                    <button
                      onClick={() =>
                        handleSetIndexAction({
                          type: "minus",
                          currentIndex: plan.indexNumber,
                          planId: plan._id,
                        })
                      }
                      className="p-2 border-1 border-gray-200 rounded-md"
                    >
                      <FaCaretRight />
                    </button>
                    {plan?.indexNumber}
                    <button
                      onClick={() =>
                        handleSetIndexAction({
                          type: "plus",
                          currentIndex: plan.indexNumber,
                          planId: plan._id,
                        })
                      }
                      className="p-2 border-1  border-gray-200 rounded-md"
                    >
                      <FaCaretLeft />
                    </button>
                  </div>
                </div>
              )}
              <PlanPricingCard dash showSetting={showSetting} data={plan} />
            </div>
          ))}
        </div>
      ) : (
        <div className=" grid grid-cols-1 justify-around md:grid-cols-3 ">
          <SkeletonPriceCard />
          <SkeletonPriceCard />
          <SkeletonPriceCard />
        </div>
      )}
    </div>
  );
};

export default PricePageBody;
