// pages/details/[slug].js

import { useEffect } from "react";
import { useRouter } from "next/router";

const OldDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new URL
    const parts = router.asPath.split("/");
    const codeID = parts[parts.length - 1];
    router.push(`/property-details/${codeID}`);
  }, [router]);

  // This component can be empty, as the redirection happens in useEffect

  return <div className="h-[90dvh]"></div>;
};

export default OldDetailsPage;
