import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useSelector } from "react-redux";
import GoogleSignInBtn from "@/components/auth/login/GoogleSignInBtn";
import { userSignUp } from "../../api/signUpApi";
import { Ring } from "@uiball/loaders";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Button from "@/Shared/ui/Button";
import { useUser } from "@/Shared/UserContext";
// import Cookies from "js-cookie";

const SignUpForm = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState("idle");
  const { setUserData } = useUser();
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
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showPassword, setShowPassword] = useState(false);

  const setUserType = (type) => {
    setValue("typeOfUser", type);
    clearErrors("typeOfUser");
  };
  const phoneWithoutCode = (phone, code) => {
    return phone.startsWith(code) ? phone.substring(code.length) : phone;
  };
  const onSubmit = async (data) => {
    const dataToSend = {
      fullname: data.fullname,
      email: data.email,
      code: data.code,
      phone: phoneWithoutCode(data.phone, data.code),
      password: data.password,
      typeOfUser: data.typeOfUser,
    };
    userSignUp({
      setFormStatus,
      setToken,
      setServerError,
      data: dataToSend,
    });
  };

  useEffect(() => {
    if (formStatus === "success" && token) {
      setUserData();
      reset();
      router.push(`/verify-otp/${token}`);
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
  }, [serverError]);

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-6 py-5 pb-14 md:my-0"
    >
      <div className="space-y-4">
        <h1 className="text-2xl md:text-4xl">
          {language ? "إنشاء حساب" : "Sign up"}
        </h1>
        <div className="flex rounded-lg overflow-hidden border">
          <button
            type="button"
            onClick={() => setUserType("individual")}
            className={`w-full text-darkGray text-center py-2 ${watch("typeOfUser") === "individual" && "bg-lightGreen text-white"}`}
          >
            {language ? "سجل كفرد" : "As an individual"}
          </button>
          <button
            type="button"
            onClick={() => setValue("typeOfUser", "")}
            className={`w-full text-darkGray text-center py-2 ${watch("typeOfUser") !== "individual" && "bg-lightGreen text-white"}`}
          >
            {language ? "سجل كشركة" : "As a company"}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <input
          {...register("fullname", {
            required: language ? "ادخل اسمك" : "Please enter your name",
          })}
          placeholder={language ? "الإسم" : "Full Name"}
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
            required: language
              ? "ادخل البريد الإلكترونى"
              : "Please enter your email",
            pattern: {
              value:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
              message: language
                ? "يرجى إدخال بريد إلكتروني صحيح"
                : "Please enter a valid email",
            },
          })}
          placeholder={language ? "البريد الالكتروني" : "Email"}
          type="text"
          className={`w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${(errors.email || emailUserError) && "border-red-500 focus:border-red-500"}`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        {emailUserError && (
          <p className="text-red-500 text-sm">
            {language
              ? "هذا البريد مستخدم بالفعل"
              : "This email already registered"}
          </p>
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
            placeholder={language ? "رقم الهاتف" : "Phone Number"}
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
              required: language
                ? "ادخل رقم الهاتف"
                : "Please enter your Phone number",
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
              required: language
                ? "يرجى إدخال كلمة السر"
                : "Please enter your password",
            })}
            placeholder={language ? " كلمة السر" : "Password"}
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
          <label htmlFor="">
            {language ? " عرفنا بيك" : "choose your type"}
          </label>
          <div className="flex items-center">
            <input
              {...register("typeOfUser", {
                required: language
                  ? "يرجى اختيار نوع المستخدم"
                  : "Please choose your type",
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
                <span>{language ? "مطور عقارى" : "Developer"}</span>
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
                <span>{language ? "سمسار" : "Broker"}</span>
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
            required: language
              ? "يجب الموافقة على الشروط والأحكام"
              : "You must agree to the terms and conditions",
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
          {language ? "أوافق على جميع" : "I agree to all terms and conditions"}{" "}
          <Link
            href={"/termsofservice"}
            className={`text-lightGreen font-bold ${errors.terms && "text-red-500"}`}
          >
            {language ? "الشروط والأحكام" : "terms and conditions"}
          </Link>
        </label>
      </div>
      <Button
        disabled={formStatus === "loading"}
        type="submit"
        className="w-full p-3 h-12 flex items-center justify-center rounded-md text-white bg-lightGreen text-xl"
      >
        {formStatus === "loading" ? (
          <Ring size={20} color="#fff" />
        ) : (
          <span>{language ? "إنشاء حساب" : "Sign up"}</span>
        )}
      </Button>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-full bg-gray-500"></div>
          <p className="text-gray-700">{language ? "او" : "or"}</p>
          <div className="h-[1px] w-full bg-gray-500"></div>
        </div>
        <GoogleSignInBtn />
      </div>
      <div className="flex items-center justify-center gap-1">
        <p className="text-lightGray">
          {language ? "لديك حساب بالفعل؟" : "Already have an account?"}
        </p>
        <Link href={"/signin"} className="text-lightGreen">
          {language ? "سجل الدخول" : "Sign in"}
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
