import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import SignUp from "@/components/auth/signup/components/SignUp";
import { useUser } from "@/Shared/UserContext";
const SignUpPage = () => {
  const router = useRouter();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data } = useUser();

  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />

        <title>{language ? "الإشتراك" : "Sign Up"}</title>
        <meta
          name="description"
          content="أنشئ حسابًا على منصتنا للعقارات. سجِّل الدخول لحفظ بحوث العقارات، واستلم تحديثات حول القوائم الجديدة، واستمتع بتجربة شخصية. انضم إلينا اليوم!"
        />
        <link rel="canonical" href={`https://lesoll.com/signup`} />
      </Head>

      <SignUp />
    </>
  );
};
export default SignUpPage;
