import { useRouter } from "next/router";
import { useEffect } from "react";

const TermsRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/termsofservice");

    // It's important to return an empty component here to avoid rendering any content
    return () => {};
  }, []);
  return null;
};

export default TermsRedirect;
