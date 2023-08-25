import React, { useEffect, useState } from "react";
import UserSettings from "@/components/profile/settings/UserSettings";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";

const index = () => {
  const router = useRouter();
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(isLoading);
    if (!isLoading) {
      router.push("/"); 
    }
  }, [isLoading, router]);

  return (
    <>
      <Head>
        <title>Lesoll Profile Setting</title>
      </Head>

      {loading ? (
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
