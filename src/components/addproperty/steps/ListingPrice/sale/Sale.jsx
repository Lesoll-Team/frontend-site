import React, { useState } from "react";
import PaymentMethod from "./PaymentMethod";

import InstallmentPlan from "./installment/InstallmentPlan";
import Installment from "./installment/Installment";
import Summary from "./installment/Summary";
import AddPropCheck from "@/components/addproperty/AddPropIputs/AddPropCheck";
import AddPropInput from "@/components/addproperty/AddPropIputs/AddPropInput";

const Sale = () => {
  const initialState = {
    paymentMethod: "",
    price: "",
    cash: {
      negotiable: false,
    },
    installment: {
      downPayment: "",
      downPaymentType: "EGP",
      period: false,
      installmentAmount: "",
      installmentPlan: "year",
      mintenacePayment: "",
      mintenacePaymentType: "EGP",
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
  const handleRealEstateFinance = () => {
    setSaleData((prevData) => ({
      ...prevData,
      realEstateFinance: !prevData.realEstateFinance,
    }));
  };
  const handleInstallmetPlan = (plan) => {
    setSaleData((prevData) => ({
      ...prevData,
      installment: {
        installmentPlan: plan,
      },
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
          <AddPropInput
            title={"Price"}
            placeholder={"Price"}
            egp={true}
            value={saleData.price}
            setValue={handlePriceChange}
          />
        )}
        {saleData.paymentMethod !== "" ? (
          saleData.paymentMethod !== "Cash" ? (
            <Installment />
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
      {saleData.paymentMethod !== "" && (
        <div className="w-full md:w-[48%]">
          {saleData.paymentMethod === "Cash" ? (
            <div className="space-y-4">
              {/* Nogitiable checkbox */}
              <AddPropCheck
                title={"Negotiable"}
                value={saleData.cash.negotiable}
                setValue={handleNegotiableChange}
              />
              {/* realEstateFinance checkbox */}
              <AddPropCheck
                title={"Real Estate Finance"}
                value={saleData.realEstateFinance}
                setValue={handleRealEstateFinance}
              />
            </div>
          ) : (
            <div className="space-y-4">
              <InstallmentPlan
                installmentPlan={saleData.installment.installmentPlan}
                handleInstallmetPlan={handleInstallmetPlan}
              />
              <Summary />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sale;
