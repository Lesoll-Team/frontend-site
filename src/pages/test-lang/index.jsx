import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import TestComp from "@/components/test/TestComp";
import HeadTags from "@/components/test/HeadTags";

const Index = () => {
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
