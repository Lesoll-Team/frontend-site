import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Ring } from "@uiball/loaders";
import GoogleSignInBtn from "./GoogleSignInBtn";
import Button from "@/Shared/ui/Button";
import { userLogin } from "./api/loginApi";
import TimeOut from "@/Shared/ui/TimeOut";
import { useUser } from "@/Shared/UserContext";
const SignInForm = () => {
  const { setUserData } = useUser();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const router = useRouter();
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [token, setToken] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);

  const onSubmit = async (data) => {
    await userLogin({ data, setFormStatus, setServerError, setToken });
  };

  useEffect(() => {
    if (formStatus === "success" && token) {
      setUserData();
      router.replace("/");
    }
  }, [formStatus]);

  useEffect(() => {
    if (serverError?.message.toLowerCase().includes("password")) {
      setWrongPassword(true);
      setServerError(null);
      setTimeout(function () {
        setWrongPassword(false);
      }, 3500);
    }
    if (serverError?.message.toLowerCase().includes("email")) {
      setEmailNotFound(true);
      setServerError(null);
      setTimeout(function () {
        setEmailNotFound(false);
      }, 3500);
    }
    if (serverError?.code == 429) {
      setTimeout(function () {
        setServerError(null);
      }, 60000);
    }
  }, [serverError]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-6"
    >
      <h1 className="text-2xl md:text-4xl">
        {" "}
        {language ? "تسجيل الدخول" : "Sign In"}
      </h1>
      {/* ---------------------- email ------------------------- */}

      <div className="space-y-2">
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
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        {emailNotFound && (
          <p className="text-red-500 text-sm">
            {language
              ? "بريد إلكترونى غير صحيح جرب مرة اخرى"
              : "Email doesn't exist try again "}
          </p>
        )}
      </div>
      {/* --------------------- Password ------------------------- */}

      <div className="">
        {" "}
        <label htmlFor="password">{language ? "كلمة السر" : "Password"}</label>
        <div className="flex items-center mt-1">
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
              (errors.password || wrongPassword) &&
              "border-red-500 focus:border-red-500"
            }`}
          />
          <button
            aria-label={showPassword ? "Hide password" : "Show password"}
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
        <div className="flex justify-end mt-1">
          {" "}
          <Link href={"/forgetpassword"} className="text-sm">
            {language ? "هل نسيت كلمة السر؟" : "Forget Password?"}
          </Link>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        {wrongPassword && (
          <p className="text-red-500 text-sm">
            {language ? "كلمة السر غير صحيحة" : "Wrong Password"}
          </p>
        )}
      </div>
      {serverError?.code === 429 && <TimeOut seconds={60} />}
      {/* ---------------------- submit btn ------------------------- */}
      <Button
        type="submit"
        disabled={serverError?.code === 429 || formStatus === "loading"}
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
          <span>{language ? "تسجيل الدخول" : "Sign In"}</span>
        )}
      </Button>
      <div className="flex items-center gap-3">
        <div className="h-[1px] w-full bg-gray-500"></div>
        <p className="text-gray-700">{language ? "او" : "or"}</p>
        <div className="h-[1px] w-full bg-gray-500"></div>
      </div>
      <GoogleSignInBtn />
      <div className="flex items-center justify-center gap-1">
        <p className="text-lightGray">
          {language ? "لا تمتلك حساب؟" : "Don't have an account?"}
        </p>
        <Link className="text-lightGreen" href={"/signup"}>
          {language ? "سجل الأن" : "Register Now"}
        </Link>
      </div>
    </form>
  );
};
export default SignInForm;
