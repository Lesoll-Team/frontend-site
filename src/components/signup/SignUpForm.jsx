import React, { useState } from "react";
import Button from "../Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignUpForm = (props) => {
  // handle the user type from the props to
  const userType = props.userType || "user";
  let type = "";
  if (userType === "company") {
    type = "Company";
  } else {
    type = "Full";
  }
  // state to change the phone number in the intial value cuz the phone number input does not change the value by it self
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumber = (value) => {
    setPhoneNumber(value);
    formik.setFieldValue("phoneNumber", value); // Update formik values
  };

  // Formik Logics
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phoneNumber: phoneNumber, // Use phoneNumber state value here
      password: "",
      confirmPassword: "",
    },

    // validation schema
    validationSchema: Yup.object({
      fullname: Yup.string().min(3, "Too Short!").required("name is required"),
      email: Yup.string()
        .email("Invalid Email Adress")
        .required("Email is required"),
      phoneNumber: Yup.number().required("Phone Number Required"),
      password: Yup.string()
        .min(8, "password is short manimum 8 characters")
        .max(16, "password is long maximum 16 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords Doesn't Match")
        .required("Passwords Doesn't Match"),
    }),

    //submit action
    onSubmit: (values) => {
      values.type = userType;
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
        <div>
          <input
            name="fullname"
            type="text"
            placeholder={`${type} Name`}
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 ${
              formik.errors.fullname && formik.touched.fullname
                ? "border-red-600 focus:border-red-600"
                : ""
            }`}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <p className="text-red-600">{formik.errors.fullname}</p>
          ) : (
            ""
          )}
        </div>
        {/* email input */}
        <div>
          <input
            name="email"
            type="email"
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
        <div>
          <PhoneInput
            country={"eg"}
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            onBlur={formik.handleBlur}
            // value={phone}
            countryCodeEditable={false}
            // specialLabel={""}
            // enableSearch={true}
            searchPlaceholder={"Search"}
            placeholder="Phone Number"
            // inputStyle={{ width: "100%" }}
            inputProps={{
              name: "phone",
              required: true,
            }}
            //   className="border-lightGreen w-full"
          />
          {formik.errors.phoneNumber && (
            <p className="font-light text-red-600">
              {formik.errors.phoneNumber}
            </p>
          )}
        </div>
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
        {/* confirm password input */}
        <div>
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 ${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? "border-red-600 focus:border-red-600"
                : ""
            }`}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-red-600">{formik.errors.confirmPassword}</p>
          ) : (
            ""
          )}
        </div>
        {/* submit button */}
        <Button text="Sign Up" type="submit" />
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

export default SignUpForm;
