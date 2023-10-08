import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";
import Head from "next/head";
import { useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
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
      </Head>
      <PrivacyPolicy />
    </>
  );
};
export default index;
