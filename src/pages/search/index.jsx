import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";

const SearchRedirect = () => {
  return null;
};

export default SearchRedirect;
export async function getServerSideProps() {
  const destination = generateRedirectDestination();

  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
