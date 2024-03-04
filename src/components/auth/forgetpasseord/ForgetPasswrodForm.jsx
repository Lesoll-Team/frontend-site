import {
  forgetPassEmail,
  resetForgetPassState,
} from "@/redux-store/features/user/forgetPassSlice";
import { Waveform } from "@uiball/loaders";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ForgetPasswrodForm = () => {
  const form = useForm({
    defaultValues: {
      resetMethod: "email",
    },
  });
  const { register, reset, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;

  const dispatch = useDispatch();
  const status = useSelector((state) => state.forgetPassword.status);
  const error = useSelector((state) => state.forgetPassword.error);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [emailNotFound, setEmailNotFound] = useState(false);

  const onSubmit = (data) => {
    dispatch(forgetPassEmail(data.email));
  };
  const handleEmailNotFound = () => {
    setEmailNotFound(true);
    dispatch(resetForgetPassState());
    setTimeout(() => {
      setEmailNotFound(false);
    }, 3500);
  };
  useEffect(() => {
    if (error?.code == 401) {
      handleEmailNotFound();
    }
  }, [error]);
  useEffect(() => {
    if (status === "succeeded") {
      reset();
    }
  }, [status]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-6"
    >
      <h1 className="text-3xl text-start">
        {language ? "إعادة تعيين كلمة السر" : "Reset password"}
      </h1>
      <div className="flex rounded-lg overflow-hidden border">
        <button
          type="button"
          onClick={() => {
            setValue("resetMethod", "phone");
            // setresetMethod("phone");
          }}
          className={`w-full text-darkGray text-center py-2 ${
            watch("resetMethod") === "phone" && "bg-lightGreen text-white"
          }`}
        >
          {language ? "الهاتف" : "Phone"}
        </button>
        <button
          type="button"
          onClick={() => {
            setValue("resetMethod", "email");
            // setresetMethod("email");
          }}
          className={`w-full text-darkGray text-center py-2 ${
            watch("resetMethod") === "email" && "bg-lightGreen text-white"
          }`}
        >
          {language ? "البريد" : "Email"}
        </button>
      </div>
      {watch("resetMethod") === "phone" ? (
        <div className="space-y-2">
          {" "}
          <label htmlFor="email">
            {language ? "رقم الهاتف" : "Phone number"}
          </label>
          <input
            name="phoneNumber"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: language
                  ? "ادخل  رقم الهاتف"
                  : " Please enter your phone number",
              },
            })}
            type="text"
            className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
              (errors.phoneNumber || emailNotFound) &&
              "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
          {emailNotFound && (
            <p className="text-red-500">
              {language
                ? "بريد إلكترونى غير صحيح جرب مرة اخرى"
                : "Email doesn't exist try again "}
            </p>
          )}
        </div>
      ) : (
        <div className="space-y-2">
          {" "}
          <label htmlFor="email">
            {language ? "البريدالإلكترونى" : "Email"}
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
              (errors.email || emailNotFound) &&
              "border-red-500 focus:border-red-500"
            }`}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          {emailNotFound && (
            <p className="text-red-500">
              {language
                ? "بريد إلكترونى غير صحيح جرب مرة اخرى"
                : "Email doesn't exist try again "}
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        className="w-full p-3 h-12  flex items-center justify-center rounded-md text-white bg-lightGreen text-xl"
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
          <span>{language ? " إرسال" : "Send"}</span>
        )}

        {/* text */}
      </button>
      <div className="text-center flex items-center justify-center gap-1 font-inter">
        <p>{language ? "رجوع الى" : "Back to"}</p>
        <Link href={"/signin"} className="text-darkGreen">
          {language ? "تسجيل الدخول" : "Sign In"}
        </Link>
      </div>
    </form>
  );
};
export default ForgetPasswrodForm;
