import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import parsePhoneNumberFromString from "libphonenumber-js";

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");

  const handlePhoneNumberChange = (value, countryData) => {
    setPhoneNumber(value);

    // Use libphonenumber-js to parse the phone number and get the country
    const phoneNumberObj = parsePhoneNumberFromString(
      value,
      countryData.countryCode
    );
    if (phoneNumberObj) {
      setCountry(phoneNumberObj.country);
    } else {
      setCountry("");
    }
  };

  return (
    <div className="h-screen">
      <PhoneInput value={phoneNumber} onChange={handlePhoneNumberChange} />
      {country && <p>Detected Country: {country}</p>}
      <button
        onClick={() => {
          console.log(country);
        }}
      >
        aaaaa
      </button>
    </div>
  );
};

export default PhoneNumberInput;
