import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
function Index() {
  const router = useRouter();
  const token = router?.query?.token;

  useEffect(() => {
    if (token) {
      Cookies.set("userToken", token);
      router.push("/");
    }
  }, [router]);

  return <div className="min-h-[100dvh]"></div>;
}
export default Index;
