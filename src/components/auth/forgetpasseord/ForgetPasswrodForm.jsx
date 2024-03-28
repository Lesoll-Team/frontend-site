import { Ring } from "@uiball/loaders";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { forgetPass } from "./api/forgetPassApi";
import Image from "next/image";

const ForgetPasswrodForm = () => {
  const form = useForm();
  const { register, reset, handleSubmit, formState, setValue, watch } = form;
  const { errors } = formState;

  const language = useSelector((state) => state.GlobalState.languageIs);

  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [emailNotFound, setEmailNotFound] = useState(false);
  const onSubmit = async (data) => {
    await forgetPass({
      data,
      lang: language ? "AR" : "EN",
      setFormStatus,
      setServerError,
    });
  };
  const handleEmailNotFound = () => {
    setEmailNotFound(true);
    setServerError(null);
    setTimeout(() => {
      setEmailNotFound(false);
    }, 3500);
  };
  const handleSended = () => {
    setTimeout(() => {
      setFormStatus("idle");
    }, 3500);
  };
  useEffect(() => {
    if (serverError?.code == 401) {
      handleEmailNotFound();
    }
  }, [serverError]);
  useEffect(() => {
    if (formStatus === "success") {
      reset();
      handleSended();
    }
  }, [formStatus]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-6"
    >
      <h1>{language ? "إعادة تعيين كلمة السر" : "Reset password"}</h1>
      <div className="space-y-2">
        {" "}
        <label htmlFor="email">{language ? "البريدالإلكترونى" : "Email"}</label>
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
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        {emailNotFound && (
          <p className="text-red-500">
            {language
              ? "بريد إلكترونى غير موجود جرب مرة اخرى"
              : "Email doesn't exist try again "}
          </p>
        )}
        {formStatus === "success" && (
          <div className="text-green-500 w-full bg-white py-2 flex justify-center items-center gap-2 fade-in">
            <Image
              width={24}
              height={24}
              src={"/done-icon.png"}
              alt="done check icon"
            />
            <p>
              {language
                ? " تم الارسال بنجاح تحقق من بريدك"
                : "Sended successfully check your email"}
            </p>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-3 h-12  flex items-center justify-center rounded-md text-white bg-lightGreen text-xl"
      >
        {formStatus === "loading" ? (
          <>
            {" "}
            <div className="md:hidden">
              <Ring size={20} color="#fff" />
            </div>
            <div className="md:block hidden">
              <Ring size={20} color="#fff" />
            </div>
          </>
        ) : (
          <span>{language ? " إرسال" : "Send"}</span>
        )}

        {/* text */}
      </button>
      <div className="text-center flex items-center justify-center gap-1 font-inter">
        <p>{language ? "رجوع الى" : "Back to"}</p>
        <Link href={"/signin"} className="text-darkGreen underline">
          {language ? "تسجيل الدخول" : "Sign In"}
        </Link>
      </div>
    </form>
  );
};
export default ForgetPasswrodForm;
