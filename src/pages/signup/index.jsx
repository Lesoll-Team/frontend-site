import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import house from "../../../public/page3.svg";

const SignUp = () => {
  const [userType, setUserType] = useState("individual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password!== confirmPassword) {
  //     alert("Passwords do not match");
  //   } else {
  //     fetch("/api/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userType,
  //         name,
  //         email,
  //         password,
  //       }),
  //     })
  //     .then((res) => res.json())
  //     .then((data) => {
  //         if (data.error) {
  //           alert(data.error);
  //         } else {
  //           localStorage.setItem("token", data.token);
  //           window.location.href = "/";
  //         }
  //       });
  //   }
  // };

  let developerStyle = {};
  let individualStyle = {};
  let BrokerStyle = {};

  return (
    <div className="flex flex-col md:flex-row ">
      {/* form div*/}
      <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center min-h-[100dvh] border-3  px-1 ">
        <form
          action=""
          className="flex flex-col w-80 md:w-96  border-5 justify-center "
        >
          <h1 className="text-7xl mb-5 text-lightGreen font-black">Sign up</h1>
          {/* Form inputs */}
          {/* <div className="users flex my-5 justify-between  group:">
            <div className="user__lable">
              <input
                className="rounded-sm checked:bg-lightGreen group-checked:bg-lightGreen users__input"
                type="radio"
                name="options"
                id="option1"
                value="individual"
              />
              <label
                style={individualStyle}
                className="group-checked:bg-lightGreen rounded-sm checked:bg-lightGreen w-full users__label"
                for="option1"
                onClick={() => {
                  setUserType("individual");
                }}
              >
                individual
              </label>
            </div>
            <div className="user__lable">
              <input
                className="users__input"
                type="radio"
                name="options"
                id="option2"
                value="broker"
              />
              <label
                className="rounded-sm  users__label "
                for="option2"
                onClick={() => {
                  setUserType("broker");
                }}
              >
                Broker
              </label>
            </div>
            <div className="user__lable">
              <input
                className="users__input"
                type="radio"
                name="options"
                id="option3"
                value="developer"
              />
              <label
                style={developerStyle}
                className="rounded-sm users__label"
                for="option3"
                onClick={() => {
                  setUserType("developer");
                }}
              >
                Developer
              </label>
            </div>
          </div> */}
          <Input type="text" placeholder="Full Name" required={true} />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Input type="number" placeholder="Phone Number" />

          <Button className="" text="Sign up" />
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
          className="w-80 flex items-center justify-center py-2 space-x-2 border-2 md:w-96 rounded-md active:scale-95  md:hover:bg-gray-200 duration-300"
        >
          <img
            className="w-8 "
            src="https://img.icons8.com/?size=512&id=17949&format=png"
            alt=""
          />{" "}
          <p>Sign up with Google</p>
        </a>
        {/* <a
          href="#"
          className="w-80 flex items-center justify-center py-2 space-x-2 border-2 md:w-96  rounded-md active:scale-95  md:hover:bg-gray-200 duration-300"
        >
          <img
            className="w-8 "
            src="https://img.icons8.com/?size=512&id=118497&format=png"
            alt=""
          />{" "}
          <p>Sign up with Facebook</p>
        </a> */}
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
        <Image src={house} alt="home" className="w-4/5" />
      </div>
      {/* suggest */}
    </div>
  );
};
export default SignUp;
