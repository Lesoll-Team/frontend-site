import { useUser } from "@/Shared/UserContext";
import Cookies from "js-cookie";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
function Index({ token }) {
  const { setUserData } = useUser();
  const router = useRouter();
  Cookies.set("userToken", token);

  useEffect(() => {
    const userToken = Cookies.get("userToken");
    if (userToken && token) {
      setUserData();
      router.push("/");
    }
  }, [router]);

  return (
    <div className="min-h-[100dvh]">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
    </div>
  );
}
export default Index;
export async function getServerSideProps({ query }) {
  return {
    props: {
      token: query?.token,
    },
  };
}
