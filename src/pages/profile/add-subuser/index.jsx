import AddSubUser from "@/components/newProfile/user/addSubUser/AddSubUser";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const index = () => {
  return <AddSubUser />;
};
export default index;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
