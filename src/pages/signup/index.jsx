import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import house from "../../../public/page3.svg";
import SignUpForm from "@/components/signup/SignUpForm";

const SignUp = () => {
  const [userType, setUserType] = useState("");
  const setOwner = () => {
    setUserType("owner");
    console.log(userType);
  };
  const setBroker = () => {
    setUserType("broker");
    console.log(userType);
  };
  const setCompany = () => {
    setUserType("company");
    console.log(userType);
  };
  return (
    <div className="flex flex-col md:flex-row ">
      {/* form div*/}
      <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center min-h-[100dvh] border-3  px-1 ">
        <h1 className="text-7xl mb-5 text-lightGreen font-black text-left">
          Sign up
        </h1>
        <div className="flex justify-evenly w-80 md:w-96 md:gap-3 gap-1">
          <button
            onClick={setOwner}
            className={`cursor-pointer border-2 border-lightGreen py-2 px-6  rounded-md md:duration-300 hover:bg-lightGreen hover:text-white ${
              userType === "owner"
                ? "bg-lightGreen text-white"
                : userType !== ""
                ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
                : ""
            } ${
              userType !== "owner" || (userType === "" && "border-gray-600")
            }`}
          >
            Owner
          </button>
          <button
            onClick={setBroker}
            className={`cursor-pointer border-2 border-lightGreen py-2 px-6 rounded-md md:duration-300 hover:bg-lightGreen hover:text-white ${
              userType === "broker"
                ? "bg-lightGreen text-white"
                : userType !== ""
                ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
                : ""
            } ${
              userType !== "broker" || (userType === "" && "border-gray-600")
            }`}
          >
            Broker
          </button>
          <button
            onClick={setCompany}
            className={`cursor-pointer border-2 border-lightGreen py-2 px-6 rounded-md md:duration-300 hover:bg-lightGreen hover:text-white ${
              userType === "company"
                ? "bg-lightGreen text-white"
                : userType !== ""
                ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
                : ""
            } ${
              userType !== "company" || (userType === "" && "border-gray-600")
            }`}
          >
            Company
          </button>
        </div>
        <p className="text-center w-80 md:w-96  text-gray-600">
          {userType === "owner"
            ? "you are the owner of a property and looking to list it for rent or sale."
            : userType === "broker"
            ? "you are a broker connecting property owners with potential buyers."
            : userType === "company"
            ? " you represent a real estate broker or developer company."
            : "To get started, please select your registration role from these options"}
        </p>
        {userType === "owner" ? (
          <SignUpForm userType="owner" />
        ) : userType === "broker" ? (
          <SignUpForm userType="broker" />
        ) : userType === "company" ? (
          <SignUpForm userType="company" />
        ) : (
          ""
        )}

        <p className="">
          Alraedy have an account?
          <Link
            className="text-lightOrange ml-1 font-semibold"
            href={"/signin"}
          >
            Sign in
          </Link>
        </p>
      </div>
      {/* img */}
      <div className="hidden md:flex h-100 min-h-[100dvh] bg-lightGreen items-center w-1/2 justify-end">
        <Image
          width={"auto"}
          height={"auto"}
          priority
          src={house}
          alt="home"
          className="w-4/5"
        />
      </div>
      {/* suggest */}
    </div>
  );
};
export default SignUp;
