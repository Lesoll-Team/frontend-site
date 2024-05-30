import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";

const Index = () => {
  return null;
};
export default Index;
export async function getServerSideProps() {
  const destination = generateRedirectDestination();

  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
