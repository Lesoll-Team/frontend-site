import Link from "next/link";

import Image from "next/image";
import house from "../../../public/page3.svg";
import SignUpForm from "@/components/signup/SignUpForm";
import  { useEffect } from "react";

// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";


const SignUp = () => {
  // const router = useRouter();

  // const isLogin = useSelector( (state) => state.GlobalState.isLogin);
  // const isLogin = false;




  return (<>
    <div className="flex flex-col md:flex-row ">
      {/* form div*/}
      <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center min-h-[100dvh] border-3  px-1 ">
        <h1 className="text-7xl mb-5 text-lightGreen font-black text-left">
          Sign up
        </h1>

        <SignUpForm />

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
    </div></>
  );  
};
export default SignUp;
