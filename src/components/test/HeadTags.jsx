import Head from "next/head";
import { useTranslation } from "next-i18next";

const HeadTags = () => {
  const { t } = useTranslation("common");

  return (
    <Head>
      <title>{t("navHome")}</title>
    </Head>
  );
};
export default HeadTags;
