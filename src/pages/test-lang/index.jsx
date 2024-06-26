import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
// import Head from "next/head";
import TestComp from "@/components/test/TestComp";
import HeadTags from "@/components/test/HeadTags";

const Index = () => {
  // const { t } = useTranslation("common");
  // const tc = useTranslation();
  // console.log(tc[1].language);
  return (
    <div>
      <HeadTags />
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
