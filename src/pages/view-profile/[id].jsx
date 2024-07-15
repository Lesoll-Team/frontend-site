import ViewUser from "@/components/viewProfile/ViewUser";
import axios from "axios";

const ViewProfilePage = ({ query, user, properties, loading }) => {
  return (
    <div className="min-h-[90dvh] ">
      <ViewUser
        user={user}
        params={query}
        properties={properties}
        loading={loading}
      />
    </div>
  );
};

export default ViewProfilePage;
export async function getServerSideProps({ query }) {
  const param = query;
  const queryString = Object.keys(param)
    .map((key) => `${key}=${encodeURIComponent(param[key])}`)
    .join("&");

  let loadingState = true; // Initialize loading state

  const userPromise = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit/${query.id}`,
  );
  const propertiesPromise = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit-property/${query.id}?${queryString}&limit=10`,
  );

  // Wait for both requests to complete
  const [userData, propertiesData] = await Promise.all([
    userPromise,
    propertiesPromise.catch(() => ({ data: {} })), // Handle potential error
  ]);

  loadingState = false; // Update loading state after data fetching completes

  return {
    props: {
      loading: loadingState,
      query: param,
      user: userData.data,
      properties: propertiesData.data || {},
    },
  };
}
