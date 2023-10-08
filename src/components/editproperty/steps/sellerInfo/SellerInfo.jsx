import React from "react";
import { useSelector } from "react-redux";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AddPropInput from "../../AddPropIputs/AddPropInput";
const SellerInfo = ({ propertyDetils, setData, propErrors, setPropErrors }) => {
  // const [phone, setPhone] = useState("");
  // const [country, setCountry] = useState();

  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);
  // console.log(userInfo);
  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {" "}
        {language ? "رقم التواصل " : "Contact Phone number"}{" "}
      </h3>
      {/* <AddPropInput
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
     
    </div> */}
      {userInfo?.phone && (
        <div className="flex w-full gap-4 flex-col md:flex-row ">
          <div
            onClick={() => {
              setData((prevState) => ({ ...prevState, phoneChoice: "same" }));
              setPropErrors((prevState) => ({ ...prevState, phone: false }));
            }}
            className={`border-[3px] rounded-lg w-full p-4 focus:outline-none text-start space-y-2 duration-150  cursor-pointer ${
              propertyDetils.phoneChoice === "same" &&
              "border-lightGreen bg-[#97cecf]"
            }`}
          >
            <p className="text-lg font-semibold">
              {language ? "نفس رقم الحساب" : "Your account phone number"}
            </p>
            <p className="text-darkGray font-semibold">
              {language
                ? "سيتم استخدام رقم الهاتف المسجل فى الحساب حاليا كرقم للتواصل على هذا الاعلان"
                : "The phone number currently registered in the account will be used as a contact number for this add."}
            </p>
          </div>
          <div
            onClick={() => {
              setData((prevState) => ({ ...prevState, phoneChoice: "other" }));
            }}
            className={`border-[3px] rounded-lg w-full p-4 focus:outline-none text-start space-y-2 duration-150 cursor-pointer ${
              propertyDetils.phoneChoice === "other" &&
              "border-lightGreen bg-[#97cecf]"
            }`}
          >
            <p className="text-lg font-semibold">
              {language ? "رقم أخر للتواصل" : "Different contact number"}
            </p>
            <p>
              {" "}
              {language
                ? "فى حال ان رقم التواصل لهذا الاعلان مختلف عن رقم الحساب"
                : "If the contact number for this add is different from the account number"}{" "}
            </p>
          </div>
        </div>
      )}
      {propertyDetils.phoneChoice === "other" && (
        <>
          <div className="animate-appearance-in" dir="ltr">
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
                zIndex: "",
              }}
              dropdownStyle={{
                height: "150px",
              }}
              // disableCountryCode={true}
              // countryCodeEditable={false}
              countryCodeEditable={false}
              placeholder={language ? "رقم الهاتف" : "Phone Number"}
              className=" z-30"
              enableSearch={true}
              country={"eg"}
              excludeCountries={["IL"]}
              value={propertyDetils.connectPhoneNumber}
              onChange={
                (e, info) => {
                  setData({ ...propertyDetils, connectPhoneNumber: e });
                  if (e) {
                    setPropErrors((prevState) => ({
                      ...prevState,
                      phone: false,
                    }));
                  }
                  // console.log(e);
                  // console.log(info.dialCode);
                }
                // setCountry(country);
                // console.log(phone);
                // console.log(country);
              }
            />
          </div>
          {propErrors.phone && (
            <p className="text-red-500"> {language ? "مطلوب" : "Requird"} </p>
          )}
        </>
      )}
    </div>
  );
};

export default SellerInfo;
