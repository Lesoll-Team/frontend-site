import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";

const RedirectPage = () => {
  return null;
};

export default RedirectPage;
export async function getServerSideProps() {
  const destination = generateRedirectDestination();

  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
