import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const index = () => {
  const language = getLangBoolean();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>
          {language ? "سياسة الخصوصية | ليسول " : "Privacy & Policy | Lesoll "}{" "}
        </title>
        <meta
          name="description"
          content={
            language
              ? "تعرف على سياسة خصوصية الموقع عند استخدامك خدماتنا في موقع ليسول والتي تضمن حماية بياناتك الشخصية واستخدامها على نحو يحافظ على سلامتها "
              : "Our privacy policy in Lesoll sets out how we protect your information when using Lesoll website "
          }
        />
        <link rel="canonical" href={`https://lesoll.com/privacypolicy`} />
      </Head>
      <PrivacyPolicy />
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
export default index;
