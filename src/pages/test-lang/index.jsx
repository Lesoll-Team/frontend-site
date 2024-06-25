import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

const Index = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("navHome")}</title>
      </Head>
      {t("navHome")}
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Index;
