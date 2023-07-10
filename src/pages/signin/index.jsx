import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
// import { useState } from "react";
import Image from "next/image";
import house from "../../../public/page3.svg";

const SignIn = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* form div*/}
        <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center  h-screen border-3  px-1">
          <form
            onSubmit={() => {}}
            className="flex flex-col w-96  border-5 justify-center "
          >
            <h1 className="text-7xl mb-5 text-lightGreen font-black">
              Sign in
            </h1>
            {/* Form inputs */}
            <Input type="email" placeholder="Your email" required={true} />
            <Input type="password" placeholder="Your Password" />
            <Link
              href={"/forgetpassword"}
              className="text-lightOrange text-right mb-3 -mt-2"
            >
              Forget Password?
            </Link>
            <Button type="submit" className="" text="Login" />
          </form>
          {/* line break */}
          <div className="flex justify-between items-center space-x-3">
            <div className="line-break"></div>
            <p>or</p>
            <div className="line-break"></div>
          </div>
          {/* Google and facebook sign in */}
          <a
            href="#"
            className="w-100% flex items-center justify-center py-2 space-x-2 border-2 w-96 rounded-md active:scale-95  md:hover:bg-gray-200 duration-300"
          >
            <img
              className="w-8 "
              src="https://img.icons8.com/?size=512&id=17949&format=png"
              alt=""
            />{" "}
            <p>Login with Google</p>
          </a>
          <a
            href="#"
            className="w-100% flex items-center justify-center py-2 space-x-2 border-2 w-96  rounded-md active:scale-95  md:hover:bg-gray-200 duration-300"
          >
            <img
              className="w-8 "
              src="https://img.icons8.com/?size=512&id=118497&format=png"
              alt=""
            />{" "}
            <p>Login with Facebook</p>
          </a>
          <p className="">
            Don't have an account?
            <Link
              className="text-lightOrange ml-1 font-semibold"
              href={"/signup"}
            >
              Sign up
            </Link>
          </p>
        </div>
        {/* img */}
        <div className="hidden md:flex h-100 h-screen bg-lightGreen items-center w-1/2 justify-end">
          <Image src={house} alt="home" className="w-4/5" />
        </div>
      </div>
      
    </>
  );
};

export default SignIn;
