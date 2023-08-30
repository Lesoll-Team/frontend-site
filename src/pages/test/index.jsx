// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import parsePhoneNumberFromString from "libphonenumber-js";

import { useDispatch, useSelector } from "react-redux";
import { selectAddPropData } from "@/redux-store/features/addPropertySlice";
const PhoneNumberInput = () => {
  const show = useSelector(selectAddPropData);
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [country, setCountry] = useState("");

  // const handlePhoneNumberChange = (value, countryData) => {
  //   setPhoneNumber(value);

  //   // Use libphonenumber-js to parse the phone number and get the country
  //   const phoneNumberObj = parsePhoneNumberFromString(
  //     value,
  //     countryData.countryCode
  //   );
  //   if (phoneNumberObj) {
  //     setCountry(phoneNumberObj.country);
  //   } else {
  //     setCountry("");
  //   }
  // };

  return (
    <div className="h-screen container break-words text-justify">
      {/* <PhoneInput value={phoneNumber} onChange={handlePhoneNumberChange} />
      {country && <p>Detected Country: {country}</p>}
      <button
        onClick={() => {
          console.log(country);
        }}
      >
        aaaaa
      </button> */}
      {JSON.stringify(show)}
    </div>
  );
};

export default PhoneNumberInput;
