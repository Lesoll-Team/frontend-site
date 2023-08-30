import SignInForm from "../../components/signin/SigninForm";
import Link from "next/link";
import house from "../../../public/page3.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
const SignIn = () => {
  const router = useRouter();
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(isLoading);
    if (isLoading) {
      router.push("/"); // This will navigate to the home page after login is complete
    }
  }, [isLoading, router]);
  return (
    <>
      <Head>
        <title>Lesoll Sign In</title>
      </Head>

      {!loading ? (
        <div className="flex flex-col md:flex-row ">
          {/* form div*/}
          <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center min-h-[100dvh] border-3  px-1 ">
            <h1 className="text-7xl mb-5 text-lightGreen font-black text-left">
              Sign In
            </h1>

            <SignInForm />

            <p className="">
              Don't have an account?
              <Link
                className="text-lightOrange ml-1 font-semibold"
                href={"/signup"}
              >
                Sign Up
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
        </div>
      ) : (
        <div className="w-full flex justify-center items-center h-screen ">
          <b> You Have Access...</b>
        </div>
      )}
    </>
  );
};

export default SignIn;
