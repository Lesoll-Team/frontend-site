import Link from "next/link";
import Image from "next/image";
import house from "../../../public/page3.svg";
import SignUpForm from "@/components/signup/SignUpForm";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const SignUp = () => {
  const router=useRouter()

  // const isLoading = useSelector((state) => state.GlobalState.isLogin);
  const isLoading = useSelector((state) => state.Auth.isLoding);


  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(isLoading)
    if (isLoading) {
      router.push('/'); // This will navigate to the home page after login is complete
    }
}, [isLoading, router]);

  return (<>
  {!loading?(
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
          loading="lazy"
          src={house}
          alt="home"
          className="w-4/5"
        />
      </div>
      {/* suggest */}
    </div>):(<div className="w-full flex justify-center items-center h-screen ">
     <b> You Have Access...</b>
    </div>)}</>
  );  
};
export default SignUp;
