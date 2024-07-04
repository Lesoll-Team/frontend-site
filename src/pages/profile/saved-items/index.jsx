import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProfileLayout from "../ProfileLayout";
import SavedItems from "@/components/newProfile/user/savedItems/SavedItems";

const index = ({ params }) => {
  return (
    <ProfileLayout hideHeader={true}>
      <SavedItems params={params} />
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
