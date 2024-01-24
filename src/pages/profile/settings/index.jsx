import React, { useEffect, useState } from "react";
import UserSettings from "@/components/profile/settings/UserSettings";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

const index = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.userProfile.userData);

  const status = useSelector((state) => state.userProfile.status);

  useEffect(() => {
    if (status === "failed") {
      router.push("/");
    }
  }, [status]);

  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>{language ? "إعدادات الحساب" : "Account Settings"}</title>
        <meta name="description" content="اعدادات حسابك" />
        <link rel="canonical" href={`https://lesoll.com/profile/settings`} />
      </Head>

      {userData ? (
        <UserSettings />
      ) : (
        <div className="w-full flex justify-center items-center h-screen ">
          <b> You not have access...</b>
        </div>
      )}
    </>
  );
};
export default index;
