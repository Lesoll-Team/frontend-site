import { useEffect } from "react";
import { useRouter } from "next/router";

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/faq");

    // It's important to return an empty component here to avoid rendering any content
    return () => {};
  }, []);

  return null;
};

export default RedirectPage;
