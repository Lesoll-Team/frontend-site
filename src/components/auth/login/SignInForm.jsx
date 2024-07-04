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
import { useTranslation } from "next-i18next";
const SignInForm = () => {
  const { t } = useTranslation("common");

  const { setUserData } = useUser();
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
      <h1 className="text-2xl md:text-4xl">{t("Sign_In")}</h1>

      <div className="space-y-2">
        {" "}
        <label htmlFor="email">{t("Email")}</label>
        <input
          name="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: t("Placeholder_Enter_Email"),
            },
            pattern: {
              value:
                /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
              message: t("Enter_Valid_Email"),
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
          <p className="text-red-500 text-sm">{t("DoesNoT_Email")}</p>
        )}
      </div>
      {/* --------------------- Password ------------------------- */}

      <div className="">
        <label htmlFor="password">{t("Password")}</label>
        <div className="flex items-center mt-1">
          <input
            name="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: t("Placeholder_Enter_Password"),
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
            {t("Forget_Password")}
          </Link>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
        {wrongPassword && (
          <p className="text-red-500 text-sm">{t("Enter_Valid_Password")}</p>
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
            <div className="md:hidden">
              <Ring size={20} color="#fff" />
            </div>
            <div className="md:block hidden">
              <Ring size={20} color="#fff" />
            </div>
          </>
        ) : (
          <span>{t("Sign_In")}</span>
        )}
      </Button>
      <div className="flex items-center gap-3">
        <div className="h-[1px] w-full bg-gray-500"></div>
        <p className="text-gray-700">{t("Or")}</p>
        <div className="h-[1px] w-full bg-gray-500"></div>
      </div>
      <GoogleSignInBtn />
      <div className="flex items-center justify-center gap-1">
        <p className="text-lightGray">{t("Don_T_Have_Account")}</p>
        <Link className="text-lightGreen" href={"/signup"}>
          {t("Register_Now")}
        </Link>
      </div>
    </form>
  );
};
export default SignInForm;
