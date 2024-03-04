import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Button from "@/Shared/ui/Button";
import Error from "@/Shared/ui/Error";
const AddUserForm = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm();
  const { register, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
      <h3 className="text-xl font-bold text-lightGreen">
        {language ? "إضافة مستخدم" : "Add user"}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="space-y-2">
          <label className="text-xl text-outLine">
            {language ? "الاسم بالكامل" : "Full Name"}
          </label>
          <input
            type="text"
            {...register("fullname", {
              required: {
                value: true,
                message: language ? "الإسم مطلوب" : "Full Name is required",
              },
            })}
            className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
              errors?.fullname && "focus:border-red-500 border-red-500"
            }`}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-outLine">
            {language ? "البريد الإبكترونى" : "Email"}
          </label>
          <input
            type="text"
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
            className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
              errors?.email && "focus:border-red-500 border-red-500"
            }`}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>
        <div className="space-y-2">
          <label className="text-xl text-outLine">
            {language ? "رقم الهاتف" : "Phone Number"}
          </label>
          <div dir="ltr" className="space-y-2">
            <PhoneInput
              inputStyle={{
                paddingTop: "10px",
                paddingBottom: "10px",
                height: "40px",
                fontSize: "16px",
                color: "#1b6e6d",
                borderRadius: "8px",
                // border: "1px",
                // borderColor: errors.phone && "red",
              }}
              buttonStyle={{
                height: "40px",

                backgroundColor: "white",
              }}
              containerStyle={{
                // border: "1px",

                borderColor: errors.phone && "red",
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
              // value={phone}
              onChange={(e, info) => {
                setValue("phone", e);
                setValue("code", info.dialCode);
                // if (e) {
                //   setFormError({ ...formError, phoneError: false });
                // }
              }}
            />
            {errors.phone && (
              <p
                dir={language ? "rtl" : "ltr"}
                className="text-red-500 text-sm"
              >
                {errors.phone.message}
              </p>
            )}
            <input
              id="phone"
              name="phone"
              {...register("phone", {
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
          <label className="text-xl text-outLine">
            {language ? "كلمة السر" : "Password"}
          </label>
          <div className="relative flex">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: {
                  value: true,
                  message: language
                    ? "يرجى إدخال كلمة السر"
                    : "please enter your password",
                },
              })}
              className={`p-2 placeholder:text-outLine rounded-md border w-full focus:outline-none focus:border-lightGreen ${
                errors?.password && "focus:border-red-500 border-red-500"
              }`}
            />
            <button
              className="-mx-10 focus:outline-none"
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
          {errors.password && <Error>{errors.password.message}</Error>}
        </div>
      </div>
      <div className="flex justify-end">
        <Button className={"max-w-[200px]"}>{language ? "حفظ" : "Save"}</Button>
      </div>
    </form>
  );
};
export default AddUserForm;
