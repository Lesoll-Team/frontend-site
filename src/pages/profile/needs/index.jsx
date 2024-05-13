import ProfileLayout from "../ProfileLayout";
import UserNeeds from "@/components/newProfile/user/userNeeds/UserNeeds";

const index = () => {
  return (
    <ProfileLayout hideHeader={true}>
      <UserNeeds />
    </ProfileLayout>
  );
};
export default index;

// export async function getServerSideProps({ query }) {
//   const params = query;
//   return {
//     props: {
//       params,
//     },
//   };
// }
