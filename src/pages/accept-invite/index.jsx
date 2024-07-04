import AcceptWithSetPassword from "@/components/accept-invite/AcceptWithSetPassword";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const index = () => {
  return (
    <div className="min-h-[90dvh] flex">
      <AcceptWithSetPassword />
    </div>
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
