// import useIsAuth from "@/Hooks/useIsAuth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProfileLayout from "../ProfileLayout";
import UserNeeds from "@/components/newProfile/user/userNeeds/UserNeeds";

const index = () => {
  // const IsAuth = useIsAuth();
  return (
    <ProfileLayout hideHeader={true}>
      <UserNeeds />
    </ProfileLayout>
  );
};
export default index;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
