import React, { useEffect, useState } from "react";
import PlanPricingCard from "../dashboard/model/cards/PlanPricingCard";
import { getServicePrice } from "@/redux-store/features/PricingSlice";
import { useDispatch } from "react-redux";
import { getPlanPayments, updateIndexPlan } from "@/utils/PricingAPI";
import SkeletonPriceCard from "../dashboard/model/cards/SkeletonPriceCard";
import { IoMdSettings } from "react-icons/io";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useUser } from "@/Shared/UserContext";
import PriceFilter from "./PriceFilter";

const PricePageBody = () => {
  const { data } = useUser();
  const [loading, setLoading] = useState(false);
  const [typeExist, setTypeExist] = useState();
  const [type, setType] = useState("");
  const [sortedPayments, setSortedPayments] = useState([]);
  const [showSetting, setShowSetting] = useState(false);
  const [payments, setPayments] = useState([]);
  const getPlansPayment = async () => {
    setLoading(false);
    const response = await getPlanPayments(type);
    setLoading(true);
    setTypeExist({
      yearly: response?.packageYearly,
      monthly: response?.packageMonthly,
      weakly: response?.packageWeakly,
      daily: response?.packageDaily,
    });
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
    setPayments([]);
    getPlansPayment();
  }, [updateIndexPlan, type]);
  useEffect(() => {
    setSortedPayments(
      [...payments].sort((a, b) => a.indexNumber - b.indexNumber),
    );
  }, [payments, updateIndexPlan]);
  return (
    <>
      {payments && (
        <PriceFilter type={type} setType={setType} typeExist={typeExist} />
      )}
      <div className="md:container md:mx-auto gap-x-[1vh] mx-[20px]">
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
          <div className="sm:gap-y-10 gap-y-7 grid grid-cols-1 lg:grid-cols-3  items-center  justify-center ">
            {sortedPayments.map((plan) => (
              <div
                key={plan._id}
                className=" max-w-[390px] mx-auto  p-1 flex flex-col"
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
                <PlanPricingCard
                  dash
                  showSetting={showSetting}
                  data={plan}
                  key={plan._id}
                  planId={plan._id}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="sm:gap-14 gap-7 grid grid-cols-1 lg:grid-cols-3  items-center  justify-center ">
            <SkeletonPriceCard />
            <SkeletonPriceCard />
            <SkeletonPriceCard />
          </div>
        )}
      </div>
    </>
  );
};

export default PricePageBody;
