import SignInForm from "../../components/signin/SignInForm";

// import dynamic from "next/dynamic";
// const SignInForm = dynamic(() => import("../../components/signin/SigninForm"));
import Link from "next/link";
import house from "../../../public/page3.svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import Signin from "@/components/new-signin/Signin";
const SignIn = () => {
  // const {data:session}=useSession()

  const router = useRouter();
  // const isLoading = useSelector((state) => state.Auth.isLoding);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.GlobalState.userData);

  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    // setLoading(isLoading);
    if (userData) {
      router.push("/"); // This will navigate to the home page after login is complete
    }
  }, [userData]);
  return (
    <>
      <Head>
        <title>{language ? "تسجيل الدخول" : "Sign Im"}</title>
        <meta
          name="description"
          content="قم بتسجيل الدخول إلى حسابك على منصتنا للعقارات. احصل على وصول إلى بحوثك المحفوظة والقوائم المفضلة والمزيد. عملية تسجيل دخول آمنة ومريحة لتجربة شخصية."
        />
        <link rel="canonical" href={`https://lesoll.com/signin`} />
      </Head>

      <Signin />
    </>
  );
};

export default SignIn;
