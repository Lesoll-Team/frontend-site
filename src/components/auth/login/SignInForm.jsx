import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { loginUserAsync } from "@/redux-store/features/authSlice";
import { useRouter } from "next/router";
import { Waveform } from "@uiball/loaders";
import { FcGoogle } from "react-icons/fc";
import { signWithGoogle } from "@/utils/userAPI";
import GoogleSignInBtn from "./GoogleSignInBtn";
import { resetLogin, userLogin } from "@/redux-store/features/auth/loginSlice";
import Button from "@/Shared/ui/Button";
const SignInForm = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const router = useRouter();

  // redux states
  const language = useSelector((state) => state.GlobalState.languageIs);
  const status = useSelector((state) => state.login.status);
  const error = useSelector((state) => state.login.error);
  const [showPassword, setShowPassword] = useState(false);
  const [WrongPassword, setWrongPasswird] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);

  // functions
  const onSubmit = async (data) => {
    dispatch(userLogin(data));
  };
  useEffect(() => {
    if (status === "succeeded") {
      router.push("/");
      dispatch(resetLogin());
    }
  }, [status]);

  useEffect(() => {
    if (error?.message.toLowerCase().includes("password")) {
      setWrongPasswird(true);
      dispatch(resetLogin());
      setTimeout(function () {
        setWrongPasswird(false);
      }, 3500);
    }
    if (error?.message.toLowerCase().includes("email")) {
      setEmailNotFound(true);
      dispatch(resetLogin());
      setTimeout(function () {
        setEmailNotFound(false);
      }, 3500);
    }
  }, [error]);
  console.log(error);
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

      {/* ---------------------- Password ------------------------- */}
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
              (errors.password || WrongPassword) &&
              "border-red-500 focus:border-red-500"
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
        <div className="flex justify-end mt-1">
          {" "}
          <Link href={"/forgetpassword"} className="text-sm">
            {language ? "هل نسيت كلمة السر؟" : "Forget Password?"}
          </Link>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        {WrongPassword && (
          <p className="text-red-500 text-sm">
            {language ? "كلمة السر غير صحيحة" : "Wrong Password"}
          </p>
        )}
      </div>

      {/* ---------------------- submit btn ------------------------- */}
      <Button
        type="submit"
        // className="w-full p-3 h-12 md:h-14 flex items-center justify-center rounded-md text-white bg-lightGreen text-xl"
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
      </Button>
      <div className="flex items-center gap-3">
        <div className="h-[1px] w-full bg-gray-500"></div>
        <p className="text-gray-700">{language ? "او" : "or"}</p>
        <div className="h-[1px] w-full bg-gray-500"></div>
      </div>
      {/* --------------- google sign in */}
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