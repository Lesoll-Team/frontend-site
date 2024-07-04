import ForgetPassword from "@/components/auth/forgetpasseord/ForgetPassword";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ForgetPass = () => {
  return <ForgetPassword />;
};

export default ForgetPass;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
