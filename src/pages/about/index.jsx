import { useEffect } from "react";
import { useRouter } from "next/router";

const AboutRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new URL

    router.push(`/about-us`);
  }, [router]);
  return null;
};

export default AboutRedirect;
