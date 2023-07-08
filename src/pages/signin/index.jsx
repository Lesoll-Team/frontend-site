import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // You can make API calls or perform authentication logic here
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* form div*/}
        <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center  h-screen border-3 ">
          <form
            st
            action=""
            className="flex flex-col w-80 xl:w-1/2 border-5 justify-center "
          >
            <h1 className="text-7xl mb-5 text-lightGreen font-black 2xl:text-8xl 2xl:mb-8">
              Sign in
            </h1>
            {/* Form inputs */}
            <Input type="email" placeholder="Your email" required={true} />
            <Input type="password" placeholder="Your Password" />
            <Button className="" text="Login" />
          </form>
          <div> or </div>
          {/* Google and facebook sign in */}
          <a
            href="#"
            className="w-100% flex items-center justify-center py-2 space-x-2 border-2 w-80 xl:w-1/2 rounded-md"
          >
            <img
              className="w-8 2xl:w-10"
              src="https://img.icons8.com/?size=512&id=17949&format=png"
              alt=""
            />{" "}
            <p>Login with Google</p>
          </a>
          <a
            href="#"
            className="w-100% flex items-center justify-center py-2 space-x-2 border-2 w-80 xl:w-1/2 rounded-md"
          >
            <img
              className="w-8 2xl:w-10"
              src="https://img.icons8.com/?size=512&id=118497&format=png"
              alt=""
            />{" "}
            <p>Login with Facebook</p>
          </a>
        </div>
        {/* img */}
        <div className="hidden md:flex h-100 h-screen bg-lightGreen items-center w-1/2 justify-end">
          <img
            src="https://cdn.discordapp.com/attachments/1057322504160550933/1127283929683079218/page3.png"
            alt="home"
            className="w-4/5"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
