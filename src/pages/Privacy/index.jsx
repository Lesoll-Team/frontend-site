import { useRouter } from "next/router";
import React, { useEffect } from "react";

const PrivacyRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/privacypolicy");

    // It's important to return an empty component here to avoid rendering any content
    return () => {};
  }, []);
  return null;
};

export default PrivacyRedirect;
