import { useSelector } from "react-redux";
import AddPropSectionContainer from "../components/AddPropSectionContainer";
import { useUser } from "@/Shared/UserContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Error from "@/Shared/ui/Error";
import { FaSquareMinus } from "react-icons/fa6";
import { useState } from "react";
import OTPModalAddProp from "./OTPForm";
import { phoneNumberwithoutCode } from "@/utils/phoneNumberwithoutCode";

const ChangePhoneNumber = ({ watch, setValue, register, errors, isNeed }) => {
  const { data } = useUser();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [otpVerifyIsOpen, setOtpVerifyIsOpen] = useState(false);
  const cancelOtherPhoneNumber = () => {
    setValue("otherPhone", false);
    setValue("connectPhoneNumber", "");
  };
  const handleAddNumber = async () => {
    if (phoneNumber.trim() && code.trim()) {
      setOtpVerifyIsOpen(true);
    }
  };
  const onSuccess = async () => {
    setValue("connectPhoneNumber", phoneNumber);
  };
  return (
    <AddPropSectionContainer className={"flex flex-cols"}>
      {watch("otherPhone") ? (
        <div className="p-5 bg-white w-full rounded space-y-4 relative">
          <button
            onClick={cancelOtherPhoneNumber}
            type="button"
            className={`absolute top-3 ${language ? "left-2" : "right-2"} `}
          >
            <FaSquareMinus className="text-r text-2xl md:text-3xl" />
          </button>
          <h3 className="text-sm md:text-xl font-cairo">
            {language
              ? ` سيتم استخدام رقم الهاتف  للتواصل عبر واتساب او التليفون لهذا ${isNeed ? "الطلب" : "الإعلان"} فقط`
              : `The phone number you will enter will be used to communicate via WhatsApp or phone for this ${isNeed ? "Need" : "Add"} only`}
          </h3>
          {watch("connectPhoneNumber") ? (
            <div className="flex items-center gap-3">
              <h3>{language ? "رقم التواصل : " : "Contact Number: "}</h3>
              <p className="underline font-bold">
                {watch("connectPhoneNumber")}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex md:flex-row flex-col gap-3 items-center">
                <div dir="ltr" className="md:w-1/2 w-full">
                  {" "}
                  <PhoneInput
                    inputStyle={{
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      height: "40px",
                      fontSize: "18px",
                      color: "#1b6e6d",
                      borderRadius: "4px",
                      width: "100%",
                    }}
                    buttonStyle={{
                      height: "40px",

                      backgroundColor: "white",
                    }}
                    containerStyle={{
                      zIndex: "",
                    }}
                    dropdownStyle={{
                      height: "150px",
                    }}
                    countryCodeEditable={false}
                    placeholder={language ? "رقم الهاتف" : "Phone Number"}
                    className=" z-30"
                    enableSearch={true}
                    country={"eg"}
                    excludeCountries={["IL"]}
                    value={watch("connectPhoneNumber")}
                    onChange={(e, info) => {
                      setPhoneNumber(e);
                      setCode(info.dialCode);
                    }}
                  />
                  <input
                    type="text"
                    className="hidden"
                    hidden
                    {...register("connectPhoneNumber", {
                      required: {
                        value: true,
                        message: language
                          ? "من فضلك اضف رقم الهاتف"
                          : "please enter phone number",
                      },
                      validate: {
                        mustBeNumber: (value) => {
                          return !isNaN(value) || "must be a number";
                        },
                        min: (value) => {
                          return (
                            value.length > 11 ||
                            (language
                              ? "من فضلك اضف رقم صحيح"
                              : "description must be at least 20 characters long")
                          );
                        },
                      },
                    })}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddNumber}
                  className={
                    "w-full md:w-fit py-1.5 px-7 border border-lightGreen rounded  bg-lightGreen text-white duration-150"
                  }
                >
                  {language ? "اضف" : "add"}
                </button>
              </div>
              {errors?.connectPhoneNumber && (
                <Error>{errors.connectPhoneNumber.message}</Error>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="p-5 bg-white w-full rounded space-y-4">
          <h3 className="text-sm md:text-xl font-cairo">
            {language
              ? "سيتم استخدام رقم الهاتف الخاص بك للتواصل عبر واتساب او التليفون"
              : "Your phone number will be used to communicate via WhatsApp or phone"}
          </h3>
          <div className="flex justify-between md:flex-row flex-col">
            <p className="flex items-center gap-5">
              <span>{language ? "رقم التواصل :" : "Contact Number :"}</span>
              <span dir="ltr">{data?.code + data?.phone}</span>
            </p>
            <button
              onClick={() => setValue("otherPhone", true)}
              type="button"
              className="underline text-blue-500 font-bold w-fit"
            >
              {language ? "تغير رقم التواصل" : "Change contact number"}
            </button>
          </div>
        </div>
      )}
      {otpVerifyIsOpen && (
        <OTPModalAddProp
          phoneNumber={phoneNumberwithoutCode(phoneNumber, code)}
          isOpen={otpVerifyIsOpen}
          setIsOpen={setOtpVerifyIsOpen}
          onSuccess={onSuccess}
        />
      )}
    </AddPropSectionContainer>
  );
};

export default ChangePhoneNumber;
