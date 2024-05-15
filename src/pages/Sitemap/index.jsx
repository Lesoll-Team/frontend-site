import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";

const SiteMapRedirect = () => {
  return null;
};

export default SiteMapRedirect;
export async function getServerSideProps() {
  const destination = generateRedirectDestination();

  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
