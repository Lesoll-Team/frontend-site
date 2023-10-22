import React, { useEffect, useState } from "react"; //useEffect
import { useDispatch, useSelector } from "react-redux";
// import { GoogleLogin } from 'react-google-login';
// const GoogleAuth = () => {
//   const responseGoogle = (response) => {
//     console.log(response);
//     // Handle the response, e.g., send it to your server for authentication
//   };
// import {getAllUserData}from "../../redux-store/features/globalState"

import { loginUserAsync } from "../../redux-store/features/authSlice";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { signWithGoogle } from "@/utils/userAPI";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import AuthGoogleLogin from "../google/googlelogin";
// import AuthGoogleLogout from "../google/googlelogout";
// import { useSession, signIn, signOut } from "next-auth/react"

const SignInForm = () => {
  // const {data:session}=useSession()

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

  // const handleLoginWithGoogle=async()=>{
  //   // e.preventDefault();
  //  let data= await signIn()
  //  console.log("data from google",data);
  // }
  // if (session) {
  // const userData2 = { email:session?.user?.email, password:"123456" };
  // dispatch(loginUserAsync(userData2));
  // }
  // const userData2 = { email:session?.user?.email, password:"123456" };

  // useEffect(() => {
  //   dispatch(loginUserAsync(userData2));

  // }, [handleLoginWithGoogle])

  // dispatch(loginUserAsync(userData2));

  // const toggleShowPassword = () => [setShowPassword(!showPassword)];
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const handleGoogleAuth = async () => {
    // e.preventDefault();

    await signWithGoogle();
    // console.log(res);
  };
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
        <div className="flex items-center">
          <input
            placeholder={language ? "كلمة السر" : "Password"}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />

          {showPassword ? (
            <AiOutlineEye
              onClick={toggleShowPassword}
              className="-mx-8 cursor-pointer text-darkGray text-xl"
            />
          ) : (
            <AiOutlineEyeInvisible
              onClick={toggleShowPassword}
              className="-mx-8 cursor-pointer text-darkGray text-xl"
            />
          )}
        </div>
        <Link
          title={language ? "نسيت كلمة المرور؟" : "Reset Password?"}
          href={"/forgetpassword"}
          className="text-blue-500 text-xs"
        >
          {language ? "نسيت كلمة المرور؟" : "Reset Password?"}
        </Link>
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
      <div className="flex items-center mt-4 px-14 ">
        <hr className=" border-[1px] w-full border-default-300" />
        <span className="px-2 font-medium text-default-600">
          {language ? "او" : "or"}
        </span>
        <hr className=" border-[1px] w-full border-default-300" />
      </div>
      <div className="flex items-center px-4 justify-center">
        <Button
          onClick={handleGoogleAuth}
          variant="bordered"
          isIconOnly
          radius="sm"
          className="w-full py-5 text-lg mt-3 "
        >
          {/**onClick={handleGoogleAuth} */}
          <span>{language ? "تسجيل الدخول بجوجل" : "Log In With Google"}</span>
          <FcGoogle className="text-2xl mx-3" />
        </Button>
        {/* <Button onPress={()=>signOut()}>logout</Button> */}
        {/* <AuthGoogleLogin/>
      onPress={handleLoginWithGoogle}
      <AuthGoogleLogout/> */}
      </div>
    </div>
  );
};

export default SignInForm;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUserAsync } from "../../redux-store/features/authSlice";
// import { FcGoogle } from "react-icons/fc";
// import Link from "next/link";
// import { Button } from "@nextui-org/react";
// import GoogleLogin from "react-google-login"; // Import the GoogleLogin component

// const SignInForm = () => {
//   const dispatch = useDispatch();
//   const isRegistering = useSelector((state) => state.Auth.isRegistering);
//   const language = useSelector((state) => state.GlobalState.languageIs);
//   const registrationError = useSelector(
//     (state) => state.Auth.registrationError
//   );

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState(false);
//   const [emailValidError, setEmailValidError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   // Your isValidEmail function remains the same...

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const userData = { email, password };
//     if (email && password && isValidEmail(email)) {
//       dispatch(loginUserAsync(userData));
//     } else {
//       if (!password) {
//         setPasswordError(true);
//       }
//       if (!email) {
//         setEmailError(true);
//       }
//       if (email && !isValidEmail(email)) {
//         setEmailValidError(true);
//       }
//     }
//   };

//   const responseGoogleSuccess = (response) => {
//     console.log("Google login success:", response);
//     // You can send the response to your server for authentication if needed
//     // For example, you can call signWithGoogle here and handle the response
//   };

//   const responseGoogleFailure = (error) => {
//     console.error("Google login error:", error);
//   };

//   return (
//     <div className="animate-appearance-in">
//       <form
//         onSubmit={handleLogin}
//         className="flex flex-col w-80 md:w-96 justify-center space-y-4"
//       >
//         {/* ... Your email and password input fields ... */}
//       </form>
//       <div className="flex items-center mt-4 px-14">
//         <hr className="border-[1px] w-full border-default-300" />
//         <span className="px-2 font-medium text-default-600">or</span>
//         <hr className="border-[1px] w-full border-default-300" />
//       </div>
//       <div className="flex items-center px-4 justify-center">
//         <GoogleLogin
//           clientId="380664641870-n63j72jeov5qe5lba6p2v17l1b5oo7e3.apps.googleusercontent.com"
//           buttonText={language ? "تسجيل الدخول بجوجل" : "Log In With Google"}
//           onSuccess={responseGoogleSuccess}
//           onFailure={responseGoogleFailure}
//           cookiePolicy={"single_host_origin"}
//         >
//           <FcGoogle className="text-2xl mx-3" />
//         </GoogleLogin>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;
