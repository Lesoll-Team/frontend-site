import { Waveform } from "@uiball/loaders";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";

const RegisterForm = () => {
  const { register, handleSubmit, formState, reset, setValue } = useForm({
    defaultValues: {
      code: "+20",
      typeOfUser: "",
    },
  });
  const { errors } = formState;
  const dispatch = useDispatch();
  const router = useRouter();

  const language = useSelector((state) => state.GlobalState.languageIs);
  const status = useSelector((state) => state.Auth.status);
  const error = useSelector((state) => state.Auth.registrationError);

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data) => {
    console.log(data);
    dispatch(signupUserAsync(data));
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className=" px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-4  md:my-0 my-10"
    >
      <h1 className="text-4xl"> {language ? "تسجيل الدخول" : "Sign In"}</h1>
      <div className="space-y-2">
        <label htmlFor="fullname">{language ? "الإسم" : "Full Name"}</label>
        <input
          name="fullname"
          id="fullname"
          {...register("fullname", {
            required: {
              value: true,
              message: language ? "ادخل  اسمك" : " Please enter your name",
            },
          })}
          type="text"
          className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
            errors.fullname && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.fullname && (
          <p className="text-red-500">{errors.fullname.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="email">
          {language ? "البريد الالكتروني" : "Email"}
        </label>
        <input
          name="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: language
                ? "ادخل البريد الإلكترونى"
                : " Please enter your email",
            },
            pattern: {
              value:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
              message: language
                ? "يرجى إدخال بريد إلكتروني صحيح"
                : "Please enter a valid email",
            },
          })}
          type="text"
          className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
            errors.email && "border-red-500 focus:border-red-500"
          }`}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="">{language ? "رقم الهاتف" : "Phone Number"}</label>
        <div dir="ltr">
          <PhoneInput
            inputStyle={{
              paddingTop: "10px",
              paddingBottom: "10px",
              height: "48px",
              fontSize: "16px",
              color: "#1b6e6d",
              borderRadius: "8px",
              // border: "1px",
              borderColor: errors.phoneNumber && "red",
            }}
            buttonStyle={{
              height: "47px",

              backgroundColor: "white",
            }}
            containerStyle={{
              // border: "1px",
              zIndex: "",
              borderColor: errors.phoneNumber && "red",
            }}
            dropdownStyle={{
              height: "150px",
            }}
            // disableCountryCode={true}
            autocompleteSearch={true}
            countryCodeEditable={false}
            placeholder={language ? "رقم الهاتف" : "Phone Number"}
            className=" z-30"
            enableSearch={true}
            country={"eg"}
            excludeCountries={["IL"]}
            // value={phoneNumber}
            onChange={(e, info) => {
              setValue("phoneNumber", e);
              setValue("code", info.dialCode);
              // if (e) {
              //   setFormError({ ...formError, phoneNumberError: false });
              // }
            }}
          />
          {errors.phoneNumber && (
            <p dir={language ? "rtl" : "ltr"} className="text-red-500">
              {errors.phoneNumber.message}
            </p>
          )}
          <input
            id="phoneNumber"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: language
                  ? "ادخل رقم الهاتف"
                  : " Please enter your Phone number",
              },
            })}
            className="hidden"
            type="text"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="email">{language ? " كلمة السر" : "passwrod"}</label>
        <div className="flex items-center  ">
          <input
            name="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: language
                  ? "يرجى إدخال كلمة السر"
                  : "please enter your password",
              },
            })}
            type={showPassword ? "text" : "password"}
            className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
              errors.password && "border-red-500 focus:border-red-500"
            }`}
          />
          <button
            className="-mx-10"
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaEye className=" text-lightGray text-xl" />
            ) : (
              <FaEyeSlash className=" text-lightGray text-xl" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="typeOfUser">
          {language ? " عرفنا بيك" : "User type"}
        </label>
        <select
          {...register("typeOfUser", {
            required: language ? "إختر نوعك" : "Choose who you are",
          })}
          className={` w-full h-12 px-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
            language ? "select-ar" : "select-en"
          } ${errors.typeOfUser && "border-red-500  focus:border-red-500 "}`}
        >
          <option value=""></option>
          <option value="individual">{language ? "فرد" : "individual"}</option>
          <option value="broker">{language ? "وسيط عقاري" : "Broker"}</option>
          <option value="company">
            {language ? "مطور عقاري" : "Developer"}
          </option>
        </select>
        {errors.typeOfUser && (
          <p className="text-red-500">{errors.typeOfUser.message}</p>
        )}
      </div>
      <div className="space-y-2 flex items-center gap-1">
        <input
          {...register("terms", {
            required: {
              value: true,
              message: language
                ? "يجب الموافقة على الشروط والأحكام"
                : "You must agree to the terms and conditions",
            },
          })}
          type="checkbox"
          className={`mt-2 ${errors.terms && "outline-red-500"}`}
          id="terms" // Use "terms" as the id
          name="terms"
        />
        <label
          htmlFor="terms" // Use "terms" as the htmlFor value
          className={`text-sm  ${errors.terms && "text-red-500"} `}
        >
          {language ? "أوافق على جميع" : "I agree to all terms and conditions"}{" "}
          <Link
            href={"/termsofservice"}
            className={`text-lightGreen font-bold ${
              errors.terms && "text-red-500"
            } `}
          >
            {language ? "الشروط والأحكام" : "terms and conditions"}
          </Link>
        </label>
        {/* {errors.terms && "dadsada"} */}
      </div>

      <button
        type="submit"
        className="w-full p-3 h-12 md:h-14 flex items-center justify-center rounded-md text-white bg-lightGreen text-xl"
      >
        {status === "loading" ? (
          <>
            {" "}
            <div className="md:hidden">
              <Waveform size={20} color="#fff" />
            </div>
            <div className="md:block hidden">
              <Waveform size={20} color="#fff" />
            </div>
          </>
        ) : (
          <span>{language ? "سجل الدخول" : "Sign In"}</span>
        )}

        {/* text */}
      </button>
    </form>
  );
};
export default RegisterForm;
