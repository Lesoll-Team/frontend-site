import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SearchRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect logic
    router.push(`/searching/offer=all`);
  }, [router]);
  return null;
};

export default SearchRedirect;
