import React, { useState } from "react";
import Button from "../Button";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


const SignInForm = (props) => {
  // Formik Logics
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    // validation schema
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Adress")
        .required("Email is required"),

      password: Yup.string().required("Required"),
    }),

    //submit action
    onSubmit: async (values) => {
      //   values.type = userType;'
      const data = {
        email: values.email,
        password: values.password,
      };
      await axios
        .post("http://www.backendsite.lesoll-demo.site/api/auth/login", data)
        .then((res) => {
          // console.log(res.data);
          localStorage.setItem("token", res.data.checkEmail.token);
        });
      // console.log(values);
    },
  });
  // console.log(formik.errors);
  //   console.log(formik.values);
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-80 md:w-96  border-5 justify-center space-y-5"
      >
        {/* name input */}

        {/* email input */}
        <div>
          <input
            name="email"
            type="text"
            placeholder="Email"
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
            <p className="text-red-600">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        {/* phone number input */}

        {/* password input */}
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 ${
              formik.errors.password && formik.touched.password
                ? "border-red-600 focus:border-red-600"
                : ""
            }`}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-600">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>
        <Link
          href={"/forgetpassword"}
          className="text-lightOrange text-right mb-3 mt-1"
        >
          Forget Password?
        </Link>
        {/* submit button */}
        <Button text="Sign In" type="submit" />
      </form>
      {/* line break */}
      <div className="flex justify-between items-center space-x-3">
        <div className="line-break"></div>
        <p className="font-light">or</p>
        <div className="line-break"></div>
      </div>
      {/* Google and facebook sign in */}
      <a
        href="#"
        className="w-80 flex items-center justify-center py-2 space-x-2 border-2 md:w-96 rounded-md active:scale-95  md:hover:bg-gray-200 duration-300"
      >
        <img
          className="w-8 "
          src="https://img.icons8.com/?size=512&id=17949&format=png"
          alt=""
        />{" "}
        <p>Sign up with Google</p>
      </a>
    </>
  );
};

export default SignInForm;
