import VipUserLayout from "@/components/dashboard/router/vip-user/VipUsersLayout";
import { getUserDataVIP } from "@/utils/dashboardApi/paymentDetailsAPI";

const VipUsers = ({ userData }) => {
  return <VipUserLayout userData={userData} />;
};
export default VipUsers;
export async function getServerSideProps({ query }) {
  console.log(query);
  const userData = await getUserDataVIP({ userId: query?.id });
  return {
    props: {
      userData: userData,
    },
  };
}
// getUserDataVIP;
