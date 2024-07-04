import React from "react";
import Contact from "@/components/contact/Contact";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function contact() {
  const { t } = useTranslation("common");
  return (
    <div className="">
      <Head>
        <title>{t("Contact_Page.Meta_Title")}</title>
        <meta
          name="description"
          content={t("ConContact_Page.Meta_Description")}
        />
        <link rel="canonical" href={`https://lesoll.com/contact-us`} />
      </Head>
      <Contact />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
