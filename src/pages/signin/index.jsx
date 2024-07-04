import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import Signin from "@/components/auth/login/Signin";
import { useUser } from "@/Shared/UserContext";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const SignIn = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const { data } = useUser();

  useEffect(() => {
    if (data) {
      router.push("/"); // This will navigate to the home page after login is complete
    }
  }, [data]);
  return (
    <>
      <Head>
        <title>
          {t("Sign_In")}
          {/* {language ? "تسجيل الدخول" : "Sign In"} */}
        </title>
        <meta name="description" content={t("Sign_In_Meta_Description")} />
        <link rel="canonical" href={`https://lesoll.com/signin`} />
      </Head>

      <Signin />
    </>
  );
};

export default SignIn;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
