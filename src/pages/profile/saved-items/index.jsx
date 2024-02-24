import useIsAuth from "@/Hooks/useIsAuth";
import ProfileLayout from "../ProfileLayout";

const index = ({ params }) => {
  const IsAuth = useIsAuth();
  return <ProfileLayout hideHeader={true}>Saved-items</ProfileLayout>;
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
