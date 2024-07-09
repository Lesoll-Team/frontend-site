import Button from "@/Shared/ui/Button";
import AddPropSectionContainer from "../AddPropSectionContainer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Error from "@/Shared/ui/Error";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import OTPModalAddProp from "./OTPForm";
import { phoneNumberwithoutCode } from "@/utils/phoneNumberwithoutCode";
import { useUser } from "@/Shared/UserContext";
import { updateUserData } from "../apis/updateUserData";

const inputStyle = {
  paddingTop: "10px",
  paddingBottom: "10px",
  height: "40px",
  fontSize: "18px",
  color: "#1b6e6d",
  borderRadius: "4px",
  width: "100%",
};
const buttonStyle = {
  height: "40px",
  backgroundColor: "white",
};

const NoPhoneNumber = ({ register, errors, setValue }) => {
  const { setUserData, data } = useUser();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [formStatus, setFormStatus] = useState("idle");
  const [otpVerifyIsOpen, setOtpVerifyIsOpen] = useState(false);

  const handleAddNumber = async () => {
    if (phoneNumber.trim() && code.trim()) {
      setOtpVerifyIsOpen(true);
    }
  };
  const onSuccess = async () => {
    await updateUserData({
      data: {
        phone: phoneNumberwithoutCode(phoneNumber, code),
        code,
        id: data._id,
      },
      setFormStatus,
    });
  };
  useEffect(() => {
    if (formStatus === "success") {
      setUserData();
      setValue("userHavePhone", true);
    }
  }, [formStatus]);
  return (
    <AddPropSectionContainer className={"flex flex-cols"}>
      <div className="p-5 bg-white w-full rounded space-y-4 relative">
        <h3 className="text-sm md:text-xl font-cairo">
          {language
            ? "أضف رقم هاتف إلى حسابك لسهولة التواصل معك ."
            : "Add a phone number to your account for easy communication."}
        </h3>
        <div className="space-y-2">
          <div className="flex md:flex-row flex-col gap-3 items-center">
            <div dir="ltr" className="md:w-1/2 w-full">
              <PhoneInput
                inputStyle={inputStyle}
                buttonStyle={buttonStyle}
                dropdownStyle={{
                  height: "150px",
                }}
                countryCodeEditable={false}
                className=" z-30"
                enableSearch={true}
                country={"eg"}
                excludeCountries={["IL"]}
                onChange={(e, info) => {
                  setPhoneNumber(e);
                  setCode(info.dialCode);
                }}
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
          {errors?.userHavePhone && (
            <Error>{errors.userHavePhone.message}</Error>
          )}
          <input
            {...register("userHavePhone", {
              required: {
                value: true,
                message: language
                  ? "من فضلك اضف رقم الهاتف"
                  : "please enter phone number",
              },
            })}
            hidden
          />
        </div>
      </div>
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

export default NoPhoneNumber;
