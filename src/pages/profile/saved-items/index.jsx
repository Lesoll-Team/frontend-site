import useIsAuth from "@/Hooks/useIsAuth";
import ProfileLayout from "../ProfileLayout";
import SavedItems from "@/components/newProfile/user/savedItems/SavedItems";

const index = ({ params }) => {
  const IsAuth = useIsAuth();
  return (
    <ProfileLayout hideHeader={true}>
      <SavedItems params={params} />
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