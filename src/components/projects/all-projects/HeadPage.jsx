import { useTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";
const HeadPage = () => {
  const { t } = useTranslation("common");
  return (
    <Head>
      <title>{t("Projects_Title")}</title>
      <meta name="description" content={t("Projects_Description")} />
    </Head>
  );
};

export default HeadPage;
