import React, { useState } from "react";
import AddPropInput from "../../AddPropIputs/AddPropInput";

const SellerInfo = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [sellerInfo, setSellerinfo] = useState(initialState);

  const handleNameChange = (name) => {
    setSellerinfo((prevData) => ({
      ...prevData,
      name: name,
    }));
  };
  const handleEmailChange = (email) => {
    setSellerinfo((prevData) => ({
      ...prevData,
      email: email,
    }));
  };
  const handlePhoneChange = (phone) => {
    setSellerinfo((prevData) => ({
      ...prevData,
      phone: phone,
    }));
  };
  return (
    <div className="w-full mx-auto px-6 md:px-8 my-8 space-y-3">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        Who's listing this property
      </h3>

      <div className="space-y-3">
        {/* <div className="">
          <h3 className="text-xl text-darkGreen font-bold mb-2">Name</h3>
          <input
            className="w-full text-lg font-medium text-darkGreen focus:outline-none placeholder:text-darkGreen placeholder:opacity-60   border-lightGreen rounded-xl p-3 py-4 drop-shadow-xl"
            placeholder="Name"
            type="text"
          />
        </div> */}
        <AddPropInput
          type={"text"}
          placeholder={"Name"}
          title={"Name"}
          value={sellerInfo.name}
          setValue={handleNameChange}
        />
        <AddPropInput
          type={"Email"}
          placeholder={"Email"}
          title={"Email"}
          value={sellerInfo.email}
          setValue={handleEmailChange}
        />
        <AddPropInput
          type={"number"}
          placeholder={"Phone Number"}
          title={"Phone Number"}
          value={sellerInfo.phone}
          setValue={handlePhoneChange}
        />
      </div>
    </div>
  );
};

export default SellerInfo;
