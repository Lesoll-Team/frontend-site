import AddNeed from "@/components/needs/addNeed/AddNeed";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function need() {
  const language = getLangBoolean();

  return (
    <div className="min-h-[80dvh]  ">
      <Head>
        <title>{language ? "أضف طلبك | ليسول" : "Add your needs"}</title>
        <meta name="robots" content="noindex, nofollow" />

        <meta
          name="description"
          content={
            language
              ? "اضف طلبك للعقار الذى تبحث عنه كى نساعدك على ايجاده"
              : "Add your need to the property you are looking for so we can help you find it"
          }
        />
      </Head>
      <AddNeed />
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
