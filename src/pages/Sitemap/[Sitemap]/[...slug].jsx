// import { useEffect } from "react";
// import { useRouter } from "next/router";

const SiteMapRedirect = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   router.push(`/properties/residential/rent/search?page=1`);
  // }, [router]);
  return null;
};

export default SiteMapRedirect;
export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/properties/sale/residential/search?page=1",
      statusCode: 308,
    },
  };
  // context.res.writeHead(308);
  // context.res.end();
  // return {
  //   props: {},
  // };
}
