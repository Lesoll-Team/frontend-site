import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import house from "../../../public/page3.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Router, useRouter } from "next/router";
const BrokerSignUp = () => {
  //router.
  const router = useRouter();
  // formik logic

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      terms: "",
    },
    // form validation logic
    validationSchema: Yup.object({
      fullname: Yup.string().min(3, "Too Short!").required("name is required"),
      email: Yup.string()
        .email("Invalid Email Adress")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "password is short manimum 8 characters")
        .max(16, "password is long maximum 16 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords Doesn't Match")
        .required("Passwords Doesn't Match"),
      phoneNumber: Yup.number().required("Phone Number is required"),
    }),

    //subnit form
    onSubmit: (values) => {
      //   console.log(values);
      router.push({ pathname: "/", query: values });
    },
  });

  // console.log(formik.values);
  //   console.log(formik.errors);
  // console.log(formik.touched);
  // console.log(formik.isSubmitting);
  return (
    <>
      <form
        className="flex flex-col w-80 md:w-96  border-5 justify-center duration-300"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <Input
            name="fullname"
            placeholder="Full Name"
            type="text"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <p className="text-red-600">{formik.errors.fullname}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-600">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <Input
            name="phoneNumber"
            placeholder="Phone Number"
            type="number"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <p className="text-red-600">{formik.errors.phoneNumber}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <Input
            name="password"
            placeholder="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-600">{formik.errors.password}</p>
          ) : (
            ""
          )}
        </div>

        <div>
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-red-600">{formik.errors.confirmPassword}</p>
          ) : (
            ""
          )}
        </div>

        {/* <div className="flex justify-start relative">
    <Input
      name="terms"
      type="checkbox"
      className=" h-4 w-4 rounded-sm inline-block focus:ring-lightGreen text-lightGreen  "
    />
    <p
      htmlFor="termsOfService"
      className="absolute top-[10px] left-[20px]"
    >
      Accept Terms Of Service
    </p>
  </div> */}

        {/* {inputs.map((input) => (
    <Input
      key={input.id}
      {...input}
      value={values[input.name]}
      handleChange={handleChange}
    />
  ))} */}
        <Button className="" type="submit" text="Sign up" />
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

export default BrokerSignUp;
