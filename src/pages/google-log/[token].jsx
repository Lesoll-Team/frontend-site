import { useRouter } from "next/router";
import React, { useEffect } from "react";
function index() {
  const router = useRouter();
  const token = router?.query?.token;

  useEffect(() => {
    if (token) {
      localStorage.setItem("userToken", JSON.stringify(token));
      router.push("/");
    }
  }, [router]);

  return <div className="min-h-[100dvh]"></div>;
}
export default index;
