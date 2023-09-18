import React, { useEffect, useState } from "react";
import lock from "../../../public/lock.svg";
import Button from "../../Shared/Button";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ResetPassword = () => {

  const router = useRouter();
  const isLoading = useSelector((state) => state.Auth.isLoding);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(isLoading);
    if (isLoading) {
      router.push("/"); // This will navigate to the home page after login is complete
    }
  }, [isLoading, router]);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
    
    {!loading ? (
    <div className=" p-6 bg-white border-2 shadow-lg  md:border-none  mx-auto w-80 md:w-96  ">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col border-5 justify-center "
      >
        <Image
          alt=""
          src={lock}
          className="md:hidden w-40 relative mx-auto -mt-20"
        />
        <h1 className="md:text-4xl text-3xl text-center mb-5 text-lightGreen font-black">
         {language?` تغير كلمة المرور`:` Reset password`}
        </h1>
        {/* Form inputs */}
        <div>
          <input
            name="email"
            type="email"
            placeholder={language?`البريد الإلكترونى`:`Email`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 ${
              formik.errors.email && formik.touched.email
                ? "border-red-600 focus:border-red-600"
                : ""
            }`}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-red-600">{language?formik.touched.email? "يجب أدخال البريد الإلكترونى":null: formik.touched.email? "You must enter the email":null}</p>
          ) : (
            ""
          )}
        </div>
        <Button type="submit" className="" text={language?`أرسال`:`Send`} />
      </form>
      <div className="flex justify-center mt-4">
        <Link href={"/signin"} className="">
          <p className="text-lightGreen font-bold">{language?`   تسجيل الدخول`:`   sign in`}</p>
        </Link>
      </div>
    </div>
    ) : (
      <div className="w-full flex justify-center items-center h-screen ">
          <b> You Have Access...</b>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
