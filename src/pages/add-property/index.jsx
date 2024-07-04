import AddProperty from "@/components/newAddProperty/AddProperty";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getLangBoolean } from "@/utils/getLangBoolean";
const addPropertyPage = () => {
  const language = getLangBoolean();
  return (
    <>
      <Head>
        <title>
          {language
            ? "اضف عقارك مع ليسول | موقع مخصص لبيع وايجار العقارات في مصر"
            : "Add property with Lesoll dedicated to selling and renting real estate"}
        </title>
        <meta name="robots" content="noindex, nofollow" />

        <meta
          name="description"
          content="اضف عقارك مع ليسول، فحن متخصصون في بيع وايجار جميع أنواع العقارات، شقق للبيع، شقق للايجار، اراضي للبيع والايجار، محلات للبيع والايجار، شقق دوبلكس"
        />
        <link rel="canonical" href={`https://lesoll.com/add-property`} />
      </Head>
      <AddProperty />
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
export default addPropertyPage;
