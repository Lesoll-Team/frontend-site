import React from "react";
import { useSelector } from "react-redux";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const SellerInfo = ({ propertyDetils, setData }) => {
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState();

  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "رقم الهاتف" : "Phone Number"}
      </h3>
      <div dir="ltr">
        {" "}
        <PhoneInput
          countryCodeEditable={false}
          className=" z-30"
          enableSearch={true}
          country={"eg"}
          excludeCountries={["IL"]}
          value={"5"}
          onChange={
            (e) => setData({ ...propertyDetils, phoneNumber: e })

            // setCountry(country);
            // console.log(phone);
            // console.log(country);
          }
        />
      </div>
    </div>
  );
};

export default SellerInfo;
