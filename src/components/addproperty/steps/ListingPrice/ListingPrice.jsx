import React, { useEffect, useState } from "react";
import Sale from "./sale/Sale";
import Rent from "./rent/Rent";
import { useSelector } from "react-redux";
import FormControlBtns from "../../FormControlBtns";
import { FaLeaf } from "react-icons/fa";

const ListingPrice = () => {
  const listingOption = useSelector((state) => state.Property.offer);
  const paymentMethod = useSelector((state) => state.Property.saleOption);
  const price = useSelector((state) => state.Property.price);
  const downPayment = useSelector((state) => state.Property.downPayment);
  const installmentPeriod = useSelector(
    (state) => state.Property.installmentOption.period
  );
  const installmentPlan = useSelector(
    (state) => state.Property.installmentOption.type
  );
  const rentalPeriod = useSelector((state) => state.Property.rentalPeriod);
  const insurance = useSelector((state) => state.Property.insurance);
  const [canGoNext, setCanGoNext] = useState(false);
  const goNext = () => {
    if (listingOption === "Sale") {
      if (paymentMethod === "Installment") {
        setCanGoNext(
          Boolean(paymentMethod) &&
            Boolean(price) &&
            Boolean(downPayment) &&
            Boolean(installmentPeriod) &&
            Boolean(installmentPlan)
        );
      } else if (paymentMethod === "Cash") {
        setCanGoNext(Boolean(paymentMethod) && Boolean(price));
      }
    } else if (listingOption === "Rent") {
      setCanGoNext(Boolean(price) && Boolean(rentalPeriod));
    }
  };
  useEffect(() => {
    goNext(); // Call the goNext function when the component mounts or when dependencies change
  }, [
    listingOption,
    paymentMethod,
    price,
    downPayment,
    installmentPeriod,
    installmentPlan,
    rentalPeriod,
  ]);

  return (
    <div className="w-full min-h-[450px] mx-auto px-6 md:px-8 my-5 space-y- flex flex-col justify-between">
      <div>
        <h3 className="text-lg md:text-2xl text-darkGreen font-bold mb-3 ">
          Price
        </h3>
        {listingOption === "Sale" ? (
          <Sale />
        ) : listingOption === "Rent" ? (
          <Rent />
        ) : (
          <Sale />
        )}
      </div>
      <div className="-mb-6 mt-6">
        <FormControlBtns canGoNext={canGoNext} />
      </div>
    </div>
  );
};

export default ListingPrice;
