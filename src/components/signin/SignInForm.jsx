import React, { useState } from "react"; //useEffect
import { useDispatch, useSelector } from "react-redux";
// import {getAllUserData}from "../../redux-store/features/globalState"

import { loginUserAsync } from "../../redux-store/features/authSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
const SignInForm = () => {
  const dispatch = useDispatch();
  const isRegistering = useSelector((state) => state.Auth.isRegistering);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const registrationError = useSelector(
    (state) => state.Auth.registrationError
  );
  // const isLoading = useSelector((state) => state.Auth.loading);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailValidError, setEmailValidError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isValidEmail = (email) => {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    if (email && password && isValidEmail(email)) {
      dispatch(loginUserAsync(userData));
    } else {
      if (!password) {
        setPasswordError(true);
      }
      if (!email) {
        setEmailError(true);
      }
      if (email && !isValidEmail(email)) {
        setEmailValidError(true);
      }
    }
  };
  const toggleShowPassword = () => [setShowPassword(!showPassword)];

  // useEffect(()=>{
  //    dispatch(getAllUserData(userToken))
  // },[userToken,dispatch])
  return (
    <div className="animate-appearance-in">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-80 md:w-96  justify-center space-y-4"
      >
        <div>
          <input
            placeholder={language ? "البريد  " : "Email"}
            type=""
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (email) {
                setEmailError(false);
                setEmailValidError(false);
              }
            }}
            className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 ${
              emailError ||
              (emailValidError && "border-red-500 focus:border-red-500")
            }`}
          />
          {emailError && (
            <p className="text-red-500">
              {language ? "من فضلك ادخل البريد" : "Please enter your email"}
            </p>
          )}
          {emailValidError && (
            <p className="text-red-500">
              {" "}
              {language
                ? "من فضلك ادخل بريد صحيح"
                : "Please enter a valid email"}
            </p>
          )}
        </div>
        <div>
          <input
            placeholder={language ? "كلمة السر" : "Password"}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />
        <Link href={"/forgetpassword"} className="text-blue-500 text-xs">{language?"نسيت كلمة المرور؟":"Reset Password?"}</Link>

        </div>
        <button
          type="submit"
          disabled={isRegistering}
          className="rounded-3xl bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
        >
          {isRegistering
            ? language
              ? "...تسجيل الدخول"
              : "Logging In..."
            : language
            ? "تسجيل الدخول"
            : "Login"}
        </button>
        {registrationError && <div>{registrationError}</div>}
      </form>
    </div>
  );
};

export default SignInForm;
