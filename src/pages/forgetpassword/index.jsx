import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import forgetImg from "../../../public/forgetpassword.svg";
import lock from "../../../public/lock.svg";

const ForgetPass = () => {
  return (
    <div className="flex  mx-auto  h-screen items-center justify-center password-bg ">
      <div
        className="shadow border-2 rounded-md p-6 bg-white  mx-auto  "
      >
        <form
         
          className="flex flex-col border-5 justify-center "
        >
          <Image src={lock} alt="" className="w-40 relative mx-auto -mt-24" />
          <h1 className="text-4xl mb-5 text-lightGreen font-black">
            Reset password
          </h1>
          {/* Form inputs */}
          <Input type="email" placeholder="Your email" required={true} />

          <Button type="submit" className="" text="Send" />
        </form>
        <div className="flex justify-center mt-4">
          <Link href={"/signin"} className="">
            <p className="text-lightGreen font-bold">&#8592; Back to sign in</p>
          </Link>
        </div>
      </div>
      {/* img */}
      <div className="hidden md:flex md:flex-col md:w-1/2 bg-lightGreen h-screen items-center justify-center">
        <Image src={lock} alt=""></Image>
        <p>Reset Password</p>
      </div>
    </div>
  );
};

export default ForgetPass;
