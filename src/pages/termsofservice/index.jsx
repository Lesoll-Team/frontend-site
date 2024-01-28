import TermsOfService from "@/components/termsofservice/TermsOfService";
import Head from "next/head";
import { useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>
          {language
            ? "الشروط و الاحكام | ليسول "
            : "Terms & Conditions | Lesoll "}
        </title>
        <meta name="robots" content="noindex, nofollow" />

        <meta
          name="description"
          content={
            language
              ? "تعرف على شروط و أحكام موقع ليسول عند استخدامك خدمات الموقع اذا كنت تبحث عن عقار او تريد الاعلان عن عقارك "
              : "Read about Lesoll’s terms and conditions when using the website to search for properties or advertise "
          }
        />
        <link rel="canonical" href={`https://lesoll.com/termsofservice`} />
      </Head>
      <TermsOfService />
    </>
  );
};
export default index;
