// import SignInForm from "../../components/signin/SigninForm";
import dynamic from "next/dynamic";
const SignInForm = dynamic(() => import("../../components/signin/SigninForm"));
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
  const language = useSelector((state) => state.GlobalState.languageIs);

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
        <title>{language ? "تسجيل الدخول" : "Sign Im"}</title>
        <meta
          name="description"
          content="قم بتسجيل الدخول إلى حسابك على منصتنا للعقارات. احصل على وصول إلى بحوثك المحفوظة والقوائم المفضلة والمزيد. عملية تسجيل دخول آمنة ومريحة لتجربة شخصية."
        />
      </Head>

      {!loading ? (
        <div className="flex flex-col md:flex-row ">
          {/* form div*/}
          <div className="flex flex-col space-y-3 md:w-1/2 justify-center items-center min-h-[100dvh] border-3  px-1 ">
            <h2 className="text-6xl sm:text-7xl mb-5 text-lightGreen font-black text-left">
              {language ? "تسجيل الدخول" : "Sign Im"}
            </h2>

            <SignInForm />

            <p className="">
              {language ? "لا تملك حساب؟" : "Don't have an account?"}
              <Link
                className="text-lightOrange mx-1 font-semibold"
                href={"/signup"}
              >
                {language ? "سجل الأن" : "Sign Up"}
              </Link>
            </p>
          </div>
          {/* img */}
          <div className="hidden md:flex h-100 min-h-[100dvh] bg-lightGreen items-center w-1/2 justify-end">
            {language ? (
              <Image
                style={{
                  transform: "rotateY(180deg)",
                }}
                width={"auto"}
                height={"auto"}
                loading="lazy"
                src={house}
                alt="sign up / sign in "
                className={`w-4/5 ${language && "rotate-180"}`}
              />
            ) : (
              <Image
                width={"auto"}
                height={"auto"}
                loading="lazy"
                src={house}
                alt="home"
                className={`w-4/5 `}
              />
            )}
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
