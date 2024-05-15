import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";

const SearchPageRedirect = () => {
  return null;
};
export default SearchPageRedirect;
export async function getServerSideProps() {
  const destination = generateRedirectDestination();

  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
