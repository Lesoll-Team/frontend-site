import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Ring } from "@uiball/loaders";
import Button from "@/Shared/ui/Button";
import { resetPass } from "./api/resetPassApi";
import Cookies from "js-cookie";
import { useTranslation } from "next-i18next";
const ResetPassForm = () => {
  const { t } = useTranslation("common");
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const { errors } = formState;
  const router = useRouter();
  const token = router.query?.token;
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    await resetPass({ data, setFormStatus, setServerError, token });
  };

  useEffect(() => {
    if (formStatus === "success") {
      Cookies.set("userToken", token);
      router.replace("/");
      reset();
    }
  }, [formStatus]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" px-10 md:px-0 w-full md:w-[60%] max-w-[500px] space-y-6"
    >
      <h1> {t("Reset_Password_Title")}</h1>

      <div className="space-y-2">
        {" "}
        <label htmlFor="email">{t("New_Password")}</label>
        <div className="flex items-center mt-1">
          <input
            {...register("password", {
              required: {
                value: true,
                message: t("Placeholder_Enter_Password"),
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
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="space-y-2">
        {" "}
        <label htmlFor="ConfirmPassword">{t("Confirm_Password")}</label>
        <div className="flex items-center mt-1">
          <input
            name="password"
            id="password"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: t("Placeholder_Enter_Password"),
              },
              validate: {
                samePass: (value) => {
                  return value === watch("password") || t("Error_Password");
                },
              },
            })}
            type={showPassword ? "text" : "password"}
            className={` w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${
              errors.confirmPassword && "border-red-500 focus:border-red-500"
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
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

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
          <span>{t("Confirm")}</span>
        )}
      </Button>
    </form>
  );
};
export default ResetPassForm;
