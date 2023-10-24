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

export const getServerSideProps = async ({ params }) => {
  // This part is optional, but you can perform any server-side logic here if needed.
  // For example, fetching data based on the old URL.

  return {
    props: {}, // This can be an empty object or data you want to pass to the page component
  };
};

export default OldDetailsPage;
