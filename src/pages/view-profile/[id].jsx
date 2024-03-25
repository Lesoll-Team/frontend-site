import axios from "axios";
import ViewUser from "@/components/viewProfile/ViewUser";
import { redirect } from "next/dist/server/api-utils";

const ViewProfilePage = ({ query, user, properties }) => {
  return (
    <div className="min-h-[90dvh] ">
      <ViewUser user={user} params={query} properties={properties} />
    </div>
  );
};

export default ViewProfilePage;
export async function getServerSideProps({ query, res }) {
  const param = query;
  let userdata;
  try {
    const user = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit/${query.id}`
    );
    userdata = user.data;
    // const user = res.data.find;
    const properties = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/uservisit-property/${
        query.id
      }?limit=10&page=${query?.page || 1}&of=${query?.type || "000"}`
    );
    return {
      props: { query: param, user: user.data, properties: properties.data },
      // revalidate: 10,
    };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return {
        props: {
          query: param,
          user: userdata,
          properties: { getConfirmedRealty: [] },
        },
        // revalidate: 10,
      };
    }
    if (error.response && error.response.status === 500) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    // If the error is not a 400 status code, re-throw the error
    throw error;
  }
}
