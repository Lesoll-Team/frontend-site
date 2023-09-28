import React from "react";
import { useSelector } from "react-redux";

const Summary = ({ propertyDetils, setData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full  flex flex-col justify-stretch items-stretch space-y-3 ">
      <h3 className="text-xl text-darkGreen font-bold">
        {language ? "الملخص" : "Summary "}
      </h3>

      {/* <div>
          <div className="text-lightOrange font-bold  space-x-2 whitespace-nowrap">
            <h4 className="text-white font-semibold text-lg">Price</h4>
            <span>
              {propertyDetils.price
                ? "0"
                : parseInt(propertyDetils.price).toLocaleString()}
            </span>
            <span>EGP</span>
          </div>
        </div> */}

      <div className="w-full font-semibold  md:text-lg flex items-center justify-between gap-6 focus:outline-none   bg-darkGreen text-white  border-lightGreen rounded-xl p-[12px] px-3 drop-shadow-xl  whitespace-nowrap">
        <div className="flex space-x-1">
          <h4 className="text-white font-semibold text-lg px-1">
            {language ? "السعر : " : "Price : "}
          </h4>
          <p>
            {propertyDetils.price
              ? language
                ? parseInt(propertyDetils.price).toLocaleString("ar-Eg")
                : parseInt(propertyDetils.price).toLocaleString()
              : "0"}
          </p>
        </div>
        <p>{language ? "جنية" : "EGP"}</p>
      </div>
      <div className="w-full font-semibold  md:text-lg flex items-center justify-between gap-6 focus:outline-none   bg-darkGreen text-white  border-lightGreen rounded-xl p-[12px] px-3 drop-shadow-xl  whitespace-nowrap">
        <div className="flex space-x-2">
          <h4 className="text-white font-semibold text-lg px-1">
            {language ? "المقدم : " : "Down payment : "}
          </h4>
          <p>
            {propertyDetils.downPayment
              ? language
                ? parseInt(propertyDetils.downPayment).toLocaleString("ar-Eg")
                : parseInt(propertyDetils.downPayment).toLocaleString()
              : "0"}
          </p>
        </div>
        <p>{language ? "جنية" : "EGP"}</p>
      </div>
      <div className="w-full font-semibold  md:text-lg  items-center justify-between gap-6 focus:outline-none   bg-darkGreen text-white  border-lightGreen rounded-xl p-[12px] px-3 drop-shadow-xl  whitespace-nowrap">
        <div className="flex space-x-1 justify-between lg:flex-row flex-col  ">
          <h4 className="text-white font-semibold text-lg px-1">
            {language ? "قيمة التقسيط : " : "Installment amount : "}
          </h4>

          <div className="flex justify-between w-full gap-3 flex-wrap">
            <p>
              {propertyDetils.price &&
              propertyDetils.installmentOption.period &&
              propertyDetils.downPayment
                ? parseInt(propertyDetils.price) <=
                  parseInt(propertyDetils.downPayment) +
                    parseInt(propertyDetils.maintenancePayment)
                  ? "0"
                  : language
                  ? parseInt(
                      (propertyDetils.price -
                        propertyDetils.downPayment -
                        propertyDetils?.maintenancePayment) /
                        propertyDetils.installmentOption.period
                    ).toLocaleString("ar-Eg")
                  : parseInt(
                      (propertyDetils.price -
                        propertyDetils.downPayment -
                        propertyDetils?.maintenancePayment) /
                        propertyDetils.installmentOption.period
                    ).toLocaleString()
                : 0}
            </p>
            <p>/{propertyDetils.installmentOption.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
