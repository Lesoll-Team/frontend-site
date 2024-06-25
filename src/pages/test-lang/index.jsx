import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import TestComp from "@/components/test/TestComp";

const Index = () => {
  const { t } = useTranslation("common");
  const tc = useTranslation();
  console.log(tc[1].language);
  return (
    <div>
      <Head>
        <title>{t("navHome")}</title>
      </Head>
      <h1>{t("navHome")}</h1>
      <TestComp />
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
