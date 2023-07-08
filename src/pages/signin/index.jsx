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
          <h1 className="text-7xl mb-5 text-lightGreen font-black">Sign in</h1>
          <form
            st
            action=""
            className="flex flex-col w-80 border-5 justify-center "
          >
            <Input type="text" placeholder="Full name" />
            <Input type="password" placeholder="Your Password" />
            <Button className="" text="Login" />
          </form>
        </div>
        {/* img */}
        <div className="hidden md:flex h-100 h-screen bg-lightGreen items-center w-1/2 justify-end">
          <img
            src="https://cdn.discordapp.com/attachments/1057322504160550933/1127283929683079218/page3.png"
            alt="home"
            // className="w-4/5"
          />
        </div>
      </div>
    </>
  );
};

export default SignIn;
