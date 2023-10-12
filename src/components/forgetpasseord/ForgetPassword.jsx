import React, { useEffect, useState } from "react";
import lock from "../../../public/lock.svg";
import Button from "../../Shared/Button";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { sendEmailResetPassword } from "@/utils/userAPI";
import { AiFillCheckCircle } from "react-icons/ai";

const ForgetPassword = () => {
  const router = useRouter();
  const isLoading = useSelector((state) => state.Auth.isLoding);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [loading, setLoading] = useState(false);
  const [resetRes, setResetRes] = useState(null);
  const [error, setError] = useState(null);
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
    onSubmit: async (values) => {
      try {
        const data = await sendEmailResetPassword(values);

        if (data.code === 200) {
          setResetRes(data);
          // setError(null); // Reset the error if successful
        }
      } catch (error) {
        if (error.code === 401) {
          // setResetRes(data);
          setError(
            language
              ? "البريد الإلكتروني غير موجود في قاعدة البيانات"
              : "Email not found in the database"
          );
        } else {
          setError(
            language
              ? "حدث خطأ أثناء إرسال البريد الإلكتروني"
              : "An error occurred while sending the email"
          );
        }
        // console.error("Error sending email for password reset:", error);
      }
    },
  });
  // console.log(error);
  const handleInputChange = (event) => {
    formik.handleChange(event); // Handle the input change as usual
    setError(null); // Clear the error
  };
  return (
    <>
      {!loading ? (
        <div className=" p-6 bg-white border  shadow-lg  rounded-lg   mx-auto w-80 md:w-96  ">
          {resetRes ? ( // Check if the reset was successful
            // Display success message and hidden form
            <center className="">
              <AiFillCheckCircle className="text-green-500 text-8xl  animate-appearance-in" />

              <div className="text-center font-bold text-green-500">
                {language
                  ? `تم إرسال رابط إعادة تعيين كلمة المرور بنجاح`
                  : `Password reset link sent successfully`}
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: resetRes.formHtml }} />Render the HTML form */}
            </center>
          ) : (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col  justify-center "
            >
              <Image
                alt=""
                src={lock}
                className="md:hidden w-40 relative mx-auto -mt-20"
              />
              <p className="md:text-4xl text-3xl text-center mb-5 text-lightGreen font-black">
                {language ? ` تغير كلمة المرور` : ` Reset password`}
              </p>
              {/* Form inputs */}
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder={language ? `البريد الإلكترونى` : `Email`}
                  value={formik.values.email}
                  onChange={handleInputChange}
                  onBlur={formik.handleBlur}
                  className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 ${
                    formik.errors.email && formik.touched.email
                      ? "border-red-600 focus:border-red-600"
                      : ""
                  }`}
                />

                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-600">
                    {language
                      ? formik.touched.email
                        ? "يجب أدخال البريد الإلكترونى"
                        : null
                      : formik.touched.email
                      ? "You must enter the email"
                      : null}
                  </p>
                ) : (
                  ""
                )}
              </div>
              {error && (
                <div className="text-red-600 text-center mt-2">{error}</div>
              )}
              <Button
                type="submit"
                className=""
                text={language ? `إرسال الى البريد` : `Send`}
              />
            </form>
          )}

          <div className="flex justify-center mt-4">
            <Link
              title={language ? `تسجيل الدخول` : `sign in`}
              href={"/signin"}
              className=""
            >
              <p className="text-lightGreen font-bold">
                {language ? `تسجيل الدخول` : `sign in`}
              </p>
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

export default ForgetPassword;
