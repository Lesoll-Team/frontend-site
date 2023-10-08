import TermsOfService from "@/components/termsofservice/TermsOfService";
import Head from "next/head";
import { useSelector } from "react-redux";
const language = useSelector((state) => state.GlobalState.languageIs);

const index = () => {
  return (
    <>
      <Head>
        <title>
          {language
            ? "الشروط و الاحكام | ليسول "
            : "Terms & Conditions | Lesoll "}
        </title>
        <meta
          name="description"
          content={
            language
              ? "تعرف على شروط و أحكام موقع ليسول عند استخدامك خدمات الموقع اذا كنت تبحث عن عقار او تريد الاعلان عن عقارك "
              : "Read about Lesoll’s terms and conditions when using the website to search for properties or advertise "
          }
        />
      </Head>
      <TermsOfService />
    </>
  );
};
export default index;
