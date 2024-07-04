import { sendResetNewPassword } from "@/utils/userAPI";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetPassword() {
  const { register, formState, handleSubmit, watch } = useForm();
  const router = useRouter();
  const { t } = useTranslation("common");
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    const token = router.query.token;

    const res = await sendResetNewPassword({ token, password: data.password });
    if (res.code == 200) {
      router.push("/signin");
    }
  };
  return (
    <div className=" flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" h-2/3 md:w-8/12 w-full flex flex-col space-y-5 bg-white"
      >
        <h1 className="font-semibold text-black">
          {t("Reset_Password_Title")}
        </h1>
        <div className="space-y-3">
          <p className="font-inter">{t("New_Password")}</p>
          <div className="flex items-center">
            <input
              {...register("password", {
                required: t("Placeholder_Enter_Password"),
              })}
              placeholder={t("Password")}
              type={showPassword ? "text" : "password"}
              className={`w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${errors.password && "border-red-500 focus:border-red-500"}`}
            />
            <button
              className="-mx-10"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEye className="text-lightGray text-xl" />
              ) : (
                <FaEyeSlash className="text-lightGray text-xl" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <p className="font-inter">{t("Confirm_Password")}</p>

          <div className="flex items-center">
            <input
              {...register("confirmPassword", {
                required: t("Placeholder_Enter_Password"),
                validate: {
                  passMatch: (value) => {
                    return value === watch("password") || t("Error_Password");
                  },
                },
              })}
              placeholder={t("Confirm_Password")}
              type={showPassword ? "text" : "password"}
              className={`w-full h-12 p-3 border-2 focus:outline-none focus:border-darkGreen rounded-md ${errors.confirmPassword && "border-red-500 focus:border-red-500"}`}
            />
            <button
              className="-mx-10"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaEye className="text-lightGray text-xl" />
              ) : (
                <FaEyeSlash className="text-lightGray text-xl" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-md bg-lightGreen text-white"
        >
          {t("Confirm")}
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
