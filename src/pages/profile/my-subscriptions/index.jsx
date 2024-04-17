import { useRouter } from "next/router";
import ProfileLayout from "../ProfileLayout";
import useIsAuth from "@/Hooks/useIsAuth";
import UserProperties from "@/components/newProfile/user/userProperties/UserProperties";
// import UserProperties from "@/components//UserProperties";

const index = ({ params }) => {
  const IsAuth = useIsAuth();
  const router = useRouter();

  return <ProfileLayout></ProfileLayout>;
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
