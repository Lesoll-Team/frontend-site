// pages/Realties/[slug].js
import { useEffect } from "react";
import { useRouter } from "next/router";

const RealtiesSlugPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect logic
    router.push("/searching/offer=all");
    // router.push("/searching/offer=all", undefined, {
    //   shallow: true,
    // });
  }, [router]);

  return <div className="h-[95dvh]"></div>;
};

export default RealtiesSlugPage;
