// pages/User/[slug].js

import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to lesoll.com when the component mounts
    router.replace("/");

    // It's important to return an empty component here to avoid rendering any content
    return () => {};
  }, []);

  return null;
};

export default RedirectPage;
