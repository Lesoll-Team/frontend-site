import Otp from "@/components/auth/otp/components/Otp";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const OtpPage = () => {
  return <Otp />;
};

export default OtpPage;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
