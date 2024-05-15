import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";

const RealtiesSlugPage = () => {
  return null;
};

export default RealtiesSlugPage;
export async function getServerSideProps() {
  const destination = generateRedirectDestination();

  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
