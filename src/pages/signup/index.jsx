import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const SignUpForm = dynamic(() => import("@/components/signup/SignUpForm"));
import house from "../../../public/page3.svg";
// import SignUpForm from "@/components/signup/SignUpForm";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
const SignUp = () => {
  const router = useRouter();
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(isLoading);
    if (isLoading) {
      router.push("/"); // This will navigate to the home page after login is complete
    }
  }, [isLoading, router]);
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="">
      <Head>
        <meta name="robots" content="noindex, nofollow" />

        <title>{language ? "الإشتراك" : "Sign Up"}</title>
        <meta
          name="description"
          content="أنشئ حسابًا على منصتنا للعقارات. سجِّل الدخول لحفظ بحوث العقارات، واستلم تحديثات حول القوائم الجديدة، واستمتع بتجربة شخصية. انضم إلينا اليوم!"
        />
        <link rel="canonical" href={`https://lesoll.com/signup`} />
      </Head>

      {!loading ? (
        <div className="flex flex-col md:flex-row ">
          {/* form div*/}
          <div className="flex flex-col space-y-3 pb-10 md:w-1/2 justify-center items-center min-h-[100dvh] border-3  px-1 ">
            <h1 className="text-6xl sm:text-7xl mb-5 text-lightGreen font-black text-left">
              {language ? "التسجيل" : "Sign Up"}
            </h1>

            <SignUpForm />

            <p className="">
              {language ? "تمتلك حساب بالفعل؟" : "Alraedy have an account?"}
              <Link
                title={language ? "سجل الدخول" : "Sign in"}
                className="text-lightOrange mx-1 font-semibold"
                href={"/signin"}
              >
                {language ? "سجل الدخول" : "Sign in"}
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
                alt="home"
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
    </div>
  );
};
export default SignUp;
