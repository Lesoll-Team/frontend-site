import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProfileLayout from "../ProfileLayout";
import UserProperties from "@/components/newProfile/user/userProperties/UserProperties";

const index = ({ params }) => {
  return (
    <ProfileLayout>
      <UserProperties params={params} />
    </ProfileLayout>
  );
};
export default index;

export async function getServerSideProps({ query, locale }) {
  const params = query;
  return {
    props: {
      params,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
