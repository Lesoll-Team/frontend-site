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
    },
  });
  const { errors } = formState;
  const dispatch = useDispatch();
  const router = useRouter();

  const language = useSelector((state) => state.GlobalState.languageIs);
  const status = useSelector((state) => state.Auth.status);
  const error = useSelector((state) => state.Auth.registrationError);

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit()}
      className=" px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-6"
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
          className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md }`}
        />
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
          className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md`}
        />
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
            }}
            buttonStyle={{
              height: "47px",

              backgroundColor: "white",
            }}
            containerStyle={{
              // border: "1px",
              zIndex: "10000000000000",
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
          {errors.phoneNumber && <p className="text-red-500">error</p>}
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
              // pattern: {
              //   value:
              //     /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
              //   message: language
              //     ? "يرجى إدخال بريد إلكتروني صحيح"
              //     : "Please enter a valid email",
              // },
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
      </div>
      <div className="space-y-2">
        <label htmlFor="typeOfUser">
          {language ? " عرفنا بيك" : "User type"}
        </label>
        <select
          name="typeOfUser"
          id="typeOfUser"
          {...register("typeOfUser", {
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
          className={` w-full h-12 px-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
            language ? "select-ar" : "select-en"
          }`}
        >
          <option value="" disabled selected>
            {language ? "اختر نوعك" : "choose your type"}
          </option>
          <option value="individual">{language ? "فرد" : "individual"}</option>
          <option value="broker">{language ? "وسيط عقاري" : "Broker"}</option>
          <option value="company">
            {language ? "مطور عقاري" : "Developer"}
          </option>
        </select>
      </div>
      <button type="submit">test</button>
    </form>
  );
};
export default RegisterForm;
