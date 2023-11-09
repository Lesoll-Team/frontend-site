import { useEffect } from "react";
import { useRouter } from "next/router";

const SiteMapRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new URL

    router.push(`/searching/offer=all`);
  }, [router]);
  return null;
};

export default SiteMapRedirect;
export async function getServerSideProps(context) {
  context.res.writeHead(410);
  context.res.end();
  return {
    props: {},
  };
}
