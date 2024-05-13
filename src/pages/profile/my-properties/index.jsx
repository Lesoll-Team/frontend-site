// import { useRouter } from "next/router";
import ProfileLayout from "../ProfileLayout";
import UserProperties from "@/components/newProfile/user/userProperties/UserProperties";
// import UserProperties from "@/components//UserProperties";

const index = ({ params }) => {
  return (
    <ProfileLayout>
      <UserProperties params={params} />
    </ProfileLayout>
  );
};
export default index;

export async function getServerSideProps({ query }) {
  const params = query;
  return {
    props: {
      params,
    },
  };
}
