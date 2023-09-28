import React from "react";
import { useSelector } from "react-redux";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AddPropInput from "../../AddPropIputs/AddPropInput";
const SellerInfo = ({ propertyDetils, setData }) => {
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState();

  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="space-y-4 md:space-y-0 grid md:grid-cols-2 gap-4 md:gap-[4%]">
      <AddPropInput
        title={language ? "إسم البائع" : "Seller Name"}
        value={propertyDetils.sellerName}
        setValue={(e) => {
          setData({ ...propertyDetils, sellerName: e.target.value });
        }}
      />
      <AddPropInput
        title={language ? " البريد" : "Seller Email"}
        value={propertyDetils.sellerEmail}
        setValue={(e) => {
          setData({ ...propertyDetils, sellerEmail: e.target.value });
        }}
      />
      <div>
        <h3 className="text-2xl text-darkGreen font-bold mb-1">
          {language ? "رقم الهاتف" : "Phone Number"}
        </h3>
        <div dir="ltr">
          {" "}
          <PhoneInput
            inputStyle={{
              paddingTop: "10px",
              paddingBottom: "10px",
              height: "55px",
              fontSize: "18px",
              color: "#1b6e6d",
              borderRadius: "11px",
            }}
            buttonStyle={{
              height: "55px",

              backgroundColor: "white",
            }}
            containerStyle={{
              overflow: "hidden",
            }}
            // countryCodeEditable={false}
            placeholder={language ? "رقم الهاتف" : "Phone Number"}
            className=" z-30"
            enableSearch={true}
            country={"eg"}
            excludeCountries={["IL"]}
            value={propertyDetils.connectPhoneNumber}
            onChange={
              (e) => setData({ ...propertyDetils, connectPhoneNumber: e })

              // setCountry(country);
              // console.log(phone);
              // console.log(country);
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
