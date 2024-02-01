import { React, useEffect } from "react";
import { useRouter } from "next/router";
const MostViewRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect logic
    router.push(`/most-view/1`);
  }, [router]);
  return null;
};

export default MostViewRedirect;
