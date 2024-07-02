import PropertiesCategories from "@/components/homePage/PropertiesCategories";
import Head from "next/head";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLangBoolean } from "@/utils/getLangBoolean";
const Index = () => {
  const language = getLangBoolean();

  return (
    <div className="py-10">
      <Head>
        <title>{language ? "تصنيف الإعلانات" : "Properties Categories"}</title>
      </Head>
      <PropertiesCategories language={language} />
    </div>
  );
};

export default Index;
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
