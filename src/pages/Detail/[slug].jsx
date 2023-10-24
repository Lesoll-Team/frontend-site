// pages/details/[slug].js

import { useEffect } from "react";
import { useRouter } from "next/router";

const OldDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new URL
    router.push(
      `/property-details/${router.asPath}`,
      `/property-details/${router.asPath}`,
      { shallow: true }
    );
  }, [router]);

  // This component can be empty, as the redirection happens in useEffect

  return null;
};


export default OldDetailsPage;
