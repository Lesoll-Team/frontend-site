import React, { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import Price from "../Price";
import Cash from "./cash/Cash";
import Installment from "./installment/Installment";

const Sale = () => {
  const initialState = {
    paymentMethod: "",
    price: "",
    cash: {
      negotiable: false,
    },
    installment: {
      downPayment: false,
      downPaymentType: "EGP",
      period: false,
      installmentAmount: "",
      installmentPlane: "year",
    },
    realEstateFinance: false,
  };
  const [saleData, setSaleData] = useState(initialState);

  console.log(saleData.paymentMethod);

  const handlePaymentMethodChange = (method) => {
    setSaleData((prevData) => ({
      ...prevData,
      paymentMethod: method,
    }));
  };

  const handlePriceChange = (newPrice) => {
    setSaleData((prevData) => ({
      ...prevData,
      price: newPrice,
    }));
  };
  const handleNegotiableChange = () => {
    setSaleData((prevData) => ({
      ...prevData,
      cash: {
        ...prevData.cash,
        negotiable: !prevData.cash.negotiable,
      },
    }));
  };
  const handleRealEstateFinance = (method) => {
    setSaleData((prevData) => ({
      ...prevData,
      realEstateFinance: !prevData.realEstateFinance,
    }));
  };
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:space-y-0 space-y-4">
      <div
        className={`duration-200 w-full space-y-4 ${
          saleData.paymentMethod !== "" ? "md:w-[48%]" : "w-full"
        }`}
      >
        <PaymentMethod
          paymentMethod={saleData.paymentMethod}
          setPaymentMethod={handlePaymentMethodChange}
          className="w-full"
        />
        {saleData.paymentMethod !== "" && (
          <Price price={saleData.price} setPrice={handlePriceChange} />
        )}
        {saleData.paymentMethod === "Installment" && <Installment />}
      </div>
      {saleData.paymentMethod === "Cash" && (
        <div className="w-full md:w-[48%]">
          <Cash
            negotiable={saleData.cash.negotiable}
            setNegotiable={handleNegotiableChange}
            realEstateFinance={saleData.realEstateFinance}
            setRealEstateFinance={handleRealEstateFinance}
          />
        </div>
      )}
    </div>
  );
};

export default Sale;
