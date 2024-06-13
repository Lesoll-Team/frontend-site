import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("http://localhost:3000/prices?time=15:47:32");
  }, []);
  return <div>index</div>;
};

export default index;
