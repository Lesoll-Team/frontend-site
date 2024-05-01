import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";

export default function PropertyRent() {
  return null;
}
export async function getServerSideProps() {
  const destination = generateRedirectDestination();
  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
