import { useSelector } from "react-redux";
import AddPropSectionContainer from "./AddPropSectionContainer";
import { FaSquareMinus } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Error from "@/Shared/ui/Error";
import { useMemo } from "react";
const PhoneNumber = ({ errors, register, setValue, watch, isNeed, isEdit }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.userProfile.userData);
  const showPhoneInput = watch("otherPhone");
  const cancelOtherPhoneNumber = () => {
    setValue("otherPhone", false);
    setValue("connectPhoneNumber", "");
  };
  const userWithNoPhone = useMemo(() => {
    return !Boolean(userInfo?.phone);
  }, [userInfo]);

  return (
    <AddPropSectionContainer className={"flex flex-cols"}>
      {userWithNoPhone ? (
        <div className="p-5 bg-white w-full rounded space-y-4 relative">
          <h3 className="text-sm md:text-xl font-cairo">
            {language
              ? ` سيتم استخدام رقم الهاتف  للتواصل عبر واتساب او التليفون لهذا ${isNeed ? "الطلب" : "الإعلان"} فقط`
              : `The phone number you will enter will be used to communicate via WhatsApp or phone for this ${isNeed ? "Need" : "Add"} only`}
          </h3>
          <div className="space-y-2">
            <div dir="ltr">
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
                // disableCountryCode={true}
                // countryCodeEditable={false}
                countryCodeEditable={false}
                placeholder={language ? "رقم الهاتف" : "Phone Number"}
                className=" z-30"
                enableSearch={true}
                country={"eg"}
                excludeCountries={["IL"]}
                value={watch("connectPhoneNumber")}
                onChange={(e) => {
                  setValue("connectPhoneNumber", e);
                }}
                // setCountry(country);
              />
              <input
                type="text"
                className="hidden"
                hidden
                {...register("connectPhoneNumber", {
                  required: {
                    value: true,
                    message: language
                      ? "من فضلك ادخل رقم الهاتف"
                      : "please enter phone number",
                  },
                  validate: {
                    // mustBeNumber: (value) => {
                    //   return !isNaN(value) || "must be a number";
                    // },
                    min: (value) => {
                      return (
                        value.length > 11 ||
                        (language
                          ? "من فضلك ادخل رقم صحيح"
                          : "please enter a valid number")
                      );
                    },
                  },
                })}
              />
            </div>
            {errors?.connectPhoneNumber && (
              <Error>{errors.connectPhoneNumber.message}</Error>
            )}
          </div>
        </div>
      ) : showPhoneInput ? (
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
          <div className="space-y-2">
            <div dir="ltr">
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
                // disableCountryCode={true}
                // countryCodeEditable={false}
                countryCodeEditable={false}
                placeholder={language ? "رقم الهاتف" : "Phone Number"}
                className=" z-30"
                enableSearch={true}
                country={"eg"}
                excludeCountries={["IL"]}
                value={watch("connectPhoneNumber")}
                onChange={(e) => {
                  setValue("connectPhoneNumber", e);
                }}
                // setCountry(country);
              />
              <input
                type="text"
                className="hidden"
                hidden
                {...register("connectPhoneNumber", {
                  required: {
                    value: true,
                    message: language
                      ? "من فضلك ادخل رقم الهاتف"
                      : "please enter phone number",
                  },
                  validate: {
                    // mustBeNumber: (value) => {
                    //   return !isNaN(value) || "must be a number";
                    // },
                    min: (value) => {
                      return (
                        value.length > 11 ||
                        (language
                          ? "من فضلك ادخل رقم صحيح"
                          : "please enter a valid number")
                      );
                    },
                  },
                })}
              />
            </div>
            {errors?.connectPhoneNumber && (
              <Error>{errors.connectPhoneNumber.message}</Error>
            )}
          </div>
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
              <span dir="ltr">{userInfo?.code + userInfo?.phone}</span>
            </p>
            <button
              onClick={() => setValue("otherPhone", true)}
              type="button"
              className="underline text-blue-500 font-bold w-fit"
            >
              تغير رقم التواصل
            </button>
          </div>
        </div>
      )}
    </AddPropSectionContainer>
  );
};
export default PhoneNumber;
