import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import GoogleSignInBtn from "@/components/auth/login/GoogleSignInBtn";
import { userSignUp } from "../../api/signUpApi";
import { Ring } from "@uiball/loaders";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "@/Shared/ui/Button";
import TimeOut from "@/Shared/ui/TimeOut";
import { useTranslation } from "next-i18next";
import { getLangBoolean } from "@/utils/getLangBoolean";

const SignUpForm = () => {
  const language = getLangBoolean();

  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [token, setToken] = useState(null);
  const {
    register,
    handleSubmit,
    formState,
    reset,
    setValue,
    watch,
    clearErrors,
  } = useForm({
    defaultValues: {
      code: "+20",
      typeOfUser: "individual",
      verificationMethod: "email",
    },
  });
  const [emailUserError, setEmailUserError] = useState(false);
  const { errors } = formState;
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation("common");

  const setUserType = (type) => {
    setValue("typeOfUser", type);
    clearErrors("typeOfUser");
  };
  const phoneWithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };
  const onSubmit = async (data) => {
    userSignUp({
      setFormStatus,
      setToken,
      setServerError,
      data: { ...data, phone: phoneWithoutCode(data.phone, data.code) },
    });
  };

  useEffect(() => {
    if (formStatus === "success" && token) {
      router.push(
        `/verify-otp/${token}?phone=${phoneWithoutCode(watch("phone"), watch("code"))}`,
      );
    }
  }, [formStatus, reset, router, token]);

  useEffect(() => {
    if (serverError?.code === 401) {
      setEmailUserError(true);
      setServerError(null);
      setTimeout(() => {
        setEmailUserError(false);
      }, 3500);
    }
    if (serverError?.code == 429) {
      setTimeout(function () {
        setServerError(null);
      }, 30000);
    }
  }, [serverError]);
  useEffect(() => {
    if (watch("phone")) {
      const phoneNumber = phoneWithoutCode(watch("phone"), watch("code"));
      if (phoneNumber.length > 10) {
        clearErrors("phone");
      }
    }
  }, [watch("phone")]);
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-6 py-5 pb-14 md:my-0"
    >
      <div className="space-y-4">
        <h1 className="text-2xl md:text-4xl">{t("Sign_Up")}</h1>
        <div className="flex rounded-lg overflow-hidden border">
          <button
            type="button"
            onClick={() => setUserType("individual")}
            className={`w-full text-darkGray text-center py-2 ${watch("typeOfUser") === "individual" && "bg-lightGreen text-white"}`}
          >
            {t("Register_Individual")}
          </button>
          <button
            type="button"
            onClick={() => setValue("typeOfUser", "")}
            className={`w-full text-darkGray text-center py-2 ${watch("typeOfUser") !== "individual" && "bg-lightGreen text-white"}`}
          >
            {t("Register_Company")}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <input
          {...register("fullname", {
            required: t("Enter_Your_Name"),
          })}
          placeholder={t("Full_Name")}
          type="text"
          className={`w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${errors.fullname && "border-red-500 focus:border-red-500"}`}
        />
        {errors.fullname && (
          <p className="text-red-500 text-sm">{errors.fullname.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <input
          {...register("email", {
            required: t("Enter_Your_Email"),
            pattern: {
              value:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
              message: t("Enter_Valid_Email"),
            },
          })}
          placeholder={t("Email")}
          type="text"
          className={`w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${(errors.email || emailUserError) && "border-red-500 focus:border-red-500"}`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        {emailUserError && (
          <p className="text-red-500 text-sm">{t("DoseNot_Email")}</p>
        )}
      </div>
      <div className="space-y-2">
        <div dir="ltr">
          <PhoneInput
            inputStyle={{
              paddingTop: "10px",
              paddingBottom: "10px",
              height: "48px",
              fontSize: "16px",
              color: "#1b6e6d",
              borderRadius: "8px",
              width: "100%",
            }}
            buttonStyle={{
              height: "47px",
              backgroundColor: "white",
            }}
            containerStyle={{
              borderColor: errors.phone && "red",
            }}
            dropdownStyle={{
              height: "150px",
            }}
            autocompleteSearch={true}
            countryCodeEditable={false}
            placeholder={t("Phone_Number")}
            className="z-30"
            enableSearch={true}
            country={"eg"}
            excludeCountries={["IL"]}
            onChange={(e, info) => {
              setValue("phone", e);
              setValue("code", info.dialCode);
            }}
          />
          {errors.phone && (
            <p dir={language ? "rtl" : "ltr"} className="text-red-500">
              {errors.phone.message}
            </p>
          )}
          <input
            {...register("phone", {
              required: {
                value: true,
                message: t("Enter_Phone_Number"),
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
            className="hidden"
            type="text"
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            {...register("password", {
              required: t("Placeholder_Enter_Password"),
            })}
            placeholder={t("Password")}
            type={showPassword ? "text" : "password"}
            className={`w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${errors.password && "border-red-500 focus:border-red-500"}`}
          />
          <button
            className="-mx-10"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye className="text-lightGray text-xl" />
            ) : (
              <FaEyeSlash className="text-lightGray text-xl" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      {watch("typeOfUser") !== "individual" && (
        <div className="space-y-2">
          <label htmlFor="">{t("Choose_Your_Type")}</label>
          <div className="flex items-center">
            <input
              {...register("typeOfUser", {
                required: t("Enter_Your_Type"),
              })}
              hidden
            />
            <div className="flex w-full items-center gap-4 md:gap-6">
              <button
                onClick={() => setUserType("company")}
                className={`bg-lightNeutral py-2 flex items-center justify-center rounded-md  gap-4 px-2 md:text-base text-sm w-full  ${watch("typeOfUser") === "company" && "border border-lightGreen "}`}
                type="button"
              >
                <Image
                  src={"/icons/company-icon.svg"}
                  width={30}
                  height={30}
                  alt="مطور عقارى"
                />
                <span>{t("Developer")}</span>
              </button>
              <button
                onClick={() => setUserType("broker")}
                className={`bg-lightNeutral py-2 flex items-center justify-center rounded-md  gap-4 px-2 md:text-base text-sm w-full ${watch("typeOfUser") === "broker" && "border border-lightGreen "}`}
                type="button"
              >
                <Image
                  src={"/icons/broker-icon.svg"}
                  width={30}
                  height={30}
                  alt="سمسار"
                />
                <span>{t("Broker")}</span>
              </button>
            </div>
          </div>
          {errors.typeOfUser && (
            <p className="text-red-500 text-sm">{errors.typeOfUser.message}</p>
          )}
        </div>
      )}
      <div className="space-y-2 flex items-center gap-1">
        <input
          {...register("terms", {
            required: t("Must_Agree_Terms_Conditions"),
          })}
          type="checkbox"
          className={`mt-2 ${errors.terms && "outline-red-500"}`}
          id="terms"
          name="terms"
        />
        <label
          htmlFor="terms"
          className={`text-sm ${errors.terms && "text-red-500"}`}
        >
          {t("Agree_Conditions")}{" "}
          <Link
            href={"/termsofservice"}
            className={`text-lightGreen font-bold ${errors.terms && "text-red-500"}`}
          >
            {t("Terms_Conditions")}
          </Link>
        </label>
      </div>
      {serverError?.code === 429 && <TimeOut seconds={30} />}
      <Button
        disabled={formStatus === "loading" || serverError?.code == 429}
        type="submit"
        className="w-full p-3 h-12 flex items-center justify-center rounded-md text-white bg-lightGreen text-xl"
      >
        {formStatus === "loading" ? (
          <Ring size={20} color="#fff" />
        ) : (
          <span>{t("Sign_Up")}</span>
        )}
      </Button>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-full bg-gray-500"></div>
          <p className="text-gray-700"> {t("Or")}</p>
          <div className="h-[1px] w-full bg-gray-500"></div>
        </div>
        <GoogleSignInBtn />
      </div>
      <div className="flex items-center justify-center gap-1">
        <p className="text-lightGray">{t("Already_Have_Account")}</p>
        <Link href={"/signin"} className="text-lightGreen">
          {t("Sign_In")}
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
