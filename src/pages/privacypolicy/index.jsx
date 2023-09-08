import PrivacyPolicy from "@/components/privacyPolicy/PrivacyPolicy";
import Head from "next/head";
import { useSelector } from "react-redux";

const index = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>{language ? "سياسة الخصوصية" : "Privacy & Policy"} </title>
        <meta
          name="description"
          content="استكشف مجموعة واسعة من العقارات المتاحة للإيجار على منصتنا للعقارات. ابحث عن شقق ومنازل ومساحات تجارية للإيجار في المواقع الرئيسية. ابحث عن العقار المؤجَّر المثالي اليوم!"
        />
      </Head>
      <PrivacyPolicy />
    </>
  );
};
export default index;
