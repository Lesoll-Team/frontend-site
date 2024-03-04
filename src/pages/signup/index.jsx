import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import Register from "@/components/auth/register/Register";
const SignUp = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.userProfile.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);

  useEffect(() => {
    if (userData) {
      router.push("/");
    }
  }, [userData]);

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

      <Register />
    </>
  );
};
export default SignUp;
