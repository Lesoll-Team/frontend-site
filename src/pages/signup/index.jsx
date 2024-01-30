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
import Register from "@/components/auth/register/Register";
const SignUp = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.userProfile.userData);

  useEffect(() => {
    if (userData) {
      router.push("/");
    }
  }, [userData]);
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>{language ? "الإشتراك" : "Sign Up"}</title>
        <meta
          name="description"
          content="أنشئ حسابًا على منصتنا للعقارات. سجِّل الدخول لحفظ بحوث العقارات، واستلم تحديثات حول القوائم الجديدة، واستمتع بتجربة شخصية. انضم إلينا اليوم!"
        />
        <link rel="canonical" href={`https://lesoll.com/signup`} />
      </Head>

      <Register />
    </>
  );
};
export default SignUp;
