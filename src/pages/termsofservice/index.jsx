import TermsOfService from "@/components/termsofservice/TermsOfService";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const index = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("Terms_Page.Meta_Title")}</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content={t("Terms_Page.Meta_Description")} />
        <link rel="canonical" href={`https://lesoll.com/termsofservice`} />
      </Head>
      <TermsOfService />
    </>
  );
};
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export default index;
