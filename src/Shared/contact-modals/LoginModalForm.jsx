import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Ring } from "@uiball/loaders";
import Button from "@/Shared/ui/Button";
import { userLogin } from "@/components/auth/login/api/loginApi";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";
const LoginModalForm = ({ setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [token, setToken] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [WrongPassword, setWrongPasswird] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);

  // functions
  const onSubmit = async (data) => {
    await userLogin({ data, setFormStatus, setServerError, setToken });
  };

  useEffect(() => {
    if (formStatus === "success") {
      localStorage.setItem("userToken", JSON.stringify(token));
      dispatch(getUserData());
      setIsOpen(false);
    }
  }, [formStatus]);

  useEffect(() => {
    if (serverError?.message.toLowerCase().includes("password")) {
      setWrongPasswird(true);
      setServerError(null);
      setTimeout(function () {
        setWrongPasswird(false);
      }, 3500);
    }
    if (serverError?.message.toLowerCase().includes("email")) {
      setEmailNotFound(true);
      setServerError(null);
      setTimeout(function () {
        setEmailNotFound(false);
      }, 3500);
    }
  }, [serverError]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-3 md:px-0  w-full  mx-auto space-y-6 pb-4   md:my-0 overflow-auto"
    >
      {/* ---------------------- email ------------------------- */}
      <div className="space-y-2">
        {" "}
        <label htmlFor="email">{language ? "البريدالإلكترونى" : "Email"}</label>
        <input
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
      <Button type="submit">
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

        {/* text */}
      </Button>
    </form>
  );
};
export default LoginModalForm;