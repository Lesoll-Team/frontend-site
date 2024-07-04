import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SignUp from "@/components/auth/signup/components/SignUp";
import { useUser } from "@/Shared/UserContext";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const SignUpPage = () => {
  const router = useRouter();
  const { data } = useUser();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (data) {
      router.push("/");
    }
  }, [data]);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />

        <title>{t("Sign_Up")}</title>
        <meta name="description" content={t("Meta_Sign_Up_Description")} />
        <link rel="canonical" href={`https://lesoll.com/signup`} />
      </Head>

      <SignUp />
    </>
  );
};
export default SignUpPage;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
